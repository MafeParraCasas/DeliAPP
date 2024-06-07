import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import {  IonCard,IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, RouterLink,IonCard,IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ]
})
export class InfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
