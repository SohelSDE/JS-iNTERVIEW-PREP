// show dbs // shows all dbs
// use Invenventory // using Inventory collecion now
//CRUD opertion:-
//crete:-
db.inventory.insertOne({
item:"Gold",
qty:100,
tags:["Premium","Metal"],
size:{
weight:"100kg"
},

})
db.inventory.insertMany([
{
item:"Silver",
qty:100,
tags:["Premium","Metal"],
size:{
weight:"100kg"

}
},

{
item:"Iron",
qty:100,
tags:["Metal"],
size:{
weight:"100kg"

},

},
{
item:"Zink",
qty:100,
tags:["Metal"],
size:{
weight:"100kg"

},

},
{
item:"Copper",
qty:100,
tags:["Metal","Valueable"],
size:{
weight:"100kg"

},

}
])

//Read :-
//fetches all the data
db.inventory.find()
//or-
db.inventory.find({})
//
db.inventory.find({item:"Zink"})


//fetch by property
db.inventory.find({item:"canvas"})
// fetch by or property , etither option 1 and option 2 
db.inventory.find({tags:{$in:["cotton","psm"]}})

//and 
db.inventory.find({tags:"cotton",size:{"hight":"10px"}})
//or
db.inventory.find({$or:[{tags:"cotton"},{size:100}]})
//if you need any one result only
db.inventory.findOne({$or:[{tags:"cotton"},{size:100}]})

//Update:-
//Update one
db.inventory.updateOne({item:"Zink"},{$set:{"tags":"cotton"}})
//update Many
db.inventory.updateMany({item:"Zink"},{$set:{"tags":"cotton"}})
db.inventory.updateMany({qty:100},{$set:{"tags":"monalisa"}})

//Delete :-
//Delete all data

db.inventory.deleteMany({})

//Delete one data
db.inventory.deleteOne({item:"zink"})

//Delete all data matches 
db.inventory.deleteMany({item:"zink"})


// for paginantion we can use Limit

db.inventory.find().limit(2) 

//for skipping the value from the beginning , and printing all other value except the first one
 db.inventory.find().skip(1)
 db.inventory.find().skip(2)//skip first 2

//sorting : two types increasing:1, decreasing:-1
db.inventory.find().sort({qty:1})//Accending Order
db.inventory.find().sort({qty:-1})//Decendng Order

//Achiving pagination using MongoDB find and limit
db.Inventory.find().skip((pageNo-1)*no).limit(no)




