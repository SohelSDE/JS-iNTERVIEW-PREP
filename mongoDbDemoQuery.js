db.dropDatabase()// Delete data base-collectionscompletely
testDb> db.dummy2.drop()// deletes one specified database 

show dbs // shows all dbs
use Invenventory // using Inventory collecion now
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
 db.inventory.insertOne({item:"Cobalt",qty:100,tags:["Valuale","Metal"],size:{weight:"200kg"},})
db.Data.insertMany([{name:'Koyel',bio:'Python Developer,Mern Stack Engineer'},{name:'Roja',bio:'DB-admin'},{name:'Ishan',bio:'Data Analyst'}])

db.inventory.insertMany([{item:'Palladium',qty:10,tags:['Metal','Valuable'],size:{weight:'88kg'}},{item:'Vanadium',qty:20,tags:['Metal','Valuable'],size:{weight:'88kg'}},{item:'Zink',qty:200,tags:['Metal','Valuable'],size:{weight:'88kg'}}])

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

//Indexing 
Indexes are stored in a B-tree(balanced tree) data structure 
It Stores 
1. Index keys 
2. Pointers toe the documents in the collection

disadvantages:-
storage space
write performance

There are several types of indexes available in MongoDB

1.Single field indexes
2.Compound indexes
3.Text indexes


//performance checking .explain()- will tel the meta data behind any exaxution
 db.inventory.find({item:"gold"}).explain()
 db.inventory.find({item:"gold"}).explain("executionStats")
//1.Single field indexes

//Create Index
db.inventory.createIndex({'Index':1})
db.inventory.createIndex({'qty':1},{unique:true})

1->accending order
-1-> deccending order
//Drop Index
db.inventory.dropIndex({'Index':1})

//When Not to use Indexing?
1.When Collection is Small
2.When the collection is frequently updated
3.when the queries are complex (multiple fields)
4.when the collection is large (make less indices)



//2.Compound indexes

db.inventory.createIndex({'Price':1,'qty':-1})
//Price_1_qty_-1

its shorted by Price first and qty next
if short by //Price_1_qty_-1
then i will be INXSCAN- index scan
if it is sort by //Price_1 only 
still it will be Index scan
 but if it is sorted by qty_-1
then it will be collection scan


3.Text indexes

Single Text Index per Collection
Tokenization and Stemming
Relevance Score

//create text index
db.Data.createIndex({bio:"text",name:"text"})

 db.Data.createIndex({bio:"text",name:"text"},{weight:{name:1000,bio:1}})// giving priority to name
 db.Data.createIndex({bio:"text",name:"text"},{background:true})// will lock the query depends upon only Indexing

//find

db.Data.find({$text:{$search:"Developer"}})

db.Data.find({$text:{$search:"Developer"}},{score:{$meta:"textScore"}})
//- excludede python
db.Data.find({$text:{$search:"Developer -python"}},{score:{$meta:"textScore"}})
//sorting with relevent
db.Data.find({$text:{$search:"Developer Sohel"}},{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}})

// Agrigation
 db.collection .aggregate(pipeline,options)
//match operator 

db.inventory.aggregate([{$match:{qty:100}}])
//$group:-
$group:{_id:expression,
field1: expression,
field:expression,...}

The $group operator groups documents by the qty field,
creating a new document for each unique age value
The _id field in the group stage specifies the field based in which the documents will be grouped.

db.inventory.aggregate([{$group:{_id:"$qty"}}])

 // the names for those ids 
db.inventory.aggregate([{$group:{_id:"$qty",name:{$push:"$item"}}}])

//$$ROOT :- is reference to the current docs being processed in the pipeline , which represents the complete document

db.inventory.aggregate([{$group:{_id:"$qty",name:{$push:"$$ROOT"}}}])

//Give a count per qty of metals

db.inventory.aggregate([{$match:{qty:100}},{$group:{_id:"$qty",number:{$sum:1}}}])

db.inventory.aggregate([{$match:{tags:"Metal"}},{$group:{_id:"$qty",number:{$sum:1}}}])

 db.inventory.aggregate([{$match:{tags:"Metal"}},{$group:{_id:"$qty",number:{$sum:1},name:{$push:"$$ROOT"}}}]) 

//Give a count per qty of metal and sirt them by count in desc manner
db.inventory.aggregate([{$match:{tags:"Metal"}},{$group:{_id:"$qty",number:{$sum:1},name:{$push:"$$ROOT"}}},{$sort:{number:-1}}])

//find max

db.inventory.aggregate([{$match:{tags:"Metal"}},{$group:{_id:"$qty",number:{$sum:1},name:{$push:"$$ROOT"}}},{$sort:{number:-1}},{$group:{_id:null,maxNumber:{$max:"$number"}}}])


//$unwind

db.inventory.aggregate([{$unwind:"$tags"}])

find average Price of metals

//$avg
db.inventory.aggregate([{$group:{_id:null,avaragePrice:{$avg:"$Price"}}}])

find the total number of tags for all metals

db.inventory.aggregate([{$unwind:"$tags"},{$group:{_id:null, count:{$sum:1}}}])

//another way:-
db.inventory.aggregate([{$group:{_id:null,count:{$sum:{$size:"$tags"}}}}])
//safest way
 db.inventory.aggregate([{$group:{_id:null,count:{$sum:{$size:{$ifNull:["$tags",[]]}}}}}])

//List All tags 

db.inventory.aggregate([{$unwind:"$tags"},{$group:{_id:null,allTags:{$push:"$tags"}}}])

//list distinct values only 
db.inventory.aggregate([{$unwind:"$tags"},{$group:{_id:null,allTags:{$addToSet:"$tags"}}}])

// Filter
db.inventory.aggregate([
  {
    $group: {
      _id: null,
      avgPrice: {
        $avg: {
          $cond: {
            if: { $gt: ["$Price", 2000] },
            then: "$Price",
            else: null
          }
        }
      }
    }
  }
])








