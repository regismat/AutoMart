function displayAction(id){
    var item = document.querySelector(id);
    if(item.style.display=='none'){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
}

function updatePrice() {
    var price = document.querySelector('#price');
    var inputed_price = document.querySelector('#inputed_price');
    price.innerHTML = inputed_price.value;
    hideAction('#update-price'); 
}

function hideAction(id) {
    var element = document.querySelector(id);
    if( element.style.display == 'none') {
        element.style.display = 'block';
    }else{
        element.style.display = 'none';
    }
}