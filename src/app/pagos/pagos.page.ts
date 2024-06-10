import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonAvatar, IonFooter, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonIcon, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonMenuButton, IonAvatar, IonFooter, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonIcon, IonGrid, IonCol, IonRow ]
})
export class PagosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
