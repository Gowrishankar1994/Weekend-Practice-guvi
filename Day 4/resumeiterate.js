let myResumeData = {

    name : "gowrishankar",
    age  : 24,
    currentLocation : "Chennai",
    nativeLocation  : "Trichy",
    email : "m.gowrishankar007@gmail.com@gmail.com",
    phoneNumber : 8072029602,
    education : {
        college : "SRM Engineering College",
        location: "Trichy",
        degree  : "Bachelour of Engineering",
        department : "Electrical and Electronics",
        CGPA: 6.45
    },
    currentCompany: {
        name : "Guidehouse India",
        location:"Chennai",
        designation:"Team Lead",
        experience: "5.6 years"
    },
    skillSets : {
        programmingLanguages : ["HTML","CSS","JS","React"],
        tools : ["Git","Github","JIRA","VS Code"]
        },
    languagesKnown : ["English","Tamil"],
     hobbie: "reading books"


}
console.log(myResumeData);

//for loop
console.log()
console.log("FOR LOOP")
let keys = Object.keys(myResumeData);
for(let i=0;i<keys.length;i++){
    console.log(`${keys[i]}: ${myResumeData[keys[i]]}`);
}

// for in loop
console.log()
console.log("FOR IN LOOP");
for(let key in myResumeData){
    console.log(myResumeData[key]);
}

// for of loop
console.log()
console.log("FOR OF LOOP")
for(let key of keys){
    console.log(`${key}: ${myResumeData[key]}`);
}

// forEach loop
console.log()
console.log("FOREACH LOOP")
keys.forEach(x => console.log(`${x}: ${myResumeData[x]}`));
