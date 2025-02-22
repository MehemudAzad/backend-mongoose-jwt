import { z } from 'zod';

const createCarValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    isElectric: z.boolean(),
    status: z.enum(['available', 'unavailable']).default('unavailable'),
    features: z.array(z.string()),
    pricePerHour: z.number().positive(),
  }),
});

const updateCarValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    color: z.string().optional(),
    isElectric: z.boolean().optional(),
    status: z
      .enum(['available', 'unavailable'])
      .default('unavailable')
      .optional(),
    features: z.array(z.string()).optional(),
    pricePerHour: z.number().positive().optional(),
  }),
});

export const CarValidations = {
  createCarValidationSchema,
  updateCarValidationSchema,
};
