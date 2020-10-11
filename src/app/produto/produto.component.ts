import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  constructor() {}

  @Input() titulo!: string;
  @Input() categoria!: string;
  @Input() nomeImg!: string;

  ngOnInit(): void {}
}
