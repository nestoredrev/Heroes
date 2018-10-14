import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'heroDetails',
	templateUrl: 'herodetails.component.html',
	styleUrls: ['herodetails.component.css'],
	providers: [HeroService]
})

export class HeroDetails implements OnInit{
	 /*
	 	Obtener una variable del nodo padre.
	 	De esa manera compartimos variables entre componentes.
	 */
	@Input() hero:Hero;

	constructor(private heroService:HeroService,
				 private route: ActivatedRoute,
				 private location: Location){

	}

	goBack():void{
			this.location.back();
	}

	ngOnInit():void{
		//Recorrer y obtener los parametros que vienen desde app-routing.ts
		this.route.params.forEach((params: Params) =>
        {
            let id = +params['id']; // con el signo "+" convertimos el parametros id en numerico
            
            //Obtener el heroe de la promesa getHero mediante su id
            this.heroService.getHero(id).then(
              heroFunded => this.hero = heroFunded);
        });
	}
}
