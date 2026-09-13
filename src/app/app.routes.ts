import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home)
  },

  {
    path: 'readers',
    loadComponent: () =>
      import('./features/readers/reader-list/reader-list')
        .then(m => m.ReaderList)
  },

  {
    path: 'readers/tarot-mystic-1111',
    loadComponent: () =>
      import('./features/readers/reader-profile/reader-profile')
        .then(m => m.ReaderProfile)
  },

  {
    path: 'booking',
    loadComponent: () =>
      import('./features/bookings/booking/booking')
        .then(m => m.Booking)
  },

  {
    path: 'booking-review',
    loadComponent: () =>
      import('./features/bookings/booking-review/booking-review')
        .then(m => m.BookingReview)
  },

  {
    path: 'payment',
    loadComponent: () =>
      import('./features/payments/payment/payment')
        .then(m => m.Payment)
  },

  {
    path: 'booking-confirmation',
    loadComponent: () =>
      import('./features/bookings/booking-confirmation/booking-confirmation')
        .then(m => m.BookingConfirmation)
  },

  {
    path: 'my-bookings',
    loadComponent: () =>
      import('./features/bookings/my-bookings/my-bookings')
        .then(m => m.MyBookings)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },

  {
    path: '**',
    redirectTo: ''
  }
];