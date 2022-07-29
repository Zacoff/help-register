export class CustomErrors extends Error {

    errorStatus : number;

    constructor (what : string) {
        super(what)

        Object.setPrototypeOf(this, CustomErrors.prototype);
    }

    getErrorMessage() {
        return 'Something went wrong: ' + this.message;
    }
}