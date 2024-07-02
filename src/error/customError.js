export class FindError extends Error {
  constructor(message, statusCode = 400, estado) {
    super(message);
    this.statusCode = statusCode;
    this.estado = estado;
  }
  toJson(){
    return {
      status: this.statusCode,
      estado: this.estado,
      message: this.message
    }
  }
}
