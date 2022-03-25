import React, { Component } from "react";

export default class QuoteMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: null,
      author: null,
    };
  }

  componentDidMount = async () => {
    // fetch a quote from API
    const allQuotesJSON = await fetch(
      "https://gist.githubusercontent.com/Ebazhanov/c391d558be432e54dc0f78783879ee84/raw/7014350f2e0f136b3cd8e0d5b05484db7c64ce2f/quotes.json",
      { method: "GET" }
    );
    const allQuotes = await allQuotesJSON.json();

    // select a random quote
    const random = Math.floor(Math.random() * allQuotes.length);

    // displays new quote
    this.setState({
      quote: allQuotes[random].quote,
      author: allQuotes[random].author,
    });

    // change colors
    const colors = [
      "#4d194d",
      "#1b3a4b",
      "#290025",
      "#343434",
      "#A72402",
      "#03071e",
      "#370617",
      "#342224",
      "#472E32",
      "#5E11E4",
      "#0C6458",
      "#116709",
    ];
    let randomColor = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomColor];
    document.getElementById("text").style.color = colors[randomColor];
    document.getElementById("author").style.color = colors[randomColor];
    document.getElementById("tweet-quote").style.color = colors[randomColor];
    document.getElementById("new-quote").style.backgroundColor =
      colors[randomColor];

    document
      .getElementById("text")
      .animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
    document
      .getElementById("author")
      .animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
  };

  getNewQuote = async () => {
    // fetch a quote from API
    const allQuotesJSON = await fetch(
      "https://gist.githubusercontent.com/Ebazhanov/c391d558be432e54dc0f78783879ee84/raw/7014350f2e0f136b3cd8e0d5b05484db7c64ce2f/quotes.json",
      { method: "GET" }
    );
    const allQuotes = await allQuotesJSON.json();

    // select a random quote
    const random = Math.floor(Math.random() * allQuotes.length);

    // displays new quote
    this.setState({
      quote: allQuotes[random].quote,
      author: allQuotes[random].author,
    });

    // change colors
    const colors = [
      "#4d194d",
      "#1b3a4b",
      "#290025",
      "#343434",
      "#A72402",
      "#03071e",
      "#370617",
      "#342224",
      "#472E32",
      "#5E11E4",
      "#0C6458",
      "#116709",
    ];
    let randomColor = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomColor];
    document.getElementById("text").style.color = colors[randomColor];
    document.getElementById("author").style.color = colors[randomColor];
    document.getElementById("tweet-quote").style.color = colors[randomColor];
    document.getElementById("new-quote").style.backgroundColor =
      colors[randomColor];

    // animation for smooth transitions
    document
      .getElementById("text")
      .animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
    document
      .getElementById("author")
      .animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
  };

  render() {
    return (
      <div id="quote-box" className="card-body w-auto mx-auto">
        <blockquote className="p-2">
          <p id="text" className="blockquote text-center">
            <i className="fa fa-quote-left"></i>
            {this.state.quote}
          </p>
          <footer id="author" className="blockquote-footer text-end">
            {this.state.author}
          </footer>
        </blockquote>
        <footer id="card-footer">
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            role="button"
            title="Tweet this quote!"
            target="_blank"
            className="fa fa-twitter-square"
          ></a>
          <button
            id="new-quote"
            type="button"
            title="Click to get a new quote!"
            className="btn "
            onClick={this.getNewQuote}
          >
            New Quote
          </button>
        </footer>
      </div>
    );
  } //end of render
}
