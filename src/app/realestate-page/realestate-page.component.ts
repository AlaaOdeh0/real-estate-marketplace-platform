import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-realestate-page',
  imports: [
    FormsModule,
    NgForOf,

  ],
  templateUrl: './realestate-page.component.html',
  styleUrl: './realestate-page.component.css'
})
export class RealestatePageComponent {
 realestate = [
    {
      id: 1,
      title: "Luxury Apartment in Zamalek",
      price: 2500000,
      description: "Spacious 3-bedroom apartment with Nile view.",
      images: ["/Dashboard/realestate1.png"],
      seller_id: 1,
      seller_name: "John Smith",
      status: "available",
      location: "Cairo - Zamalek",
      area: 180
    },
    {
      id: 2,
      title: "Villa in New Cairo",
      price: 5500000,
      description: "Modern villa with private garden and pool.",
      images: ["/Dashboard/realestate2.png"],
      seller_id: 1,
      seller_name: "Michael Johnson",
      status: "sold",
      location: "Cairo - New Cairo",

      area: 350
    },
    {
      id: 3,
      title: "Sea View Apartment in North Coast",
      price: 3200000,
      description: "Direct beach access, fully furnished summer apartment.",
      images: ["/Dashboard/realestate3.png"],
      seller_id: 3,
      seller_name: "Emily Davis",
      status: "available",
      location: "North Coast - Sidi Abdel Rahman",

      area: 120
    },
    {
      id: 4,
      title: "Commercial Space in Downtown",
      price: 4800000,
      description: "Prime location for retail or office space.",
      images: ["/Dashboard/realestate4.png"],
      seller_id: 3,
      seller_name: "Robert Wilson",
      status: "pending",
      location: "Cairo - Downtown",
      area: 250
    },
    {
      id: 5,
      title: "Penthouse in Sheikh Zayed",
      price: 6800000,
      description: "Luxury penthouse with panoramic views, smart home system.",
      images: ["/Dashboard/realestate5.png"],
      seller_id: 2,
      seller_name: "Sarah Thompson",
      status: "available",
      location: "Giza - Sheikh Zayed",

      area: 300

    },
    {
      id: 6,
      title: "Traditional House in Luxor",
      price: 1200000,
      description: "Authentic Egyptian house near historical sites.",
      images: ["/Dashboard/realestate6.png"],
      seller_id: 4,
      seller_name: "David Brown",
      status: "available",
      location: "Luxor - City Center",
      area: 200
    }
  ];


  filteredUsers = this.realestate;
  searchText: string = "";
  selectedType: string = 'all';

  applyFilters() {
    return this.realestate.filter(item => {
      const typeMatch = this.selectedType === 'all' || item.status === this.selectedType;
      return typeMatch;
    });
  }

  applySearch() {
    const filtered = this.applyFilters();

    if (!this.searchText) return filtered;

    const searchLower = this.searchText.toLowerCase();

    return filtered.filter(property => {
      return (
        property.title.toLowerCase().includes(searchLower) ||
        property.status.toLowerCase().includes(searchLower) ||
        property.description.toLowerCase().includes(searchLower) ||
        property.seller_name.toLowerCase().includes(searchLower) ||
        property.id.toString().includes(searchLower) ||
        property.price.toString().includes(searchLower) ||
        property.area.toString().includes(searchLower) ||
        property.seller_id.toString().includes(searchLower)
      );
    });
  }



  DeleteUser(id: number) {
    this.realestate = this.realestate.filter(u => u.id !== id);
  }


}
