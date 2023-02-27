//number 1
function InstagramPost(HandleofAuthor, Content, ImageLink, NumberOfViews, NumberOfLikes){
    this.HandleofAuthor = HandleofAuthor;
    this.Content = Content ;
    this.ImageLink = ImageLink;
    this.NumberOfViews = NumberOfViews;
    this.NumberOfLikes = NumberOfLikes;
}

//number 2

let InstagramPost1 = new InstagramPost(
     "alxafrica",
     "Data Analysis, a career for bright minds with big ambitions",
     "www.image.com",
      85,
      5145
)

console.log(InstagramPost1);



let InstagramPost2 = new InstagramPost (
    "thrgrtnx",
    "Creation of church videos, created in just 45min",
    "www.thegrtnx.videos.com",
    80,
    940
)


console.log(InstagramPost2);

//number 3
 function createPerson(name, age, location){
    return{
        name: name,
        age : age,
        location : location,
    };
 }

 let Person = createPerson("Musa", 19, "Adamawa");
 console.log(Person);

 function Jambscore(eng, govt, art, lit) {
    return{
        eng: eng,
        govt: govt,
        art: art,
        lit: lit,
    }
 }

 let PersonJambscore = Jambscore(70,31,50,60)
 console.log(PersonJambscore);

 Person.Jambscore = PersonJambscore
 console.log(Person);

//number 4

 //Object.assign()

let Book ={
color: "black",
author: "Precious"

};

let Book2 = Object.assign({}, Book);
console.log(Book2);

//spread syntax ...

let Book3 = {... Book}
Book.color = "red"

console.log(Book3)

//JSON.parse{}

let Book4 = JSON.parse(JSON.stringify(Book));
console.log(Book4);


//number 5

const presidentialCandidates ={
    AAC: "Omoyele Sowore",
    ACCORD: "Christopher Imumolen",
    APC: "Bola Ahmed Tinubu",
    LP: "Peter Obi",
    NNPP: "Rabiu Kwankwaso",
    PDP: "Atiku Abubakar",
}


//for..in loop

for (const value in presidentialCandidates){
    console.log(presidentialCandidates[value] +"" + "is the presidential candidates" +"" + value);
}
