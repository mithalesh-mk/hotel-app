import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationForm } from '../reservation-form/reservation-form';
import { ReservationList } from '../reservation-list/reservation-list';
import { Home } from '../home/home';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReservationForm,
    ReservationList,
    Home
  ]
})
export class ReservationModule { }
