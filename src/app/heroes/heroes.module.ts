import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { HeroeListComponent } from "./components/list/list.component";


@NgModule({
  declarations: [ HeroComponent, HeroeListComponent ],
  exports: [
    HeroComponent, HeroeListComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule {

}
