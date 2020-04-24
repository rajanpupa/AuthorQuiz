import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AuthorQuiz from "./AuthorQuiz";
import {shuffle, sample} from "underscore";

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'The Adventures of Tom Sawyer', 'Life on the Mississipi']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowlings.jpg',
        imageSource: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Pinguino',
        books: ['The Shining', "IT"]
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.png',
        imageSource: 'Wikimedia Commons',
        books: ['David copperfield', 'A Tale of two cities']
    },
    {
        name: 'William Shakespearce',
        imageUrl: 'images/authors/williamshakespearce.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i){
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find(
            (author)=> author.books.some((title)=> title === answer)
        )
    }
}

const state = {
  turnData: getTurnData(authors),
  highlight: ''
};

function onAnswerSelected(answer){
    const isCorrect = state.turnData.author.books.some((book)=> book===answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function render(){
    ReactDOM.render(
        <React.StrictMode>
            <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
