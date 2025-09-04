import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservationservice';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css'
})
export class ReservationList implements OnInit {

  constructor(private reservationService: ReservationService) {

  }

  reservations : Reservation[] = [];

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(index: string): void {
    this.reservationService.deleteReservation(index);
  }


}
