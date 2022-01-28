//install requires
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = require("./util/generateHtml");

const teamArr = [];

const memberQuestions = [
    {
        type: "input",
        message: "What is the member's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the member's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the member's email?",
        name: "email",
    },
    {
        type: "list",
        message: "What is the member's role?",
        choices: ["Manager", "Engineer", "Intern"],
         name: "role",
    },  
]
const managerQuestion = [
    {   
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
    }
]
const engineerQuestion = [
    {   
        type: "input",
        message: "What is their Github Username",
        name: "github",
    }
]
const internQuestion = [
    {   
        type: "input",
        message: "What school did they attend?",
        name: "officeNumber",
    }
];
inquirer
.prompt([
    {
        type: "list",
        message: "What would you like to do?",
        choices: ["Add another member.", "Generate"],
        name: "initial",
    },
])
.then((ans)=>{
    if (ans.initial ==="Add another member.") {
        inquirer.prompt(memberQuestions).then((ans)=> {
            const newMember = new Member (
                ans.name,
                ans.id,
                ans.email,
                ans.role,
            );
            // how to add the individual question answers????
        })
    }else {
      const teamArr = [];
      fs.writeFile("./dist/index.html", team(teamArr), (err) =>
        err ? console.log(err) : console.log("generating HTML")
      );
    }
})



// couldn't figure it out so i started over with the above
// // write prompts for team members and their info
// // ask for name id email and role
// promptEmployee = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             message: "What is the member's name?",
//             name: "name"
//         },
//         {
//             type: "input",
//             message: "What is the member's id?",
//             name: "id"
//         },
//         {
//             type: "input",
//             message: "What is the member's email?",
//             name: "email",
//         },
//         {
//             type: "list",
//             message: "What is the member's role?",
//             choices: ["Manager", "Engineer", "Intern"],
//             name: "role",
//         },  
//     ])// based on role if the respond  ex: if they respond with engineer role then I need their github etc 3 of these
//     .then(({name, id, email, role}) => {
//         let roleResponse = "";
//         if (role === "Manager"){
//             roleResponse = "Office Number"
//         }else if (role ==="Engineer"){
//             roleResponse = "Github username"
//         }else if (role === "Intern") {
//             roleResponse= "school name";
//         } else {
//         }
//     })
// } 
// // create for the user role and corresponding info
// // final step is writing the html file
// const init = () => {
//     promptEmployee()
//       .then((result) =>fs.writeFileSync("user.html", generateHTML(result)))
//       .then(() => console.log("Successfully generated your teams HTML!"))
//       .catch((err) => console.log(err));
//   };
//   init();
