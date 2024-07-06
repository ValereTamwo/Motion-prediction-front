import { createCustomError } from "../error/Customerror.js";

export function tryCatchWrapper(func) {
    console.log('lunide')
  return async (req, res, next) => {

    try {
      await func(req, res, next);
    } catch (error) {
      return next(createCustomError(error, 400));
    }
  };
}
