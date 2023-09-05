Basic Project folder Management -

1. Models :

jason data jo aa rah hai, it must be converted according to us
so that we can easily use it so, to make that data accordin to us, that is in json format.
we must make  MODEL. (another layer)
Model use nai kiya, toh agar backend change hua toh frond end phat jaega.

2. Controllers : 

controller is a middle man, 
html will talk to --> controller will talk --> to logic/backend (vice-versa)
by this html is independent or make html lossely coupled
not to make html tightly coupled, it will if backend/logic directly joined to html

2. Utils :
it is going to store all utility files, like config for the project.

3. Services :
network call || API_Client js file --> both the names are same
to fetch and call the API's



Problem to solve in Any fullstack js projects :
problem in curr project : 

1. network call
2. JSON
3. Convert object into JSON(serialisation) && JSON into object(deserialisation)
4. Data(object) -> HTML
5. DOM (Dynamic Html)
6. Async vs Sync
7. Js internal Arch


Fetch :
fetch is a wrapper method of htpps.req ka
ES6
work of wrapper : undar saare kaam karega, jo manually krna parta hai

get req - data mangana
post req- data aana aur bhejna

json. parse = json to object
json.stringyfy = object to json

await = asyn wait. wait krna chahta hun, jbb tkk result nai mil jata.
        await only works, if the function is Async.
        not waiting for entire system.

        await with async - asyn ko sync krr deta hai.


response.json() -  json ko object mei convert krr rah 

async - try catch
sync - then catch

append krdo, mtlb parent mei daal child ko

** Adding to cart Functionality : 
1. Add to cart button click event attach, bind function - controller (DOM)
2. how function will identify which pizza add to cart is clicked ?
3. we attach an id with every pizza (and that id must be unique)
4. we get the pizza id, all id are coming and backend
5. every pizza has unique id , coming back end
6. saara data array mei hai, to Id find ke liye hum array mei usse search krr denge by find() function
        to uss id ke corresponding voh object mil jaega, jo add to cart mei jaa rah hai
7. phir hum ek flag denge ki, add to cart hai, mtlb vhn flag kr denge uss particular obj mei jo 
        add to cart mei hai


Add to cart layout :
1. div -> pic -> name -> price
2. phir breakup price(gst nd all) -> total
3. pay now button

Loader & Linker

data ko agar in memory rakhna hai, toh object bnna do

this --> mere pass jo hai abhi;
this is a alias name for the current object

controller = input output -> talk to html 
service = logic
config = url


we will do now pay now button
-->use Payment gateway
-> use razorpay
abhi sbb fake hoga, razaorpay key-->jbb original aaega, voh fake se replace hojaega

newAPI website