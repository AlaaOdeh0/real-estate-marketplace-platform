import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AddUserComponent} from "../add-user/add-user.component";
import {UpdateUserComponent} from "../update-user/update-user.component";



declare var bootstrap: any;

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    FormsModule,

    ReactiveFormsModule,

    CommonModule,
    AddUserComponent,
    UpdateUserComponent

  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {
  user = [
    {
      id: 1,
      images: ["/Dashboard/user1.png"],
      name: "John Doe",
      email: "john@email.com",
      profile: "john.jpg",
      type: "seller"
    },
    {
      id: 2,
      images: ["/Dashboard/user9.png"],
      name: "Sarah Johnson",
      email: "sarah@email.com",
      profile: "sarah.jpg",
      type: "buyer"
    },
    {
      id: 3,
      name: "Ali Ahmad",
      images: ["/Dashboard/user11.png"],
      email: "ali@email.com",
      profile: "ali.jpg",
      type: "agent"
    },
    {
      id: 4,
      name: "Emily Brown",
      images: ["/Dashboard/user4.png"],
      email: "emily@email.com",
      profile: "emily.jpg",
      type: "admin"
    },
    {
      id: 5,
      name: "Huda Nasser",
      images: ["/Dashboard/user5.png"],
      email: "huda@email.com",
      profile: "huda.jpg",
      type: "seller"
    },
    {
      id: 6,
      name: "Tariq Salim",
      images: ["/Dashboard/user6.png"],
      email: "tariq@email.com",
      profile: "tariq.jpg",
      type: "buyer"
    },
    {
      id: 7,
      name: "Maya Khalil",
      images: ["/Dashboard/user7.png"],
      email: "maya@email.com",
      profile: "maya.jpg",
      type: "agent"
    },
    {
      id: 8,
      name: "Omar Barakat",
      images: ["/Dashboard/user8.png"],
      email: "omar@email.com",
      profile: "omar.jpg",
      type: "admin"
    }
  ];

  selectedUser: any = null;

  openEditModal(user: any) {
    this.selectedUser = user;
    const modalElement = document.getElementById('editUserModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }

  handleUserUpdate(updatedUser: any) {
    const index = this.user.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.user[index] = updatedUser;
    }
  }



  DeleteUser(id: number) {
    this.user = this.user.filter(u => u.id !== id);
  }


  // filteredUsers = this.user;
  searchText: string = "";
  selectedType: string = 'all';


  applyFilters() {
    return this.user.filter(user => {
      return this.selectedType === 'all' || user.type === this.selectedType;
    });
  }


  applySearch() {
    const filtered = this.applyFilters();
    return filtered.filter(user =>
      this.searchText === '' ||
      user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.type.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }




  addUser(userData: any) {
    const lastId = this.user.length > 0
      ? Math.max(...this.user.map(u => u.id))
      : 0;

    const newUser = {
      ...userData,
      id: lastId + 1,
      images: [userData.image || "/Dashboard/default.png"]
    };

    this.user.push(newUser);
  }

}

