import { Component } from '@angular/core';
import { HomesContentComponent } from "./homes-content/homes-content.component";

@Component({
    selector: 'app-homes',
    standalone: true,
    template: `
    <main>
    <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section>
        <app-homes-content></app-homes-content>
    </section>
    </main>
    `,
    // templateUrl: './homes.component.html',
    styleUrl: './homes.component.scss',
    imports: [HomesContentComponent]
})
export class HomesComponent {

}
