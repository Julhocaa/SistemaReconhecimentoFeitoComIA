class Person {
  constructor(id, name, label, active = true) {
    this.id = id;
    this.name = name;
    this.label = label;
    this.active = active;
  }
}
module.exports = Person;
