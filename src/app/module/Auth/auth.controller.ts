import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
// import config from "../../config";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);
    const { accessToken } = result;
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is logged in succesfully!',
      data: {
        accessToken
      },
    });
  });


  export const AuthControllers = {
    loginUser,
  };
  