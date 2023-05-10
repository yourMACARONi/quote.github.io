


    const quotes = ["If life were predictable it would cease to be life, and be without flavor.", 
    "Life is what happens when you're busy making other plans.", 
    "When you reach the end of your rope, tie a knot in it and hang on.", 
    "Always remember that you are absolutely unique. Just like everyone else.", 
    "The way to get started is to quit talking and begin doing."];

    const author = [" Elanor Roosevelt",  "John Lennon", "Franklin D. Roosevelt", "Margaret Mead", "Walt Disney"];

    const quote = document.querySelector(".quote");
    const authors = document.querySelector(".author");

    let button = document.querySelector(".next").addEventListener("click", () => {
        const random = Math.floor(Math.random() * 5);

        quote.innerHTML = quotes[random];
        authors.innerHTML = author[random];
    })

