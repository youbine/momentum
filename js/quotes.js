const quotes = [
    {
        quote: "If you don’t imagine, nothing ever happens at all.",
        author: "John Green",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        author: "Oscar Wilde",
    },
    {
        quote: "Live in the sunshine, swim the sea, drink the wild air.",
        author: "Ralph Waldo Emerson",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
