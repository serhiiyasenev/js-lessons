class LoginError extends Error {
    constructor(fieldName) {
        super();

    this.name = 'LoginFormError';
    this.message = `Form field validation failed ${fieldName}`;
    }
}

throw new LoginError('password');