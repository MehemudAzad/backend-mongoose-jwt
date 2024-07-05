import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/Routes';
// import cookieParser from 'cookie-parser';

const app: Application = express();

//parsers
app.use(express.json());
// app.use(cookieParser());
app.use(cors());

app.use('/api', router);

// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//     if(error) {
//         res.status(400).json({
//             "success": false,
//             "message": "Route not found"
//            })
//     }
// });

//route not found
// app.all('*', (req, res) => {
//   res.status(400).json({
//     success: false,
//     message: 'Route not found',
//   });
// });

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;