import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  console.log('inside controller');
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

export const UserController = {
  createUser,
};
