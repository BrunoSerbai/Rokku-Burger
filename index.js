//TODO: Implement a event listener for the parent box, instead of each button
//TODO: Use a pop up window or drop down menu to display all bevarages options, observations and extras
//TODO: Take item names and prices from a different file to keep the code organized and make it easier for the client to make modifications
//TODO: make name and observations jump to next line once they hit a 42 character limit

//Double Burgers
let dpCheese = 0;
let dpCheddar = 0;
let dpVeg = 0;
let dpChicken = 0;
let dpSalad = 0;
let dpBacon = 0;
let dpChickenBacon = 0;
let dpSaladBacon = 0;
let dpPork = 0;

//Single Burgers
let cheese = 0;
let cheddar = 0;
let veg = 0;
let chicken = 0;
let salad = 0;
let bacon = 0;
let chickenBacon = 0;
let saladBacon = 0;
let pork = 0;
let melt = 0;
let crinkle = 0;
let rustica = 0;

//Bevarages
let lata350 = 0;
let garrafa550 = 0;
let garrafa600 = 0;
let cerveja = 0;

//Extras
let adBacon = 0;
let adQueijo = 0;
let adCarne = 0;

//Total price and chosen items 
let total = 0;
let pedido = [];

let nome; //Name of the Client
let obs; //Observations

//Print configurations
let fontSize = 12; 

function Impressao(){ //Sends the items to the printer
    
	finalizar();
	
    var printWindow = window.open();
    printWindow.document.open('text/plain')
    printWindow.document.write(`
        <html>
            <head>
                <style>

                    body{
                        text-align: center;
                        font-family: monospace;
                        font-size: ${fontSize}px;
                    }

                </style>
            </head>
            <body>
                <img src="path625.svg" width="200vh">
                <p>${pedido}</p>
            </body>
            </html>`);
    printWindow.focus();
    printWindow.print();
    printWindow.close();
	
	limpar();
	
}


function finalizar(){ //Prints the Items and total cost

    pedido = [];
	
	//Name and observation
	nome = document.getElementById("nome").value;
	obs = document.getElementById("observaçao").value;
	
	pedido.push(nome.toUpperCase() + "<br>");
    pedido.push("=====================================<br>" +  obs.toUpperCase() + "<br>" + "&nbsp".repeat(38) + "<br>" );
	
	//Double Burgers
    dpCheese > 0 ? pedido.push(`  ${dpCheese}- DUPLO CheeseBurger ----- R$25,50  <br>`) : false;
    dpCheddar > 0 ? pedido.push(`  ${dpCheddar}- DUPLO Cheddar ---------- R$27,50  <br>`) : false;
    dpVeg > 0 ? pedido.push(`  ${dpVeg}- DUPLO Vegetariano ------ R$27,50  <br>`) : false;
    dpChicken > 0 ? pedido.push(`  ${dpChicken}- DUPLO Chicken ---------- R$27,50  <br>`) : false;
    dpSalad > 0 ? pedido.push(`  ${dpSalad}- DUPLO Salad ------------ R$27,50  <br>`) : false;
    dpBacon > 0 ? pedido.push(`  ${dpBacon}- DUPLO Bacon ------------ R$29,50  <br>`) : false;
    dpChickenBacon > 0 ? pedido.push(`  ${dpChickenBacon}- DUPLO Chicken Bacon ---- R$30,50  <br>`) : false;
    dpSaladBacon > 0 ? pedido.push(`  ${dpSaladBacon}- DUPLO Salad Bacon ------ R$31,50  <br>`) : false;
    dpPork > 0 ? pedido.push(`  ${dpPork}- DUPLO Pork ------------- R$31,50  <br>`) : false;

	//Single Burgers
    cheese > 0 ? pedido.push(`  ${cheese}- Rokku CheeseBurger ----- R$18,50  <br>`) : false;
    cheddar > 0 ? pedido.push(`  ${cheddar}- Rokku Cheddar ---------- R$20,50  <br>`) : false;
	veg > 0 ? pedido.push(`  ${veg}- Rokku Vegggie ---------- R$20,50  <br>`) : false;
    chicken > 0 ? pedido.push(`  ${chicken}- Rokku Chicken ---------- R$20,50  <br>`) : false;
    salad > 0 ? pedido.push(`  ${salad}- Rokku Salad ------------ R$20,50  <br>`) : false;
    bacon > 0 ? pedido.push(`  ${bacon}- Rokku Bacon ------------ R$22,50  <br>`) : false;
    chickenBacon > 0 ? pedido.push(`  ${chickenBacon}- Rokku Chicken Bacon ---- R$23,50  <br>`) : false;
    saladBacon > 0 ? pedido.push(`  ${saladBacon}- Rokku Salad Bacon ------ R$24,50  <br>`) : false;
    pork > 0 ? pedido.push(`  ${pork}- Rokku Pork ------------- R$24,50  <br>`) : false;
    melt > 0 ? pedido.push(`  ${melt}- Rokku Melt ------------- R$30,50  <br>`) : false;
	
	//Fries
    crinkle > 0 ? pedido.push(`  ${crinkle}- Batata Crinkle ---------- R$7,50  <br>`) : false;
    rustica > 0 ? pedido.push(`  ${rustica}- Batata Rustica ---------- R$7,50  <br>`) : false;
	
	//Beverages
    lata350 > 0 ? pedido.push(`  ${lata350}- Refrigerante Lata ------- R$6,00  <br>`) : false;
    garrafa550 > 0 ? pedido.push(`  ${garrafa550}- Refrigerante 550ml ------ R$7,00  <br>`) : false;
    garrafa600 > 0 ? pedido.push(`  ${garrafa600}- Refrigerante 600ml ------ R$8,50  <br>`) : false;
    cerveja > 0 ? pedido.push(`  ${cerveja}- Cerveja Longneck -------- R$9,00  <br>`) : false;

	//Total
    totalFinal = total.toFixed(2);
    pedido.push("&nbsp".repeat(38) + "<br>","=====================================<br>", `  Total -------------------- R$${totalFinal}  <br>`,"=====================================<br>");
	pedido.push("<br>" + document.querySelector('input[name="local"]:checked').value + "<br>"); // Turns the observation uppercase, adds the value of the radio button 
    pedido = pedido.join(""); // Removes the commas from the final array.
    document.getElementById("total").innerHTML = pedido; 
	
}


function limpar(){ //Clears the page
	
	document.getElementById("nome").value = " ";
	document.getElementById("observaçao").value = " ";
  
    document.getElementById("salao").checked = true; //Reset radio buttons
    location.reload(); //Reloads page after printing 

}

function addItem(item, price) {
    test = String(item);
    item += 1;
    total += price;
    
}
function subItem(item, price) {
    item -= 1;
    total -= price;

}


//CheeseBurger
//------------------------------------------------------------------------

document.getElementById("duploCheeseAdd").onclick = function () {

    addItem(dpCheese, 25.50);
    document.getElementById("quantDuploCheese").innerHTML = dpCheese += 1;
    displayOrder();


};

document.getElementById("duploCheeseSub").onclick = function () {

    if (dpCheese > 0) {
        document.getElementById("quantDuploCheese").innerHTML = dpCheese -= 1;
        total -= 25.50;
    }

};

document.getElementById("cheeseAdd").onclick = function () {

    addItem(cheese, 18.50);
    document.getElementById("quantCheese").innerHTML = cheese += 1;

};

document.getElementById("cheeseSub").onclick = function () {
    if (cheese > 0) {
        subItem(cheese, 18.50);
        document.getElementById("quantCheese").innerHTML = cheese -= 1;
    };

};


//Cheddar
//------------------------------------------------------------------------

document.getElementById("duploCheddarAdd").onclick = function () {
    addItem(dpCheddar, 27.50);
    document.getElementById("quantDuploCheddar").innerHTML = dpCheddar += 1;
};

document.getElementById("duploCheddarSub").onclick = function () {

    if (dpCheddar > 0) {
        document.getElementById("quantDuploCheddar").innerHTML = dpCheddar -= 1;
        total -= 27.50;
    }

};

document.getElementById("cheddarAdd").onclick = function () {

    document.getElementById("quantCheddar").innerHTML = cheddar += 1;
    total += 20.50;
};

document.getElementById("cheddarSub").onclick = function () {

    if (cheddar > 0) {
        document.getElementById("quantCheddar").innerHTML = cheddar -= 1;
        total -= 20.50;
    }

};


//Vegetarian
//------------------------------------------------------------------------

document.getElementById("duploVegAdd").onclick = function () {

    document.getElementById("quantDuploVeg").innerHTML = dpVeg += 1;
    total += 27.50;

};

document.getElementById("duploVegSub").onclick = function () {

    if (dpVeg > 0) {
        document.getElementById("quantDuploVeg").innerHTML = dpVeg -= 1;
        total -= 27.50;

    }

};

document.getElementById("vegAdd").onclick = function () {

    addItem(veg, 20.50);
    document.getElementById("quantVeg").innerHTML = veg += 1;

};

document.getElementById("vegSub").onclick = function () {

    if (veg > 0) {
        document.getElementById("quantVeg").innerHTML = veg -= 1;
        total -= 20.50;

    }

};


//Chicken
//------------------------------------------------------------------------

document.getElementById("duploChickenAdd").onclick = function () {

    addItem(dpChicken, 27.50);
    document.getElementById("quantDuploChicken").innerHTML = dpChicken += 1;

};

document.getElementById("duploChickenSub").onclick = function () {

    if (dpChicken > 0) {
        document.getElementById("quantDuploChicken").innerHTML = dpChicken -= 1;
        total -= 27.50;

    }

};

document.getElementById("chickenAdd").onclick = function () {
    addItem(chicken, 20.50);
    document.getElementById("quantChicken").innerHTML = chicken += 1;

};

document.getElementById("chickenSub").onclick = function () {

    if (chicken > 0) {
        document.getElementById("quantChicken").innerHTML = chicken -= 1;
        total -= 20.50;

    }

};


//Salad
//------------------------------------------------------------------------

document.getElementById("duploSaladAdd").onclick = function () {

    addItem(dpSalad, 27.50);
    document.getElementById("quantDuploSalad").innerHTML = dpSalad += 1;


};

document.getElementById("duploSaladSub").onclick = function () {

    if (dpSalad > 0) {
        document.getElementById("quantDuploSalad").innerHTML = dpSalad -= 1;
        total -= 27.50;
    }
}

document.getElementById("saladAdd").onclick = function () {

    addItem(salad, 20.50);
    document.getElementById("quantSalad").innerHTML = salad += 1;

};

document.getElementById("saladSub").onclick = function () {

    if (salad > 0) {
        document.getElementById("quantSalad").innerHTML = salad -= 1;
        total -= 20.50;

    }

};


//Bacon
//------------------------------------------------------------------------

document.getElementById("duploBaconAdd").onclick = function () {

    addItem(dpBacon, 29.50);
    document.getElementById("quantDuploBacon").innerHTML = dpBacon += 1;

};

document.getElementById("duploBaconSub").onclick = function () {

    if (dpBacon > 0) {
        document.getElementById("quantDuploBacon").innerHTML = dpBacon -= 1;
        total -= 29.50;

    }

};

document.getElementById("baconAdd").onclick = function () {

    document.getElementById("quantBacon").innerHTML = bacon += 1;
    total += 22.50;

};

document.getElementById("baconSub").onclick = function () {

    if (bacon > 0) {
        document.getElementById("quantBacon").innerHTML = bacon -= 1;
        total -= 22.50;

    }

};


//ChickenBacon
//------------------------------------------------------------------------

document.getElementById("duploChickenBcnAdd").onclick = function () {

    addItem(dpChickenBacon, 30.50);
    document.getElementById("quantDuploChickenBacon").innerHTML = dpChickenBacon += 1;

};

document.getElementById("duploChickenBcnSub").onclick = function () {

    if (dpChickenBacon > 0) {
        document.getElementById("quantDuploChickenBacon").innerHTML = dpChickenBacon -= 1;
        total -= 30.50;

    }

};

document.getElementById("chickenBaconAdd").onclick = function () {

    addItem(chickenBacon, 23.50);
    document.getElementById("quantChickenBacon").innerHTML = chickenBacon += 1;

};

document.getElementById("chickenBaconSub").onclick = function () {

    if (chickenBacon > 0) {
        document.getElementById("quantChickenBacon").innerHTML = chickenBacon -= 1;
        total -= 23.50;

    }

};


//SaladBacon
//------------------------------------------------------------------------

document.getElementById("duploSaladBcnAdd").onclick = function () {

    addItem(dpSaladBacon, 31.50);
    document.getElementById("quantDuploSaladBcn").innerHTML = dpSaladBacon += 1;

};

document.getElementById("duploSaladBcnSub").onclick = function () {

    if (dpSaladBacon > 0) {
        document.getElementById("quantDuploSaladBcn").innerHTML = dpSaladBacon -= 1;
        total -= 31.50;

    }

};

document.getElementById("saladBaconAdd").onclick = function () {

    addItem(saladBacon, 24.50);
    document.getElementById("quantSaladBacon").innerHTML = saladBacon += 1;

};

document.getElementById("saladBaconSub").onclick = function () {

    if (saladBacon > 0) {
        document.getElementById("quantSaladBacon").innerHTML = saladBacon -= 1;
        total -= 24.50;

    }

};


//Pork
//------------------------------------------------------------------------

document.getElementById("duploPorkAdd").onclick = function () {

    addItem(dpPork, 31.50);
    document.getElementById("quantDuploPork").innerHTML = dpPork += 1;

};

document.getElementById("duploPorkSub").onclick = function () {

    if (dpPork > 0) {
        document.getElementById("quantDuploPork").innerHTML = dpPork -= 1;
        total -= 31.50;

    }

};

document.getElementById("porkAdd").onclick = function () {

    addItem(pork, 24.50);
    document.getElementById("quantPork").innerHTML = pork += 1;

};

document.getElementById("porkSub").onclick = function () {

    if (pork > 0) {
        document.getElementById("quantPork").innerHTML = pork -= 1;
        total -= 24.50;

    }

};


//Melt
//------------------------------------------------------------------------

document.getElementById("meltAdd").onclick = function () {

    document.getElementById("quantMelt").innerHTML = melt += 1;
    total += 30.50;

};

document.getElementById("meltSub").onclick = function () {

    if (melt > 0) {
        document.getElementById("quantMelt").innerHTML = melt -= 1;
        total -= 30.50;

    }

};


//Crinkle Fries
//------------------------------------------------------------------------

document.getElementById("crinkleAdd").onclick = function () {

    document.getElementById("quantCrinkle").innerHTML = crinkle += 1;
    total += 7.50;

};

document.getElementById("crinkleSub").onclick = function() {

    if(crinkle > 0){
     document.getElementById("quantCrinkle").innerHTML = crinkle -=1;
     total -= 7.50

    }

};


//Rustic Fries
//------------------------------------------------------------------------

document.getElementById("rusticaAdd").onclick = function() {

    document.getElementById("quantRustica").innerHTML = rustica +=1;
    total += 7.50

};

document.getElementById("rusticaSub").onclick = function() {

    if(rustica > 0){
     document.getElementById("quantRustica").innerHTML = rustica -=1;
     total -= 7.50

    }

};


//Beverages
//------------------------------------------------------------------------

document.getElementById("lata350Add").onclick = function () {

    addItem(lata350, 6.00);
    document.getElementById("quantlata350").innerHTML = lata350 += 1;
    displayOrder();


};

document.getElementById("lata350Sub").onclick = function () {

    if (lata350 > 0) {
        document.getElementById("quantlata350").innerHTML = lata350 -= 1;
        total -= 6.00;
    }

};


document.getElementById("garrafa550Add").onclick = function () {

    addItem(garrafa550, 7.00);
    document.getElementById("quantgarrafa550").innerHTML = garrafa550 += 1;
    displayOrder();


};

document.getElementById("garrafa550Sub").onclick = function () {

    if (garrafa550 > 0) {
        document.getElementById("quantgarrafa550").innerHTML = garrafa550 -= 1;
        total -= 7.00;
    }

};


document.getElementById("garrafa600Add").onclick = function () {

    addItem(garrafa600, 8.50);
    document.getElementById("quantgarrafa600").innerHTML = garrafa600 += 1;
    displayOrder();


};

document.getElementById("garrafa600Sub").onclick = function () {

    if (garrafa600 > 0) {
        document.getElementById("quantgarrafa600").innerHTML = garrafa600 -= 1;
        total -= 8.50;
    }

};
document.getElementById("cervejaAdd").onclick = function () {

    addItem(cerveja, 9.00);
    document.getElementById("quantCerveja").innerHTML = cerveja += 1;
    displayOrder();


};

document.getElementById("cervejaSub").onclick = function () {

    if (cerveja > 0) {
        document.getElementById("quantCerveja").innerHTML = cerveja -= 1;
        total -= 9.00;
    }

};
