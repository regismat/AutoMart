function readURL(input) {
    var preview = document.querySelector('#preview');
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function imagePreview(url){
    var preview = document.querySelector('#preview');
    preview.src = url;
}

function readURLAlbum(input, display_id) {
    var display = document.querySelector(display_id);
    var preview = document.querySelector('#preview');
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            display.src = preview.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}