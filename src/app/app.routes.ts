import { Routes } from '@angular/router';
import { AngularDefaultComponent } from './angular-default/angular-default.component';

export const routes: Routes = [
    {
        path: '',
        component: AngularDefaultComponent,
        title: 'Home page'
    },
    {
        path: 'default',
        component: AngularDefaultComponent,
        title: 'Angular Default'
    }
];
