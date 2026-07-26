import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

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
  ];
  name = "Miguel";
  age = 42;
  disabled =  false;
  img = 'https://w3schools.com/howto/img_avatar.png'

  //manejo de objetos
  person = {
    name: 'Miguel',
    age: 42,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }
  clickHandler(){
    alert ('Hola mundo !!!')
  }

  changeHandler(event: Event){
    console.log(event);
  }

  keydownHandler(event:  KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
