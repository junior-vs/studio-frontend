import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
})
export class RodapeComponent {
  imagem = 'assets/imagens/logo-alura.png';
  alttext='Logo Alura';
}
