import { model, Schema } from 'mongoose';
import { TCar } from './car.interface';

const carSchema = new Schema<TCar>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isElectric: {
      type: Boolean,
      required: true,
    },
    status: {
      type: String,
      enum: ['available', 'unavailable'],
      required: true,
      default: 'unavailable',
    },
    features: {
      type: [String],
      required: true,
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// Query Middleware
carSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

carSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

carSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const Car = model('Car', carSchema);
