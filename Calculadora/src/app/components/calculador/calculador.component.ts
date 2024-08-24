import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculador',
  standalone: true,
  imports: [],
  templateUrl: './calculador.component.html',
  styleUrl: './calculador.component.css'
})
export class CalculadorComponent {

  @Input() valor1:number=0;
  @Input() valor2:number=0;
  @Output() resultado=new EventEmitter<number>();
  @Output() limpiar = new EventEmitter<any>();

  Sumar(valor1:number, valor2:number){
    this.resultado.emit(valor1 + valor2);
  }
  Restar(valor1:number, valor2:number){
    this.resultado.emit(this.valor1 - this.valor2);  
  }
  Dividir(valor1:number, valor2:number){
    this.resultado.emit(this.valor1 / this.valor2);  
  }
  Multiplicar(valor1:number, valor2:number){
    this.resultado.emit(this.valor1 * this.valor2);  
  }
  Potenciar(valor1:number, valor2:number){
    this.resultado.emit(Math.pow(valor1,valor2));  
  }
  Radicalizar(valor1:number, valor2:number){
    this.resultado.emit(Math.pow(valor1,1/valor2)); 
  }
  LimpiarResultado(){
    this.limpiar.emit();
  }
}
