import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterdataPipe } from '../filterdata.pipe';

@Component({
  selector: 'app-city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.scss'],
})

export class CityNameComponent implements OnInit {
  lista: any = [];
  listName = [];
  totalItems: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json')
      .subscribe(ciudad => {
        this.lista = ciudad;
        this.listName = this.lista.slice(1, 3000);
      })
  }


}
