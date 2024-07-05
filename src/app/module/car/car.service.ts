import { TCar } from './car.interface';
import { Car } from './car.model';

const carServiceIntoDB = async (order: TCar) => {
  const result = await Car.create(order);
  return result;
};

const getAllCarsFromDB = async () => {
  const result = await Car.find({});
  return result;
};


const getSingleCarsFromDB = async (id : string) => {
    const result = await  Car.findById(id);
    return result;
}

const updateSingleCarFromDB = async (id : string) => {

  const deletedCar = await Car.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )
  return deletedCar;
}

const deleteSingleCarFromDB = async (id : string) => {

  const deletedCar = await Car.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )
  return deletedCar;
}

export const CarServices = {
  carServiceIntoDB,
  getAllCarsFromDB,
  getSingleCarsFromDB,
  updateSingleCarFromDB,
  deleteSingleCarFromDB
};
