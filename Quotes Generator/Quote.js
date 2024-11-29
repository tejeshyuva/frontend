// variables
let btn =document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person =document.querySelector ('.person');

const quotes =[
    {
        quote: 'The future belongs to those who believe in the beauty of their dreams.',
        person: 'Eleanor Roosevelt'
    },
    {
        quote: 'The greatest accomplishment is not in never falling, but in rising again after falling.',
        person: 'John F. Kennedy'
    },
    {
        quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        person: 'Winston Churchill'
    },
    {
        quote: 'Perseverance, like determination, is key to success.',
        person: 'Steve Jobs'
    },
    {
        quote: 'Believe you can and you are halfway there.',
        person: 'George Orwell'
    },
    {
        quote: 'The only way to do great work is to love what you do.',
        person: 'Warren Buffett'
    }
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() *quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})