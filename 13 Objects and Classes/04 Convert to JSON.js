function demo(first, second, color) {
  let person = {};

  person.name = first;
  person.second = second;
  person.hair = color;

  let send = JSON.stringify(person);
  return send;
}
console.log(demo("George", "Jones", "Brown"));
