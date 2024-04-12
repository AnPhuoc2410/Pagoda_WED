let price = 0;
function displayPrice(){
    let tour = document.getElementById('tour');
    let priceList = document.getElementById('price');
    let locate = tour.value;
    if(locate == "muine"){
        price = 100;
    }
    else if(locate == "camau"){
        price = 150;
    }
    else if(locate == "vungtau"){
        price = 90;
    }
    else if(locate == "dalat"){
        price = 120;
    }
    else if(locate == "hotram"){
        price = 110;
    }
    priceList.innerHTML=price + "$/Person";
}
function CalTotal(){
    var people = document.getElementById('number');
    var amount = document.getElementById('total-amount')
    let totalPrice = people.value * price;
    amount.innerHTML= "Total amount: " + totalPrice +"$";
}