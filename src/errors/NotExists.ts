import { CustomErrors } from "./CustomError";

export class NotExistsError extends CustomErrors {

    errorStatus: number = 404;

    constructor (what : string) {
        super(what)

        Object.setPrototypeOf(this, NotExistsError.prototype);
    }

    getErrorMessage() {
        return 'Not Exists: ' + this.message
    }
}