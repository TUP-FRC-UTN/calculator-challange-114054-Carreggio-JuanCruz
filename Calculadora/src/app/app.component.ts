import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadorComponent } from "./components/calculador/calculador.component";
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  valor1:number=0;
  valor2:number=0;
  resultado:number=0;

  actualizarResultado(resultado:number){
    this.resultado = resultado;
    this.valor1=0;
    this.valor2=0;
  }

  limpiarResultado(){
    this.resultado = 0;
  }
  
  

  
}
