export default class ArraySchema { 
    constructor(validators) {
        this.validators = [...validators];
    }
    isValid(value) {
        return this.validators.every((validator) => validator(value) === true);
    }
    allIntegers() {
        const validator = (value) => value.every((el) => Number.isInteger(el));
        return new ArraySchema([...this.validators, validator]);
    }
    custom(customValidator) {
        const validator = (arr) => arr.every((el) => customValidator(el));
        return new ArraySchema([...this.validators, validator]);
    }
}