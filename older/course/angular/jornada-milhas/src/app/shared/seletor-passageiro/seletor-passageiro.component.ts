import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // NG_VALUE_ACCESSOR é uma interface que permite que o componente funcione como um ControlValueAccessor
      useExisting: forwardRef(() => SeletorPassageiroComponent), // forwardRef é usado para evitar problemas de referência circular
      multi: true, // multi: true indica que este provedor pode ser usado em conjunto com outros provedores
    },
  ],
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  value: number = 0;

  onChange = (val: number) => {};
  onTouch = () => {};

  writeValue(val: any): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // Implementação opcional para desabilitar o componente
  }

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
