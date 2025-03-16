import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatDividerModule, MatIconModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })), 
      transition(':enter', [ 
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [ 
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ContactsComponent {
  title = 'Mind Matters';

  private apiUrl = 'http://localhost:3000/send-email';

  http = inject(HttpClient);

  getPost(post:any){
    return this.http.post(this.apiUrl, post);
  }
  message: string = '';
  sentMessage: string = '';
  hau_college_guidance: string = 'Holy Angel University College Guidance Office '
  sendMessage() {
    console.log('sendMessage() function called'); // ✅ Debugging log
    if (this.message.trim()) {
      console.log('Message to be sent:', this.message); // ✅ Log the message
  
      const postData = { message: this.message };
  
      this.http.post(this.apiUrl, postData).subscribe({
        next: (response) => {
          console.log('Message sent successfully:', response); // ✅ Log success
          this.sentMessage = this.message;
          this.message = ''; 
        },
        error: (error) => {
          console.error('Error sending message:', error); // ✅ Log error
        }
      });
    }
  }
  
  
}
