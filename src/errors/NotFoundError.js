import CustomError from "./CustomError.js";

export default class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.codeStatus = 401;
  }

  serializeError() {
    return [
      {
        statusCode: this.codeStatus,
        message: this.message,
      },
    ];
  }
}
