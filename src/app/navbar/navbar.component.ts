import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { NgIf } from '@angular/common';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RegisterComponent, NgIf, LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showRegisterModal = false;
  showLoginModal = false;

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  openModal() {
    this.showRegisterModal = true;
  }

  closeModal() {
    this.showRegisterModal = false;
  }
}
