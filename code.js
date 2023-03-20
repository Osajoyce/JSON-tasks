const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const skil = JSON.stringify(skills, undefined, 4)
console.log(skil)

let age = 250;
const agge = JSON.stringify(age, undefined, 0)
console.log(agge)

let isMarried = true
const mStatus = JSON.stringify(isMarried, undefined, 4)
console.log(mStatus)

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const pupil = JSON.stringify(student, undefined, 4)
console.log(pupil)

//level 2
const pulpil = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(pulpil)

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const text = JSON.parse(txt, undefined, 10)
console.log(text)

//Find the user who has many skills from the variable stored in txt.
    let maxx = 0
    let userWithMaxSkills;
    for(const eachh in text){
        if(text.hasOwnProperty(eachh)){
            const skilllengt = text[eachh].skills.length;
            if (skilllengt> maxx){ maxx = skilllengt}
            userWithMaxSkills = eachh
        }
    }
console.log(`The user with the most skills is ${userWithMaxSkills} with ${maxx} skills.`);
