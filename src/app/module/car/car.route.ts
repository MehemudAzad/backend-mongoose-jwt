import express from 'express';
import { CarController } from './car.controller';
import { carValidations } from './car.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

//insert an order
router.post(
  '/',
  validateRequest(carValidations.createCarValidationSchema),
  CarController.createCar,
);

//retrieve all orders
router.get('/', CarController.getAllCars);

//get single car from id
router.get('/:id', CarController.getSingleCar);

//updare car using id
router.patch('/:id', CarController.updateSingleCar);

//delete car using id
router.delete('/:id', CarController.deleteSingleCar);

export const CarRoutes = router;
