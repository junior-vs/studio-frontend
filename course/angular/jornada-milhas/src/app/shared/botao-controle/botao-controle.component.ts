import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-botao-controle',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss'],
  standalone: true,
})
export class BotaoControleComponent implements OnInit {
  @Input() operacao: 'incrementar' | 'decrementar' = 'incrementar';
  @Input() src = '';
  @Input() alt = '';


  ngOnInit(): void {
  }
}
