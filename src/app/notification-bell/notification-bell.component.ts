import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../services/notification.service';

interface Notification {
  id: number;
  avatarUrl?: string;
  sourceName: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  link?: string;
}

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.css'] 
})
export class NotificationBellComponent implements OnInit {

  notifications: Notification[] = [];
  unreadCount: number = 0;
  isDropdownOpen = false; 

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    // لما تجهز API شغلي هاد:
    this.notificationService.getAllNotifications().subscribe((data: any[]) => {
      this.notifications = data.map((item: any) => ({
        id: item.id,
        avatarUrl: item.avatarUrl || 'https://i.pinimg.com/736x/50/45/69/504569a4935efb220733e307716ba94c.jpg',
        sourceName: item.sourceName || 'System',
        message: item.message,
        timestamp: item.timestamp || 'Just now',
        isRead: item.isRead || false,
        link: item.link || '#'
      }));
      this.updateUnreadCount();
    }, () => {
      // إذا صار إيرور بالباك، بتضل الداتا الوهمية تشتغل
      this.notifications = [
        {
          id: 1,
          avatarUrl: 'https://i.pinimg.com/736x/50/45/69/504569a4935efb220733e307716ba94c.jpg',
          sourceName: 'Property Inquiry',
          message: "New message received for 'Coastal Villa listing'.",
          timestamp: '15m ago',
          isRead: false,
          link: '#'
        },
        {
          id: 2,
          avatarUrl: 'https://i.pinimg.com/736x/e6/a1/c7/e6a1c715ef89edbd6396aa74a80b04ad.jpg',
          sourceName: 'Booking System',
          message: "Your viewing for '123 Main St' is confirmed for tomorrow.",
          timestamp: '1h ago',
          isRead: false,
          link: '#'
        },
        {
          id: 3,
          avatarUrl: 'https://i.pinimg.com/736x/96/91/e0/9691e005ae4abd0d8ca73977d2851aba.jpg',
          sourceName: 'Price Alert',
          message: "Price drop detected on 'Sunrise Apartments' you saved.",
          timestamp: 'Today',
          isRead: false,
          link: '#'
        },
        {
          id: 4,
          avatarUrl: 'https://i.pinimg.com/236x/3f/c3/2a/3fc32a44d6f50eb60a2b986c7e7805c5.jpg',
          sourceName: 'New Listing Alert',
          message: "A new 3-bedroom house matching your preferences is available.",
          timestamp: 'Yesterday',
          isRead: true,
          link: '#'
        },
        {
          id: 5,
          avatarUrl: 'https://i.pinimg.com/236x/d6/d1/2d/d6d12daa108110da639549cea1066a0f.jpg',
          sourceName: 'Transaction Update',
          message: "Payment confirmation received for 'Downtown Loft' deposit.",
          timestamp: '3 days ago',
          isRead: true,
          link: '#'
        }
      ];
      this.updateUnreadCount();
    });
  }

  updateUnreadCount(): void {
    this.unreadCount = this.notifications.filter(n => !n.isRead).length;
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => n.isRead = true);
    this.updateUnreadCount();
  }

  markAsRead(notification: Notification): void {
    if (!notification.isRead) {
      notification.isRead = true;
      this.updateUnreadCount();
    }
  }

  performAction(notification: Notification, event: Event): void {
    this.markAsRead(notification);
    if (!notification.link || notification.link === '#') {
      event.preventDefault(); 
    }
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}