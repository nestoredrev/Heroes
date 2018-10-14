import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { HeroesList }  from './hero/heroesList/heroeslist.component';
import { HeroDetails }  from './hero/heroDetails/herodetails.component';
import { Dashboard } from './dashboard/dashboard.component';

const routes: Routes = [
	{
		//Ruta por defecto al inicializar la app
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{

		path: 'heroesList',
		component: HeroesList
	},
	{

		path: 'heroDetails/:id',
		component: HeroDetails
	},
	{
		path: 'dashboard',
		component: Dashboard
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
