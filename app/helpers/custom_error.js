class CustomError extends Error {
    constructor(errorObject, statusCode) {
        super('Custom error created');
        this.name = 'CustomError';
        this.errorObject = errorObject;
        this.status = false;
        this.statusCode = statusCode;
    }

    getErrorResponse() {
        return {
            status: this.status,
            statusCode: this.statusCode,
            errors: [this.errorObject]
        };
    }
}

module.exports = CustomError;
