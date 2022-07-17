import { Component } from '@angular/core';
import { Scroll } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  btnDisabled = true;

  newName = "";

  person = {
    name:"Pepe",
    age: 25,
    avatar: "https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png"
  }

  names: String[] = ['Nico', 'Juli', 'Pepe', 'Juan'];

  products: Product[] = [
    {
      name: "El mejor juguete",
      price:565,
      image: "./assets/images/toy.jpeg",
      category: "all"
    },
    {
      name: "Bicicleta casi nueva",
      price: 356,
      image: "./assets/images/bike.jpeg"
    },
    {
      name: "Colección de albumes",
      price: 34,
      image: "./assets/images/album.jpeg"
    },
    {
      name: "Mis libros",
      price: 23,
      image: "./assets/images/books.jpeg"
    },
    {
      name: "Casita",
      price: 243,
      image: "./assets/images/house.jpeg"
    },
    {
      name: "Gafas",
      price: 40,
      image: "./assets/images/glasses.jpeg"
    }
  ]

  toggleButton() {
    this.btnDisabled =  !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName)
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
