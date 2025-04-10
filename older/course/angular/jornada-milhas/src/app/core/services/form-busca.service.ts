import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl('Econômica'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
    });
  }

  /**
   * Constructs a descriptive string summarizing the number of passengers
   * (adults, children, and infants) based on the values retrieved from the form.
   *
   * @returns {string} A formatted string describing the passengers, including:
   * - The number of adults (e.g., "1 adulto" or "2 adultos").
   * - The number of children (e.g., "1 criança" or "2 crianças"), if any.
   * - The number of infants (e.g., "1 bebê" or "2 bebês"), if any.
   * The descriptions are separated by commas if multiple categories are present.
   * If no passengers are specified, an empty string is returned.
   */
  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('adultos')?.value;
    const passageiros = [
      { tipo: 'adulto', quantidade: this.formBusca.get('adultos')?.value },
      { tipo: 'criança', quantidade: this.formBusca.get('criancas')?.value },
      { tipo: 'bebê', quantidade: this.formBusca.get('bebes')?.value },
    ];

    descricao = passageiros
      .filter(p => p.quantidade && p.quantidade > 0)
      .map(p => `${p.quantidade} ${p.tipo}${p.quantidade > 1 ? 's' : ''}`)
      .join(', ');

    return descricao;
  }

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo,
      });
      console.log('Tipo de passagem alterado para: ', tipo);
    }
  }
}
