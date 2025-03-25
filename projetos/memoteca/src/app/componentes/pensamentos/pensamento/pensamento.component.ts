import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PensamentoComponent {
  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  };

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
