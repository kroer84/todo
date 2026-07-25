import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
  variable = "hola mundo";
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente'
  ]
}
