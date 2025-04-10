import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../services/consulta-cep.service";
import { ConsultaCepResp } from "../services/consulta-cep-resp";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router, private service: ConsultaCepService) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    console.log(form.control);
    if (form.valid) {
      //  this.router.navigate(['sucesso']);
    } else {
      alert("Formulario invalido");
    }
  }
  consultaCEP(ev: any, ngForm: NgForm) {
    const eventoCep: string = ev.target.value;

    //console.log(ngForm.getControl(['cep']).valid);
    if (eventoCep !== "") {
      console.log(ev);    

      this.service.consultaCEP(eventoCep).subscribe(
        (response) => {
         console.log(response);
         const a = response;
         this.populandoEndereco( response, ngForm);
        },
        (error) => {
          //Error callback
          console.error(error);
        }
      );
    }
  }

  populandoEndereco(dados: ConsultaCepResp, f: NgForm) {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }
}
