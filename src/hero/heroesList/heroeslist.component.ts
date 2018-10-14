import { Component,OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import {HeroService} from '../../services/hero.service';
import {Router} from "@angular/router";
@Component({
	selector: 'heroesList',
	templateUrl: 'heroeslist.component.html',
	styleUrls: ['heroeslist.component.css'],
	providers: [HeroService]
})

export class HeroesList implements OnInit{
	
	public heroes:Hero[];
	public heroSelected:Hero;

	//Injectar una instancia de la clase HeroService
	constructor(private heroService:HeroService,private route:Router){

	}

	//Obtener los detos estaticos del servicio
	// getHeroes():void{
	// 	this.heroes = this.heroService.getHeroes();
	// }

	//Obtener los datos a partir de la resolucion de la promesa
	getHeroes():void{
		this.heroService.getHeroes()
		.then(
			(resolve) => {
				this.heroes = resolve;
			}
		)
		.catch(
			(reject) => {
				console.log('Err'+reject);
			}
		);
	}

	//Inicializacion de variables en el componente
	ngOnInit():void{
		this.getHeroes();
	}

	heroListSelected(hero:Hero):void{
		this.heroSelected = hero;
		console.log(this.heroSelected.name);
	}

	goDetails(hero:Hero): void{
		let link = ['/heroDetails', hero.id];
		this.route.navigate(link);
	}
}
