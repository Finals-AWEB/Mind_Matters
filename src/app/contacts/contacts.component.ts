import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
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
