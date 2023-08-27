import makeNetworkCall from "./network-call or API-client.js";
import {URL} from '../utils/config.js';
import {Pizza} from '../models/pizza-model.js'; //ye humne class ko call kiya hai from model

//yhn destructure ho rah hai

async function getPizza()
{
    //step 1 : API client ko bulao, jo hame obj laake dega pizza wala 

    const data = await makeNetworkCall(URL); //api client ko bula rai hai, jason data laa rah hai
    
    const pizzaJson = data['Vegetarian']; //vegeterian  data ki demand ki, ye hai bad data

    //pizza ka json form mei data leke aa rah hai

    const pizzas = []; //array to store the object which we will create

    //bad data ko map krke good data bnna ke good data banaega
    //map krke ek ek krke unstructred data ko structure krr rah hai, obj mei pass krke.
    pizzaJson.map(singlePizza =>{

        const pizzaObject = new Pizza(singlePizza.id , singlePizza.name , singlePizza.price
            , singlePizza.assets.product_details_page[0].url,singlePizza.menu_description);
                                                    //ye array hai isisliye [0] aur . isisliye kyuki baki nested hai

        pizzas.push(pizzaObject); //humne apne nai banaye obj ko array mei push kr diya

        return pizzaObject;
        //return krrk rahe kyuki hame isse controller ko dena hai. phir ye html ke through print ho jaega.

    })

    return pizzas;

    //step 2 : data map to model
    //step 3 : return model 
    
}

export default getPizza;



