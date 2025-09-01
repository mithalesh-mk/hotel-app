import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() {
    const storedReservations = localStorage.getItem('reservations');
    this.reservations = storedReservations ? JSON.parse(storedReservations) : [];
  }

  private reservations: Reservation[] = [];


  getReservations(): Reservation[] {
    return this.reservations;
  }
  
  getReservationById(id: string): Reservation | undefined {
    return this.reservations.find(reservation => reservation.id ===  id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    console.log('Reservation added:', reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter(reservation => reservation.id !== id);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));

  }

  updateReservation(updatedReservation: Reservation): void {
    const index = this.reservations.findIndex(reservation => reservation.id === updatedReservation.id);
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }

  }
  
}

