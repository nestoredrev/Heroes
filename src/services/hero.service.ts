import {Injectable} from '@angular/core';
import {HEROES} 	from '../mocks/mock-heroes';
import {Hero} 		from '../classes/hero';


@Injectable()

export class HeroService{

	getHeroes():Hero[]{
		return HEROES;
	}
}


