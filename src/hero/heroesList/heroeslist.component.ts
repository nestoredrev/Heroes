import { Component,OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import {HeroService} from '../../services/hero.service';

@Component({
	selector: 'heroesList',
	templateUrl: 'heroeslist.component.html',
	styleUrls: ['heroeslist.component.css'],
	providers: [HeroService]
})

export class HeroesList implements OnInit{
	
	public heroes:Hero[];
	public heroSelected:Hero;

	constructor(public heroService:HeroService){

	}

	getHeroes():void{
		this.heroes = this.heroService.getHeroes();
	}

	ngOnInit():void{
		this.getHeroes();
	}

	heroListSelected(hero:Hero){
		this.heroSelected = hero;
		console.log(this.heroSelected.name);
	}

}
