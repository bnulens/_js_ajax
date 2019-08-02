var getQuote = document.getElementById("quote");
const refreshButton = document.getElementById("refresh");
const baseURL = 'https://thatsthespir.it/api';


var requestMotivation = new XMLHttpRequest();
requestMotivation.open("GET", baseURL , true);

    
requestMotivation.onreadystatechange = function refreshMotivation() {
    if(this.readyState <= 3){
        console.log()
        var output = '<div class="loader"></div>';
    };
    if(this.readyState === 4 && this.status == 200){
        console.log('done');
        var x = JSON.parse(this.responseText);
        var output = "";

        if (x.photo == ""){
        output += 
        '<div class="daily-quote">' +
        '<img src="images/unknown-author.png" class="picture">' + 
        '<ul>' +
        '<li class="quote-text"><img src="images/quote-unquote.svg" class="quote-left">'+x.quote+'<span class="pilcrow">|</span></li>' +
        '<li class="quote-author">' + x.author + '</li>' +
        '</ul>' +
        '</div>'
        }
        else {
        output += 
        '<div class="daily-quote">' +
        '<img src="' +x.photo+ '" class="picture">' + 
        '<ul>' +
        '<li class="quote-text"><img src="images/quote-unquote.svg" class="quote-left">'+x.quote+'<span class="pilcrow">|</span></li>' +
        '<li class="quote-author">' + x.author + '</li>' +
        '</ul>' +
        '</div>'
        }
        
    };
    document.getElementById("quote").innerHTML = output;
}

requestMotivation.send();

function refreshMotivation() {
    // console.log(requestMotivation,'test W')
    requestMotivation.open("GET", baseURL , true);
    requestMotivation.send();
}

refreshButton.addEventListener ("click", () => {
    // window.location.reload();
    refreshMotivation();
})


        
        