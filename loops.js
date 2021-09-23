// Randomized data
/*
[{"id":1,"name":"Gill Randlesome","birthdate":"10/26/1975","children":2,"country":"Russia","can_program":true},
{"id":2,"name":"Odelle Valdes","birthdate":"3/23/1956","children":4,"country":"France","can_program":false},
{"id":3,"name":"Kippy Booi","birthdate":"8/7/1980","children":0,"country":"Brazil","can_program":true},
{"id":4,"name":"Willi Ferreira","birthdate":"8/30/1998","children":1,"country":"China","can_program":true},
{"id":5,"name":"Earle Akrigg","birthdate":"12/8/2000","children":1,"country":"China","can_program":true},
{"id":6,"name":"Nil Rankmore","birthdate":"9/29/1968","children":3,"country":"Czech Republic","can_program":false},
{"id":7,"name":"Cross Jeckell","birthdate":"4/18/1997","children":2,"country":"Syria","can_program":false},
{"id":8,"name":"Georgeanne Childes","birthdate":"1/22/1976","children":4,"country":"Indonesia","can_program":true},
{"id":9,"name":"Eada Lago","birthdate":"12/25/1987","children":1,"country":"Indonesia","can_program":false},
{"id":10,"name":"Hailee Seneschal","birthdate":"11/17/1985","children":4,"country":"Maldives","can_program":false}]
*/

// Array of people

const arrayOfPeople = [
    {
        name:"Gill Randlesome",
        birthdate:"10/26/1975",
        children:2,
        country:"Russia",
        canProgram:true,
    },
    {
        name:"Gill Odelle Valdes",
        birthdate:"3/23/1956",
        children:4,
        country:"France",
        canProgram:false,
    },
    {
        name:"Kippy Booi",
        birthdate:"8/7/1980",
        children:0,
        country:"Brazil",
        canProgram:true,
    },
    {
        name:"Willi Ferreira",
        birthdate:"8/30/1998",
        children:1,
        country:"China",
        canProgram:true,
    },
    {
        name:"Earle Akrigg",
        birthdate:"12/8/2000",
        children:1,
        country:"China",
        canProgram:true,
    },
    {
        name:"Nil Rankmore",
        birthdate:"9/29/1968",
        children:3,
        country:"Czech Republic",
        canProgram:false,
    },
    {
        name:"Cross Jeckell",
        birthdate:"4/18/1997",
        children:2,
        country:"Syria",
        canProgram:false,
    },
    {
        name:"Georgeanne Childes",
        birthdate:"1/22/1976",
        children:4,
        country:"Indonesia",
        canProgram:true,
    },
    {
        name:"Eada Lago",
        birthdate:"12/25/1987",
        children:1,
        country:"Indonesia",
        canProgram:false,
    },
    {
        name:"Hailee Seneschal",
        birthdate:"11/17/1985",
        children:4,
        country:"Maldives",
        canProgram:false,
    },
]

// ---- Outputs how many children all people have, in total ----

// This is the most powerful loop in js
for (let i = 0; i<arrayOfPeople.length; i++ ){
    console.log(arrayOfPeople[i].children);
}



let sum = 0;
for (let i = 0; i<arrayOfPeople.length; i++){
    sum += arrayOfPeople[i].children
}

console.log("There are " + sum + " children in the list." );

// ---- Outputs one string per person formatted as such: Name: Age ----

for (let i = 0; i<arrayOfPeople.length; i++){
    console.log(arrayOfPeople[i].name,arrayOfPeople[i].birthdate,arrayOfPeople[i].children,arrayOfPeople[i].country,arrayOfPeople[i].canProgram);
}


// ---- Output all properties of all people using for…in ----


for (let x in arrayOfPeople) {
    console.log(arrayOfPeople[x]);
  }
