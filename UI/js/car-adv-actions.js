function displayAction(id){
    var item = document.querySelector(id);
    if( item.style.display=='none' ){
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
    alert('Successfully updated price');
}

function hideAction(id) {
    var element = document.querySelector(id);
    if( element.style.display == 'none') {
        element.style.display = 'block';
    }else{
        element.style.display = 'none';
    }
}

function markCarAsSold(item){
    var availability = document.querySelector('#availability');

    if( availability.innerHTML == 'NOT SOLD' ) {
        availability.innerHTML = 'SOLD';
        availability.style.color = 'red';
        item.innerHTML = "Mark as unsold";
        alert('Your advertisement has been removed from public visibility.')
    }else{
        availability.innerHTML = 'NOT SOLD'
        availability.style.color = 'green';
        item.innerHTML = "Mark as sold";
        alert('Your advertisement is now available to the public.')
    }
    
}