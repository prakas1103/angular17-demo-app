import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-homes-content',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
    <form>
        <input type="text" placeholder="Filter By City" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
    </section>
    <section class="results">
        <!-- <app-housing-location
            *ngFor="let housingLocation of housingLocationList"
            [housingLocation]="housingLocation">
          </app-housing-location> -->
          @for(housingLocation of filteredLocationList; track housingLocation) {
            <app-housing-location [housingLocation]="housingLocation"/>
          }
    </section>
  `,
  // templateUrl: './homes-content.component.html',
  styleUrl: './homes-content.component.scss'
})
export class HomesContentComponent {
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string){
    if (!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
