import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  title = 'Mind Matters';
  message: string = '';
  sentMessage: string = '';
  hau_college_guidance: string = 'Holy Angel University College Guidance Office '
  sendMessage() {
    if (this.message.trim()) {
      this.sentMessage = this.message;
      this.message = ''; 
    }
  }
}
