import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Property} from './models/property.model';

@Injectable({
providedIn: 'root'
})
export class ListingsService {
private listings = [
{ id: 1, title: 'Luxury House', price: 120000, type: 'House', description: 'Charming 6-bedroom house', status: 'active' , image: ''},
{ id: 2, title: 'Big Home', price: 90000, type: 'House', description: ' 5-bedroom unit.', status: 'active',  image: ''  },
{ id: 3, title: 'Luxury Villa', price: 450000, type: 'Villa', description: '5-bedroom villa with pool.', status: 'rent' ,  image: ''  }
];

getListings() {
return this.listings;
}

addListing(listing: any) {
const id = Math.max(...this.listings.map(l => l.id)) + 1;
this.listings.push({ ...listing, id });
}

deleteListing(id: number) {
this.listings = this.listings.filter(l => l.id !== id);
}

updateListing(id: number, updated: any) {
const index = this.listings.findIndex(l => l.id === id);
if (index !== -1) this.listings[index] = { ...updated, id };
}

getListingById(id: number) {
return this.listings.find(l => l.id === id);
}

}
