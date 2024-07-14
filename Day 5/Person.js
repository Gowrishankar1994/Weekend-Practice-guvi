class Person{
    constructor(fullName,age,currentLocation,nativeLocation,email,phoneNumber,education,currentCompany,skillSets,languagesKnown){
        this.fullName=fullName;
        this.age=age;
        this.currentLocation=currentLocation;
        this.nativeLocation=nativeLocation;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.education=education;
        this.currentCompany=currentCompany;
        this.skillSets=skillSets;
        this.languagesKnown=languagesKnown;

    }
}

const suresh = new Person(
    "Gowrishankar Mahamuni",
    28,
    "Chennai",
    "Trichy",
    "m.gowrishankar007@gmail.com",
    8072029602
    {name:"SRM Engineering College",place:"Trichy" },
    {name:"Guiddehouse Inndia",place:"chennai",YOE:"5.6years"},
    ["HTML","CSS","JS"],
    ["English","Tamil"]
);
console.log(suresh);