import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export const bodyValidation = (schema: Schema) => {
  return (request: Request, response: Response, next: NextFunction) => {
    try {
      const { error } = schema.validate(request.body, {
        abortEarly: false,
        allowUnknown: false,
      });

      if (error) {
        const errors = error.details.map((detail) => ({
          field: detail.context?.label,
          message: detail.message,
        }));

        return response.status(400).json({ message: 'Validation error', errors });
      }

      return next();
    } catch (error) {
      console.error(`Error during request body validation: ${error}`);
      return response.status(500).json({ message: 'Internal server error' });
    }
  };
};
