window.onload = function(){
    var body=document.getElementById('body');

   name
    for(var i=0;i<7;i++){
        var text= document.createElement("input");
        text.setAttribute("type","text");
        text.id="text"+i;
        if(i===0){
            text.value="Enter in your product"
        }else if (i===1){
            text.value="Enter in your City"
        }else if (i===2){
            text.value="Enter in your state"
        }else if (i===3){
            text.value="Enter in your Zipcode"
        }else if (i===4){
            text.value="Enter in your Credit Card Number"
        }else if (i===5){
            text.value="Enter in your CVC number on the back of the card"
        }else if (i===6){
            text.value="Enter in your Street Address"
        }else if (i===7){
            text.value="Enter in your Full name"
        }
        console.log(i)
        body.appendChild(text);
    }

    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.onclick=function(){
        var price;
        if(){}
        if(){}
        if(){}
        if(){}
        if(){}
        if(){}
        window.alert("Submitted. order total =" +price)
        location.reload();
    }
    body.appendChild(button);

    

}