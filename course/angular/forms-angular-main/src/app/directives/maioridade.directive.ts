import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[appMaioridade]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaioridadeDirective,
      multi: true,
    },
  ],
})
export class MaioridadeDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const anoNascMais18 = new Date(control.value).getFullYear() + 18;
    const anoAtual = new Date().getFullYear();

    const ehMaior = anoNascMais18 <= anoAtual;
    

    return ehMaior ? null : { MaioridadeDirective: true };
  }
}
