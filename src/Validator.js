import NumberSchema from "./NumberSchema.js";
import ArraySchema from "./ArraySchema.js";
import ObjectSchema from "./ObjectSchema.js";

export default class Validator {
    array() {
        return new ArraySchema([(value) => Array.isArray(value)]);
    }
    number() {
        return new NumberSchema([(value) => typeof value === 'number']);
    }
    object() {
        return new ObjectSchema();
    }
}