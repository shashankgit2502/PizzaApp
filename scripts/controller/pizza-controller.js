// controller is a middle man, 
//html will talk to --> controller will talk --> to logic/backend (vice-versa)
//by this html is independent or make html lossely coupled
// not to make html tightly coupled, it will if backend/logic directly joined to html

import { pizzaOperations } from "../services/pizza-operations.js";

//agar sirf export kiya , toh {} krke destructure krna parega
//agar sirf default export kiya , toh {} krne ki zaroorat nai hai

async function printPizzas() 
{
    const allpizzas = await pizzaOperations.getPizza();
    //want to communicate to webpage
    const div = document.getElementById('pizza-output'); //to print pizza, using DOM

    console.log("All Pizzas : " , allpizzas);

    //hame ek ek pizza obj data lena hai
    for(var pizza of allpizzas)
    {
        //humne ek ek pizza ka object banaya aur usko hame card ke through banana hai
        const card = createCard(pizza);

        //card ek div mei aaega, toh humne usse append kr diya taki voh html page pe show ho
        div.appendChild(card);
    }

}
printPizzas(); //taki function bunne ke baad chale

const printTotal = (pizzas) =>
{
    //reduce --> sum mei pizza ka price add krr de rah hai
    return pizzas.reduce((sum , pizza) =>sum + parseFloat(pizza.price) , 0); // sum ki initial value 0 hai
    
}

function printBasket()
{
    const basketDiv = document.getElementById('basket');
    basketDiv.innerHTML = '';
    //array -> filter -> voh pizza ispe flag true hai
    const pizzasInCart = pizzaOperations.pizzas.filter(pizza=>pizza.isAddedInCart===true);

    //hrr ek pizza ko print krna with help of for each
    pizzasInCart.forEach(pizza=>{
        const ptag = printItem(pizza);
        basketDiv.appendChild(ptag);

    })
    const total = printTotal(pizzasInCart);
    const totalptag = document.createElement('p');
    totalptag.innerText = `Total : ${total.toFixed(2)}`;
    basketDiv.appendChild(totalptag);
}

function printItem(pizza){
    const pTag = document.createElement('p');
    pTag.innerText = `Pizza Name: ${pizza.name} Price: ${pizza.price}`;
    return pTag;
}

//hrr pizza ek unique id mei para hai, as specified in json file
function addToCart()
{
    //console.log("Add to cart" ,  this); //this --> current object dega / store karega
    const currentButton = this; //mtlb iss samay ye button daba hai
    const pizzaId = currentButton.getAttribute('pizza-id'); //isse button click krne se, pizza ki id mil jaegi
    //for flagging a particular product
    pizzaOperations.searchPizza(pizzaId);
    console.log("Add to cart" ,  this);
    printBasket();
}


//to make card
function createCard(pizza)
{
    const coldiv = document.createElement('div')
    coldiv.className = 'col-4';

    //to make anything dynamically in html that is already not made in html file
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = '14rem';
    cardDiv.style.marginTop = '1rem';

    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = 'card-img-top';

    //parent child relationships, carddiv parent , aur img child
    cardDiv.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;

    //parent child relationships, cardbody parent , aur h5 child
    cardBody.appendChild(h5);
    //parent child relationships, carddiv parent , aur cardbody child
    cardDiv.appendChild(cardBody);

    
    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerText = pizza.desc;

    cardBody.appendChild(p);
    //parent child relationships, carddiv parent, aur p child

    const button = document.createElement('button'); //issi pe addtocart likha hai
    button.className = 'btn btn-primary';
    button.setAttribute('pizza-id' , pizza.id); 
    //setAttribute is used to set the value of the htm attribute
    //ye mera custome attribute hai, ye koi aur nai ched skta
    //generally hum id lete hai, voh css wale desiginig ke liye lete hai, uppar wala alag hai
    button.innerText = 'Add to Cart';
    button.addEventListener('click', addToCart);

    cardBody.appendChild(button);

    //parent child relationships, carddiv parent, aur button child 
    coldiv.appendChild(cardDiv);  
    return coldiv;



    //reference from below bootstrap code

    /* card code from bootstrap : 

    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    */

}