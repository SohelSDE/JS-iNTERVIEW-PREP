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
 db.inventory.insertOne({
item:"Cobalt",
qty:100,
tags:["Valuable","Metal"],
size:{
weight:"200kg"
},

})
db.inventory.insertMany([{
item:"Silver",
qty:100,
tags:["Premium","Metal"],
size:{
weight:"100kg"
},
},
{
item:"Iron",
qty:100,
tags:["Metal"],
size:{
weight:"100kg"
},},
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
    
    }]


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
)
//update Many
db.inventory.updateMany({item:"Zink"},{$set:{"tags":"cotton"}})
)
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
//$eq-Matches values that are equal to a specified value.
//similar to db.collectionName("obj name":"obj value") 
db.inventory.find({qty:{$eq:98}})
//embedded query
db.inventory.find( { "size.hight": { $eq: "2000kg" } } )
//from array
db.inventory.find( { tags: { $eq: "Premium" } } )
//and
db.inventory.find( { tags: { $eq: [ "Metal", "Valueable" ] } } )
//regex matching
db.inventory.find({item:{$regex:/Co/}})
db.inventory.find({item:{$eq:/Co/}})

//Greater then-$gt  -find

db.inventory.find({qty:{$gt:100}})

//update

db.inventory.updateOne({qty:{$gt:100}},{$set:{"weight":"1000kg"}})

//delete
db.inventory.deleteMany({qty:{$gt:100}})

//$gte = gretter than equal to
db.inventory.find({qty:{$gte:100}})

//update

db.inventory.updateOne({qty:{$gte:100}},{$set:{"weight":"1000kg"}})

//delete
db.inventory.deleteMany({qty:{$gte:100}})

//$lt= lesser then , $lte= lesser than equal to
db.inventory.find({qty:{$lt:1000}})
db.inventory.updateMany({qty:{$lt:1000}},{$set:{"data":"To be deleted"}})
db.inventory.deleteMany({qty:{$lte:100}})

db.inventory.find({qty:{$lte:100}})
db.inventory.updateMany({qty:{$lte:100}},{$set:{"data":"To be deleted"}})
db.inventory.deleteMany({qty:{$lte:100}})






