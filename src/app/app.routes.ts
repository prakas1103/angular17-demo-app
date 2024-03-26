import { Routes } from '@angular/router';
import { AngularDefaultComponent } from './angular-default/angular-default.component';
import { HomesComponent } from './homes/homes.component';
import { DetailsComponent } from './homes/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomesComponent,
        title: 'Home page'
    },
    {
        path: 'default',
        component: AngularDefaultComponent,
        title: 'Angular Default'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
    {
        path: 'homes',
        component: HomesComponent,
        title: 'Home page'
    }
];
