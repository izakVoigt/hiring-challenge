import { Request, Response } from 'express';

export function notFoundHandler(request: Request, response: Response): Response {
  const method = request.method;
  const path = request.path;

  return response.status(404).json({
    message: `${method} ${path} - Route not found`,
  });
}
