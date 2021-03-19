import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edadUno: number;
  edadDos: number;

  resultadoSuma: number;
  resultadoPromedio: number;

  constructor() {}

  ngOnInit(): void {}

  calcular() {
    this.resultadoSuma = Number(this.edadUno) + Number(this.edadDos);
    this.resultadoPromedio = this.resultadoSuma / 2;
  }

  borrar() {
    this.edadUno = null;
    this.edadDos = null;
    this.resultadoSuma = null;
    this.resultadoPromedio = null;
  }
}
