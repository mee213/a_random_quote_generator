// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
let quotes =  [{quote: "What one programmer can do in one month, two programmers can do in two months.",
                source: "Fred Brooks",
                year: 1975,
                tag: "programming",
                color: "darkred"},

               {quote: "Java is to JavaScript as ham is to hamster.",
                source: "Jeremy Keith",
                citation: "Resilient Web Design",
                tag: "programming",
                color: "darkslategrey"},

               {quote: "One of the best programming skills you can have is knowing when to walk away for awhile.",
                source: "Oscar Godson",
                tag: "programming",
                color: "olive"},

               {quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
                source: "Louis Srygley",
                color: "royalblue"},

               {quote: "When someone says: 'I want a programming language in which I need only say what I wish done', give him a lollipop.",
                source: "Alan J. Perlis",
                color: "blue"},

               {quote: "Good design adds value faster than it adds cost.",
                source: "Thomas C. Gale",
                color: "purple"},

               {quote: "Programming is like kicking yourself in the face, sooner or later your nose will bleed.",
                source: "Kyle Woodbury",
                citation: "http://www.junauza.com",
                color: "darkturquoise"},

               {quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
                source: "Martin Golding",
                color: "navy"},

               {quote: "Every child is an artist. The problem is how to remain an artist once he grows up",
                source: "Pablo Picasso",
                citation: "Time Magazine",
                year: 1976,
                tag: "art",
                color: "blueviolet"}];


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array) {
    // get a random integer corresponding to the range of index numbers in the array
    let index = Math.floor(Math.random() * array.length);
    
    // return an object from the array with the index of the randomly generated number
    return array[index]; 
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
    // get a random quote object from the array of quotes
    let randomQuote = getRandomQuote(quotes);
    
    // create empty string to build it up in subsequent code
    let stringOfQuoteProperties = "";
    
    //populate stringOfQuoteProperties
    stringOfQuoteProperties += '<p class="quote">' + randomQuote.quote + '</p>';
    stringOfQuoteProperties += '<p class="source">' + randomQuote.source;

    // add citation to string only if it exists
    if (randomQuote.citation) {
        stringOfQuoteProperties += '<span class="citation">' + randomQuote.citation + '</span>';
    }

    // add year to string only if it exists
    if (randomQuote.year) {
        stringOfQuoteProperties += '<span class="year">' + randomQuote.year + '</span>';
    }

    if (randomQuote.tag) {
        stringOfQuoteProperties += '<span class="tag">' + randomQuote.tag + '</span>';
    }

    // add closing tag to string
    stringOfQuoteProperties += '</p>';

    //print to the DOM
    document.body.style.backgroundColor = randomQuote.color;
    document.getElementById('loadQuote').style.backgroundColor = randomQuote.color; 
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// The "printQuote" function is called every 10 seconds
setInterval(printQuote, 10000);