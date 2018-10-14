import {Injectable} from '@angular/core';
import {HEROES} 	from '../mocks/mock-heroes';
import {Hero} 		from '../classes/hero';


@Injectable()

export class HeroService{

	//Obtener los datos de manera estatica de  los Mocks
	// getHeroes():Hero[]{
	// 	return HEROES;
	// }

	/*
		Obtener los datos a partir de una promesa (Promise)
		Las promesas son la nueva forma de realizar llamadas asyncronas.
		Por ejemplo consumir datos a partir de una peticion de un servidor.
	 */

	//Definicion de una promesa de manera resumida	
	getHeroes():Promise<Hero[]>{
		return Promise.resolve(HEROES);
	}

	getHero(id:number):Promise<Hero>{
		return this.getHeroes().then(
			(heroes) => heroes.find(hero => hero.id == id)
		);
	}
}


