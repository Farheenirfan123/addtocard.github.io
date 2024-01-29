function show(){

    let prdName = document.getElementById("pName").value;    
    let StoreName = document.getElementById("pStore").value;
    let prdLink = document.getElementById("pLink").value;
    let prdPrice = document.getElementById("pPrice").value;


    let userExist = products.find(
        (item)=>{
            return item.productStore == StoreName;
        }
    )

    if(userExist){
        alert("Store Already Exist Create Use An Other Name")
    }
    else{

        products.push({
            productName: prdName ,
            productPrice: prdPrice,
            productImg: prdLink,
            productStore: StoreName,
        })
        let myCard = document.createElement("div");
        let cardImg = document.createElement("img");
        let cardHd = document.createElement("h1");
        let cardStore = document.createElement("p");
        let cardPrice = document.createElement("span");
        
    products.map(
        (elements) => {
            myCard.classList.add("card");
            cardImg.classList.add("cardImg");
            cardHd.classList.add("cardHd");
            cardStore.classList.add("cardDes");
            cardPrice.classList.add("cardPrice");
    
            cardImg.src = elements.productImg;
            cardHd.innerText = elements.productName;
            cardStore.innerText = elements.productStore;
            cardPrice.innerText ="Price :" + elements.productPrice;
    
            myCard.appendChild(cardHd);
            myCard.appendChild(cardStore);
            myCard.appendChild(cardImg);    
            myCard.appendChild(cardPrice);
    
    
            let cardContainer = document.getElementById("container");
            cardContainer.appendChild(myCard);
    
        })
    }
}