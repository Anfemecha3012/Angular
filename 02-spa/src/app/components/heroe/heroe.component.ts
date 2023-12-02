import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { HeroesService } from "./../servicios/heroes.service";


@Component ({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    

    heroe:any = {};

    constructor( private activatedRoute: ActivatedRoute,
                 private _heroesService: HeroesService,
                 private router: Router
    ) {

        this.activatedRoute.params.subscribe( params =>{
            this.heroe = this._heroesService.getHeroe ( params ['id'] );
        })
     }

     irAHeroes() {
        this.router.navigate(['/heroes']);
      }
}