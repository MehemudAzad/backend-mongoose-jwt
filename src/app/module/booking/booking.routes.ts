import express from 'express';
import { BookingController } from './booking.controller';

const router = express.Router();

//insert an order
router.post('/create-order', BookingController.createBooking);

//retrieve all orders
router.get('/', BookingController.getAllBookings);

export const BookingRoutes = router;
