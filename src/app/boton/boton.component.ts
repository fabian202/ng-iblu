import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() name: string = 'Magia';

  lista = [
    { id: 1, text: 'uno' },
    { id: 2, text: 'dos' },
    { id: 3, text: 'tres' },
    { id: 4, text: 'cuatro' },
    { id: 5, text: 'cinco'}
  ]

  constructor() { }

  ngOnInit() {
  }

  hola() {
    alert('Hola');
  }

}
