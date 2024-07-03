export class validationError extends Error {
    constructor(errors) {
      super("Validation Error");
      this.statusCode = 400;
      this.estado = false;
      this.errors = errors;
    }
    toJson(){
      return {
        status: this.statusCode,
        estado: this.estado,
        errors: this.errors
      }
    }
  }
  