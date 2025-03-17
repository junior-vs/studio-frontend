import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
})
export class CardBuscaComponent {}
