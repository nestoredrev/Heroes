import { Component, Input } from '@angular/core';
import {Hero} from '../../classes/hero';



@Component({
	selector: 'heroDetails',
	templateUrl: 'herodetails.component.html',
	styleUrls: ['herodetails.component.css']
})

export class HeroDetails{
	 @Input() hero:Hero;
}
