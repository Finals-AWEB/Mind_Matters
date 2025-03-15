import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.css'
})
export class GuidesComponent {
  title: string ='How to cope and overcome Mental Health Problems';
  publisher: string ='Mental Health Foundation';
  videoUrl: SafeResourceUrl;
  youtube_publisher: string ='Psych2Go';

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3QIfkeA6HBY');
  }

  articles: string[] = [
    "Exercise regularly: A short daily walk can improve mood and health.",
    "Eat well & stay hydrated: A balanced diet and water help maintain energy and focus.",
    "Prioritize sleep: Stick to a schedule and limit screen time before bed.",
    "Relax & unwind: Try meditation, deep breathing, or hobbies you enjoy.",
    "Set goals & boundaries: Avoid overloading yourself and appreciate daily achievements.",
    "Practice gratitude: Acknowledge and write down what you are thankful for.",
    "Stay positive: Challenge negative thoughts and focus on optimism.",
    "Connect with others: Seek emotional support from friends and family."
  ];
  articles1: string[] = [
    "Build resilience: Stay active, eat well, and get enough sleep.",
    "Reduce stress: Prioritize tasks, exercise, and practice mindfulness.",
    "Get quality sleep: Maintain a schedule and limit screen time before bed.",
    "Be mindful: Focus on the present, breathe deeply, and practice gratitude.",
    "Cope with loss: Take care of yourself, seek support, and be patient.",
    "Strengthen connections: Spend time with loved ones and meet new people."
  ];
  articles2: string[] = [
    "Identify what's causing stress and take action.",
    "Build strong, positive relationships: Connect with supportive friends and family members when you're having a difficult time.",
    "Get regular exercise, eat nourishing food, and participate in activities you enjoy.",
    "Stay focused on the positive and avoid negative energy.",
    "Avoid drugs and alcohol.",
    "Rest your mind: Sleep, do yoga, meditate, and perform relaxation exercises that can help restore energy.",
    "Get help from a psychologist when you're overwhelmed."
  ];
}

