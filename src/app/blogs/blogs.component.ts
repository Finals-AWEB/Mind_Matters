import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrls: './blogs.component.css',
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
export class BlogsComponent {
  title: string = 'Blogs';
  author: string = 'Kline';
  year: number = 2023;
  publicationDate: Date = new Date(2023, 10, 24);
  authors = 'Stewart & Maisonville';
  publicationDate_blog: number = new Date('2019-04-01').getFullYear();
  publisher: string = 'Canadian Mental Health Association';
  publication_date: number = new Date('2024-02-24').getFullYear();
  benefits1: string ='Better Stress Management';
  benefits2: string ='Healthier Relationships';
  benefits3: string ='Increasing Self-esteem';
  benefits4: string ='Better Resilience';
  benefits5: string ='Better Productivity';
  benefits6: string ='Higher Quality of Life';
  currentDate: Date = new Date();
  location: string = "Philippines";
}
