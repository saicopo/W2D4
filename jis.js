const Gianni={
    name:"gianni",
    lastName: "rossi",
    isAmbassador : "false",
}


const Mirko={
    name:"gianni",
    lastName: "rossi",
    isAmbassador : "false",
}
const Cosimo={
    name:"gianni",
    lastName: "rossi",
    isAmbassador : "false",
}

const prices= [34,5,2];
const spedizione= 30;



let carrello=0 ;
let compratore = any;

for(let i = 0; i < prices.length;i ++){
    carrello += prices[i]
}

console.log(carrello);



 if(compratore.isAmbassador){
    carrello *=0.7
 }
if(carrello < 100){
    carrello +=spedizione
}

console.log(prices[1]);
 
