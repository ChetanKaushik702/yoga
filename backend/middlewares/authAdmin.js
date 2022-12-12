const ErrorHandler = require("../utils/errorHandler");

const isAuthorizedRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.person.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.person.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};

module.exports = isAuthorizedRole;
