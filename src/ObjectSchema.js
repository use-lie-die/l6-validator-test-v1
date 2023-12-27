export default class ObjectSchema {
  constructor(shapes) {
    this.validator = shapes;
  }

  shape(shapes) {
    return new ObjectSchema(shapes);
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.validator).length) {
      return false;
    }
    return keys.every((key) => this.validator[key].isValid(value[key]));
  }
}
