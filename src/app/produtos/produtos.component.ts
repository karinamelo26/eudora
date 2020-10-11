import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  constructor() {}

  produtos: Produto[] = [
    { titulo: 'Love Eudora', categoria: 'Perfumes', nomeImg: 'item1.png' },
    { titulo: 'Veltet Passion', categoria: 'Cosméticos', nomeImg: 'item2.png' },
    { titulo: 'Nude Autoral', categoria: 'Kits', nomeImg: 'item3.png' },
    { titulo: 'Rouge Eudora', categoria: 'Perfumes', nomeImg: 'item4.png' },
    { titulo: 'Sabonete Chic', categoria: 'Cosméticos', nomeImg: 'item5.png' },
    { titulo: 'Kit Nutri Ouro', categoria: 'Cabelos', nomeImg: 'item6.png' },
    { titulo: 'Aflorá Flor de Maçã', categoria: 'Kits', nomeImg: 'item7.png' },
    { titulo: 'Monte seu Kit', categoria: 'Maquiagem', nomeImg: 'item8.png' },
    {
      titulo: 'Delineador Royal Liner',
      categoria: 'Maquiagem',
      nomeImg: 'item9.png',
    },
  ];
  trackBy: TrackByFunction<Produto> = (index, item) => item.titulo;
  ngOnInit(): void {}
}
