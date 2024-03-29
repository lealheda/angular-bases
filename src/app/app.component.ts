import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesModule, CounterModule, DbzModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';

}
