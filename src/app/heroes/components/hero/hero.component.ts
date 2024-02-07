import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "IronMan";
  public age: number = 45;

  setName(name:string): void {
    this.name = name;
  }

  setAge(age:number): void {
    this.age = age;
  }

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${this.age}`;
  }

  resetForm(): void {
    this.name = "IronMan";
    this.age = 45;

    /*document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde angular</h1>';
    })*/
  }

}
