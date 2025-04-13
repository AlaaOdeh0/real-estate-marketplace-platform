import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RegisterComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showRegisterModal = false;

  openModal() {
    this.showRegisterModal = true;
  }

  closeModal() {
    this.showRegisterModal = false;
  }
}
