import { Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';


const createUser = catchAsync(async (req, res) => {
    console.log("inside controller");
    const { user: userData } = req.body;
    //will call service function
    const result = await UserServices.createUserIntoDB(userData);
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User registered successfully',
      data: result,
    });
});

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email) {
      const result = await UserServices.getOrderByEmailFromDB(email as string);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      const result = await UserServices.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
        "success": false,
        "message": "Order not found"
       });
  }
};


export const UserController = {
  createUser,
  getAllOrders,
};
