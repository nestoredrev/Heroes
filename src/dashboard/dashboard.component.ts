import { Component, OnInit } from '@angular/core';
import {Hero} from '../classes/hero';
import {HeroService} from '../services/hero.service';
import {Router} from "@angular/router";

@Component({
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css'],
	providers: [HeroService]
})

export class Dashboard implements OnInit{

	public heroes:Hero[];

	constructor(private heroService: HeroService, private route:Router){

	}

	ngOnInit(): void{
		this.heroService.getHeroes()
		.then(
			(resolve) => {
				console.log(resolve);
				this.heroes = resolve.slice(1,5);
			}
		);
	}

	//Se puede navegar con el route navigate o en la vista utilizando routerLink="/heroDetails/{{hero.id}}"
	// goDetails(hero:Hero): void{
	// 	let link = ['/heroDetails', hero.id];
	// 	this.route.navigate(link);
	// }
};