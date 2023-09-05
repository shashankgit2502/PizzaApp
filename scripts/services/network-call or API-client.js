//network call || API_Client js file --> both the names are same

/*
    Network talks
    HTTPS / HTTPS
    Async call , Promisea
    a. then b. catch

*/

//makeNetworkCall("https://raw.githubusercontent.com/brainmentorspvtltd/DIT_FullStack/main/pizza.json")
export async function makeNetworkCall(URL)
{

   //const response =  await fetch(URL);
   //ab iske niche ke line dependent hogai hai

   try {

        //await - async wait krr.

        const response = await fetch(URL);
        const data = await response.json();
        console.log("Data is : ", data);
        return data;

   } catch (error) {
        throw error;
   }


    
    //const promise = fetch(URL) // as asyn
    //fetch is async, so it will promise for something
    //URL specified in config file 
    /*fetch is a wrapper method of htpps.req ka (ES6). 
    work of wrapper : Undar saare kaam karega, jo manually krna parta hai*/

    /*agar data aagaya, to phir promise kya karega, with then,
    agr then pe kaam nai hua, toh cath --> just like if else

    data aaega, toh hum repond karenge
    */

    
    // promise.then( (response)=>{
    //     console.log(response);
    //     // data aaya header aur body mei
    //     // header + body --> abb hame response se body chahiye
    //     const promise2 = response.json(); // json ko object mei convert krr rah

    //     promise2.then( (data)=>{
    //         console.log(data);
    //         //yhn pe body se data aaega.

    //     }).catch(()=>{
    //         //yhn catch mei, ya toh invalid data
    //     })

    // }).catch( (err)=> {
    //     console.log(err); 
    //     //yhn catch mei, ya to url galat hai, network down hai 
    // })
    

}

export default makeNetworkCall;
//object yhn pe structure nai ho rah hai, jaisa hai vaise hi aa rah hai