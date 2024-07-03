
export const errorMiddleware = function (err, req, res, next) {
  let errorObject;
 
  if (typeof err.toJson === "function") {
    errorObject = err.toJson();
  } else {
    errorObject = {
      status: 500,
      estado: false,
      message: err.message,
    };
  }

  res.status(errorObject.status).json(errorObject);
};
