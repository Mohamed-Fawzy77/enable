module.exports = error => {
    if (error.name === 'CustomError') {
        return error.getErrorResponse();
    }

    return {
        status: false,
        statusCode: 500,
        errors: [{ message: error.message }]
    };
};
