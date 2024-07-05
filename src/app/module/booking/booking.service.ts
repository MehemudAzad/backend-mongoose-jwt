import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

const bookingServiceIntoDB = async (order: TBooking) => {
  const result = await Booking.create(order);
  return result;
};

const getAllBookingsFromDB = async () => {
  const result = await Booking.find({});
  return result;
};

const getOrderByEmailFromDB = async (email: string) => {
  const result = await Booking.find({ email: email });
  return result;
};

export const BookingServices = {
  bookingServiceIntoDB,
  getAllBookingsFromDB,
  getOrderByEmailFromDB,
};
