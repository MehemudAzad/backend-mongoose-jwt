import express from 'express';
import { BookingController } from './booking.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { bookingValidations } from './booking.validation';

const router = express.Router();

//insert an booking
router.post('/',
    auth('user'),
    validateRequest(bookingValidations.createbookingValidationSchema),
    BookingController.createBooking);

//retrieve all bookings
router.get(
    '/', 
    auth('admin'),
    BookingController.getAllBookings
);

//retrieve user bookings
router.get(
    '/my-bookings',
    auth('user'),
    BookingController.getMyBookings
)

export const BookingRoutes = router;
