const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    var qt = encodeURIComponent(quote.innerHTML);
    var at = encodeURIComponent(author.innerHTML);

    window.open("https://twitter.com/intent/tweet?text=" + qt + " ----by " + at, "Tweet Window", "width=600; height=300");
}
getQuote(api_url);