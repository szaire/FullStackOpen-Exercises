const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name);
console.log(object3.name.first + " " + object3.name.last);
console.log(object3['name']['first'] + " " + object3['name']['last']);

object2.content = 'parts 0 - 15'
console.log(object2['name']);
console.log(object2['content']);

