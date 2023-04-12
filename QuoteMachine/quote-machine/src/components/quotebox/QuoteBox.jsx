import React, {useState, useEffect} from 'react'
import './quotebox.css'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaTumblr} from 'react-icons/fa'

const QuoteBox = () => { 

    // Deployed
    // Deployed for Phone
    // Add Tablet Mode
    // const quoteCategories = ['age', 'alone', 'amazing', 'anger',
    //   'architecture', 'art', 'attitude', 'beauty', 'best', 'birthday',
    //   'business','car','change', 'communications', 'computers', 'cool',
    //   'courage','dad', 'dating', 'death', 'design', 'dreams', 'education',
    //   'environmental', 'equality', 'experience', 'failure', 'faith', 'family',
    //   'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship',
    //   'funny', 'future', 'god', 'good', 'government', 'graduation', 'great', 'happiness',
    //   'health', 'history', 'home', 'hope', 'humor', 'imagination', 'inspirational', 'intelligence',
    //   'jealousy', 'knowledge', 'leadership', 'learning', 'legal', 'life', 'love', 'marriage', 'medical',
    //   'men', 'mom', 'money', 'morning', 'movies', 'success']

    const [quote, setQuote] = useState('');
    const [prevQuote, setPrevQuote] = useState()

    // API 1 - https://api.api-ninjas.com/v1/quotes?category= + category
    // API 2 - "https://type.fit/api/quotes"

    //Method for useEffect
    const initialize = () => { 
      fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => { 
        let random = Math.floor(Math.random() * data.length)
        setQuote(data[random])
      })
    }

    const getQuote = () => { 
      // let random = Math.floor(Math.random() * quoteCategories.length)
      // let category = quoteCategories[random]
      // fetch('https://api.api-ninjas.com/v1/quotes?category=' + category)
      // .then((response) => response.json())
      // .then((data) => { 
      //   console.log(data)
      //   setQuote(data)
      //   }
      // )
      setPrevQuote(quote)
      fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => { 
        let random = Math.floor(Math.random() * data.length)
        setQuote(data[random])
      })
    }

    const getPreviousQuote = () => { 
      let temp = quote
      setQuote(prevQuote)
      setPrevQuote(temp)
    }

    useEffect(() => { 
      initialize()
    }, [])

    return (
      <div className="quote-app">
        <div className="quote-box" id="quote-box">
          <div className="text" id="text">
            <p className="quote-text" id="quote-text">
              "{quote.text}"
            </p>
          </div>
          <div className="author" id="author">
             <p className="author-text" id="author-text">-{quote.author}</p>
          </div>
          <div className="new-quote" id="new-quote">
            <br />
            <a className="twitter-link" id="twitter-link" href="twitter.com/intent/tweet" target="_blank"><AiFillTwitterCircle /></a>
            <a className="tumblr-link" id="tumblr-link" href="#" target="_blank"><FaTumblr /></a>
            {prevQuote && <button className="btn-prev-quote" id="btn-prev-quote" onClick={getPreviousQuote}>Previous Quote</button>}
            <button className="btn-quote" id="btn-quote" onClick={getQuote}>New Quote</button>
          </div>
        </div>
      </div>
    )
}

export default QuoteBox; 