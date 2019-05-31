function displayAction(id) {
    var item = document.querySelector(id);
    if( item.style.display=='none' ){
        item.style.display = 'block';
        if (id == '#update-price' || id == '#make-order') {
            var price = document.querySelector('#price');
            var quantity = document.querySelector('#quantity ')
            var inputed_price = document.querySelector('#inputed_price');
            var inputed_quantity = document.querySelector('#inputed_quantity');
            inputed_price.value = price.innerHTML;
            inputed_quantity.value = quantity.innerHTML;
        }
    }else{
        item.style.display = 'none';
    }
}

function flagAsFraud() {
    alert(`
    Auto-Mart: -Alert-
    This car advertisement has been flagged as a fraud.
    Thank you for reporting.
    `);
    location.replace('../html/public-view-all-unsold-cars.html');
}

function deleteAd() {
    if(
        confirm(`
                Auto-Mart: -Alert-
            You are about to delete this car advertisement record.
            Do you really want to proceed?
        `)
        ) {
            location.replace('../html/admin-dashboard.html');
            alert(`
    Auto-Mart: -Alert-
    Successfully deleted car advertisement
    `);
    }else{
        alert(`
            Operation cancelled.
        `);
    }
    
}

function updatePrice() {
    var price = document.querySelector('#price');
    var inputed_price = document.querySelector('#inputed_price');
    price.innerHTML = inputed_price.value;
    hideAction('#update-price'); 
    alert('Successfully updated price');
}

function saveOrder() {
    hideAction('#make-order');
    location.replace('../html/user-dashboard.html');
    alert(`
    Auto-Mart: -Alert-
    Order Successfully submitted.
    You will soon receive the feedback from the seller.
    `);
}

function updateOrder() {
    var price = document.querySelector('#price');
    var quantity = document.querySelector('#quantity');
    var inputed_price = document.querySelector('#inputed_price');
    var inputed_quantity = document.querySelector('#inputed_quantity');
    price = inputed_price.value;
    quantity = inputed_quantity.value;
    location.replace('../html/user-dashboard.html');
    alert(`
    Auto-Mart: -Alert-
    Order Successfully updated.
    You will soon receive the feedback from the seller.
    `);
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

function updateAlbum() {
    var update_album = document.querySelector('#update-album');
    update_album.style.display = 'none';
    alert('Album updated Successfully');
}

function search(){
    alert('done!');
    location.replace('../html/public-view-all-unsold-cars.html?type=bmw')       
  
}

function alertEmptyPriceRange(min, max){
    if (min==undefined && max)
    {
        alert(`
    Auto-Mart: -Alert : Empty Price Range - 
    There 's currently no car available under $${max} of price.
    Please visit other ranges or try later. 
    `);
    }else
    if (min && max==undefined)
    {
        alert(`
    Auto-Mart: -Alert : Empty Price Range - 
    There's currently no car available above $${max} of price.
    Please visit other ranges or try later. 
    `);
    }else
    {
        alert(`
    Auto-Mart: -Alert : Empty Price Range - 
    There's currently no car available in the range of $${min} to $${max} of price.
    Please visit other ranges or try later. 
    `);
    }
    
}

function addEvents(){

    
    //search_button.addEventListener('click', search())
}
addEvents();