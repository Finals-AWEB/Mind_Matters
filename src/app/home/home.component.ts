import { Component, inject } from '@angular/core';
import { BlogsComponent } from '../blogs/blogs.component';
import { GuidesComponent } from '../guides/guides.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Mind Matters';
  tagline = 'Navigating Mental Health for a Balanced Life';
  description: string = 'The Importance of Student Mental Health';
  author: string = 'Kline';
  year: number = 2023;
  publicationDate: Date = new Date(2023, 10, 24);
  message: string = '';
  sentMessage: string = '';
  guide_categ1: string ='guidance'
  guide_categ2: string ='strategies'
  guide_categ3: string ='support'
  hau_college_guidance: string = 'Holy Angel University College Guidance Office '
  authors = 'Stewart & Maisonville';
  publicationDate_blog: number = new Date('2019-04-01').getFullYear();
  private apiUrl = 'http://localhost:3000/send-email';
  http = inject(HttpClient);

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
