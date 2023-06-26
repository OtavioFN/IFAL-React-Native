/* Setting default values */

let a, b, c;

[a=5, b=7, c=3] = [1,2, undefined]

console.log(a)
console.log(b)
console.log(c) // C will return 3 because "undefined" is a False Value

/* Permutation */

let first = 1;
let second = 3;


[first, second] = [second, first] // array being created on the fly

console.log(first, second)

/* Permutation with objects */

let f, s;

({f, s} = {f:1, s:2})

console.log(f,s)

/* Other example by using variables to store values of properties */

const o = {
    p:42,
    q: true
}

const {p: foo, q: bar} = o;

console.log(foo, bar)

/* Assigning default values for the properties in a object */

const {y=10, z=5} = {y: 3};

console.log(y,z) 

/* Practical Example */

const metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: "de",
            localization_tags: [ ],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "Javascript-Umgebung"
        }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

const { title: englishTitle, url: cleitonRasta, translations: [{title: localeTitle }] } = metadata

console.log(englishTitle);
console.log(localeTitle);
console.log(cleitonRasta);

/* Other example */

function userId({id}){
    return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
    console.log(`${displayName} is ${name}`)
}

var user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

console.log(`userId: ${userId(user)}`);

whois(user);

/*  */

let key = 'z';
let { [key]: fo } = {z: 'bar'}; // these square brackets are obligatories for the desctruturing standart

console.log(fo)