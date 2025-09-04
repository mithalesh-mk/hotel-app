import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../reservation/reservationservice';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css'
})
export class ReservationForm implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
      this.reservationForm = this.fb.group({
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
        guestName: ['', Validators.required],
        guestEmail: ['', [Validators.required, Validators.email]],
        roomNumber: ['', [Validators.required, Validators.min(1)]],
        id: Math.random().toString(36).substring(2, 9)

      })
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      
      if(id) {
        const reservation = this.reservationService.getReservationById(id);
        if(reservation) {
          this.reservationForm.patchValue(reservation);
        }
      }
  }

  reservationForm: FormGroup = new FormGroup({});

  onSubmit() {
    if(this.reservationForm.valid) {
      const newReservation: Reservation  = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if(id) {
        this.reservationService.updateReservation(this.reservationForm.value);
        this.router.navigate(['/reservation']);
      }else {
        this.reservationService.addReservation(newReservation);
        this.reservationForm.reset();
      }
      this.router.navigate(['/reservation']);
    }
    
  }


}
