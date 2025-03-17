import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CardBuscaComponent } from "../../shared/card-busca/card-busca.component";
import { ContainerComponent } from "../../shared/container/container.component";
import { CardDepoimentoComponent } from "../../shared/card-depoimento/card-depoimento.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BannerComponent, CardBuscaComponent, ContainerComponent, CardDepoimentoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
