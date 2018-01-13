import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})

export class IncrementadorComponent implements OnInit {

  @ Input('nombre') leyenda: string = 'Leyenda';
  @ Input() progreso: number = 50;

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Output ('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
// console.log('Leyenda', this.leyenda);
// console.log('Progreso', this.progreso);

   }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
  }


  cambios (newValue: number) {


    // console.log(this.txtProgress);

      if (newValue >= 100) {
        this.progreso = 100;
      } else if (newValue <= 0) {
        this.progreso = 0;
      } else {
        this.progreso = newValue;
      }
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

    console.log('cambios ', this.progreso);
  }

  cambiarValor (valor: number) {
    if (this.progreso >= 100 && valor > 0  ) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
  this.progreso = this.progreso  + valor;

  this.cambioValor.emit(this.progreso);
  console.log('cambia valor ', this.progreso);
  this.txtProgress.nativeElement.focus();

  }


}
