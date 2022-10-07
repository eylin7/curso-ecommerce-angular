import { Component } from '@angular/core';

import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Nicolas';
  age = 18;
  img = 'https://st.depositphotos.com/1766887/2306/i/450/depositphotos_23063254-stock-photo-beautiful-white-sandy-beaches-of.jpg';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: '',
  }
  person = {
    name : 'Nicolas',
    age : 18,
    avatar: 'https://st.depositphotos.com/1766887/2306/i/450/depositphotos_23063254-stock-photo-beautiful-white-sandy-beaches-of.jpg'
    }
    names: string[] = ['Nico','Juli', 'Santi'];
    newName = '';
    box = {
      width: 100,
      height: 100,
      background: 'red'
    };
    products : Product[]= [
      {
        name: 'El mejor juguete',
        price : 565,
        image : '../assets/image/juguete.jpeg'
      },
      {
        name: 'Bicicleta casi nueva',
        price : 356,
        image :'../assets/image/bicicleta.jpeg'
      },
      {
        name: 'Colecciòn de albunes',
        price : 34,
        image :'../assets/image/albun.jpeg'
      },
      {
        name: 'Mis libros',
        price : 23,
        image :'../assets/image/libros.jpeg'
      },
      {
        name: 'Casa para perro',
        price : 34,
        image :'../assets/image/casa-perros.jpeg'
      },
      {
        name: 'Gafas',
        price : 3434,
        image :'../assets/image/gafas.jpeg'
      },
    ]

    toggleButton(){
      this.btnDisabled = !this.btnDisabled;
    }
    increaseAge(){
      this.person.age += 1;
    }
    onScroll(event:Event){
      const element = event.target as HTMLElement;
      console.log(element.scrollTop);
    }
    changeName(event:Event){
      const element = event.target as HTMLInputElement;
      this.person.name = element.value;
     
    }
    addName(){
      this.names.push(this.newName);
      this.newName= '';
    }
    deleteName(index: number){
      this.names.splice(index, 1)
    }
    onRegister() {
      console.log(this.register
        );
      
    }
}
