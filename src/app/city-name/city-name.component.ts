import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.css']
})

export class CityNameComponent {

  lista = [
    { id: '1', name: 'jorge', color: 'rojo', edad: '27' },
    { id: '2', name: 'ana', color: 'verde', edad: '22' },
    { id: '3', name: 'maria', color: 'rojo', edad: '27' },
    { id: '4', name: 'toño', color: 'azul', edad: '22' },
    { id: '5', name: 'pepe', color: 'rojo', edad: '27' }
  ];


}
