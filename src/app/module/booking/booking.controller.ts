import { Request, Response } from 'express';
import { BookingServices } from './booking.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';


const createBooking = catchAsync(async (req, res) => {
    //will call service function
    const result = await BookingServices.bookingServiceIntoDB(req.body);
    //send response
    sendResponse(res,{
      statusCode : httpStatus.OK,
      success : true,
      message : "Bookings retrieved successfully",
      data : result
    })
});

const getAllBookings = catchAsync(async (req, res) => {
      const result = await BookingServices.getAllBookingsFromDB();

      sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Bookings retrieved successfully",
        data : result
      })
});


export const BookingController = {
  createBooking,
  getAllBookings,
};
