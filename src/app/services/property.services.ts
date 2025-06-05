import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private properties: Property[] = [
    {
      id: '1',
      title: 'Modern Apartment Downtown',
      price: 350000,
      description: 'A beautiful modern apartment located in the heart of the city.',
      address: '123 Main St, Cityville',
      status: 'Available',
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      mlsId: 'MLS123456',
      agency: 'City Realty',
      agent: 'Alice Johnson',
      images: [
   'https://images.trvl-media.com/lodging/34000000/33700000/33696700/33696682/57ddd0c6.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  'https://images.trvl-media.com/lodging/34000000/33700000/33696700/33696682/9fc626e0.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  'https://images.trvl-media.com/lodging/34000000/33700000/33696700/33696682/36d2def1.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  'https://images.trvl-media.com/lodging/34000000/33700000/33696700/33696682/a281cbb9.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  'https://images.trvl-media.com/lodging/34000000/33700000/33696700/33696682/a480e83c.jpg?impolicy=resizecrop&rw=1200&ra=fit'
],
      features: ['Balcony', 'Gym', 'Swimming Pool', '24/7 Security'],
      priceCut: {
        amount: 15000,
        date: '2025-05-01'
      }
    },
    {
      id: '2',
      title: 'Cozy Suburban House',
      price: 450000,
      description: 'Spacious house in a quiet suburb, perfect for families.',
      address: '456 Oak Drive, Suburbia',
      status: 'Available',
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      mlsId: 'MLS789101',
      agency: 'Suburban Homes',
      agent: 'Bob Smith',
      images: [
    'https://media.istockphoto.com/id/1415886888/photo/freshly-painted-craftsman-bungalow-house.jpg?s=1024x1024&w=is&k=20&c=RyhWiVE6cwqI2FBT1Ato97Jl7xrnHmvJolNrD2GA-rk=',
    'https://media.istockphoto.com/id/1415886890/photo/freshly-painted-craftsman-bungalow-house.jpg?s=1024x1024&w=is&k=20&c=--XbZgO0ywJtG4t88ghI68bQuIThdxn9IfoofrUUQu4=',
    'https://media.istockphoto.com/id/177478372/photo/luxury-family-house.jpg?s=1024x1024&w=is&k=20&c=EBN-bRlV2kl-cTdb-SG6iVsleKKf_y0PoQYhpo59J64='
      ],
      features: ['Garage', 'Large Garden', 'Fireplace'],
      priceCut: {
        amount: 0,
        date: ''
      }
    },
    {
      id: '3',
      title: 'Luxury Beachfront Villa',
      price: 1250000,
      description: 'Exclusive villa with stunning ocean views and private beach access.',
      address: '789 Ocean Blvd, Beach City',
      status: 'sold',
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      mlsId: 'MLS112233',
      agency: 'Luxury Estates',
      agent: 'Carla Gomez',
      images: [
    'https://www.theluxurybali.com/wp-content/uploads/2014/12/Villa-Bayu-Gita-Beachfront-Pool-and-deck.jpg',
    'https://www.theluxurybali.com/wp-content/uploads/2014/12/Villa-Bayu-Gita-Beachfront-Path-across-pond.jpg',
    'https://www.theluxurybali.com/wp-content/uploads/2014/12/Villa-Bayu-Gita-Beachfront-Ocean-view.jpg',
    'https://www.theluxurybali.com/wp-content/uploads/2014/12/Villa-Bayu-Gita-Beachfront-Poolside.jpg'
      ],
      features: ['Private Pool', 'Sauna', 'Home Theater', 'Smart Home System'],
      priceCut: {
        amount: 50000,
        date: '2025-04-15'
      }
    }
  ];

  constructor() {}

  getProperties(): Observable<Property[]> {
    return of(this.properties);
  }

  getPropertyById(id: string): Observable<Property | undefined> {
    const property = this.properties.find(p => p.id === id);
    return of(property);
  }

  addProperty(propertyData: Partial<Property>): Observable<Property> {
    const newProperty: Property = {
      id: (this.properties.length + 1).toString(),
      title: propertyData.title || 'New Property',
      price: propertyData.price || 0,
      description: propertyData.description || '',
      address: propertyData.address || '',
      status: propertyData.status || 'Available',
      bedrooms: propertyData.bedrooms || 0,
      bathrooms: propertyData.bathrooms || 0,
      area: propertyData.area || 0,
      mlsId: propertyData.mlsId || '',
      agency: propertyData.agency || '',
      agent: propertyData.agent || '',
      images: propertyData.images || [],
      features: propertyData.features || [],
      priceCut: propertyData.priceCut || { amount: 0, date: '' }
    };
    this.properties.push(newProperty);
    return of(newProperty);
  }

  updateProperty(id: string, updatedData: Partial<Property>): Observable<Property | undefined> {
    const index = this.properties.findIndex(p => p.id === id);
    if (index === -1) {
      return of(undefined);
    }
    this.properties[index] = { ...this.properties[index], ...updatedData };
    return of(this.properties[index]);
  }

  deleteProperty(id: string): Observable<boolean> {
    const initialLength = this.properties.length;
    this.properties = this.properties.filter(p => p.id !== id);
    return of(this.properties.length < initialLength);
  }
}
