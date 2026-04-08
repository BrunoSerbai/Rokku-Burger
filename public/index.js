//TODO: Implement a event listener for the parent box, instead of each button
//TODO: Use a pop up window or drop down menu to display all bevarages options, observations and extras
async function fetchProdutos(){
    try{
        const response = await fetch(`http://localhost/produtos`) 

        if(!response.ok){
            throw new Error("Não foi possivel pegar a lista de produtos")
        }
        
        const dados = await response.json()

        console.log(dados)
        return dados
    }
    catch(error){
        console.log(error)
    }
}

console.log("FetchProdutos FOI executado!")
console.log(fetchProdutos())


//Total price and chosen items 
let total = 0;
let pedido = [];

let nome; 
let obs; 

//Print configurations
let fontSize = 12; 

function Impressao(){ 
    
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
    dpCheese > 0 ? pedido.push(`${dpCheese}- DUPLO CheeseBurger ----- R$25,90<br>`) : false;
    dpCheddar > 0 ? pedido.push(`${dpCheddar}- DUPLO Cheddar ---------- R$28,90<br>`) : false;
    dpVeg > 0 ? pedido.push(`${dpVeg}- DUPLO Vegetariano ------ R$28,90<br>`) : false;
    
	//Total
    totalFinal = total.toFixed(2);
    pedido.push("&nbsp".repeat(38) + "<br>","=====================================<br>", `  Total -------------------- R$${totalFinal} <br>`,"=====================================<br>");
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

    addItem(dpCheese, 25.90);
    document.getElementById("quantDuploCheese").innerHTML = dpCheese += 1;
    displayOrder();


};

document.getElementById("duploCheeseSub").onclick = function () {

    if (dpCheese > 0) {
        document.getElementById("quantDuploCheese").innerHTML = dpCheese -= 1;
        total -= 25.90;
    }

};

document.getElementById("cheeseAdd").onclick = function () {

    addItem(cheese, 18.90);
    document.getElementById("quantCheese").innerHTML = cheese += 1;

};

document.getElementById("cheeseSub").onclick = function () {
    if (cheese > 0) {
        subItem(cheese, 18.90);
        document.getElementById("quantCheese").innerHTML = cheese -= 1;
    };

};


