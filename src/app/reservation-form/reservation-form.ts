import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../reservation/reservationservice';


@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css'
})
export class ReservationForm implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private reservationService: ReservationService
    ) {
  }

  ngOnInit(): void {
      this.reservationForm = this.fb.group({
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
        guestName: ['', Validators.required],
        guestEmail: ['', [Validators.required, Validators.email]],
        roomNumber: ['', [Validators.required, Validators.min(1)]],
        id: ['', Validators.required]

      })
  }

  reservationForm: FormGroup = new FormGroup({});

  onSubmit() {
    if(this.reservationForm.valid) {
      //console.log(this.reservationForm.value);
      const newReservation: Reservation  = this.reservationForm.value;
      this.reservationService.addReservation(newReservation);
      this.reservationForm.reset();
    }
    
  }


}
