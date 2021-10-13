import React, { useState } from 'react';
import '../../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuoteMachine = ({quotes, colors}) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const [quote, setQuote] = useState(quotes[randomIndex].quote);
    const [author, setAuthor] = useState(quotes[randomIndex].author);
    const [color, setColor] = useState(colors[randomColorIndex]);
    const [classes, setClasses] = useState("colorChange startOpacityChange");

    const handleClick = () => {
        const randomQuoteObj = quotes[Math.floor(Math.random() * quotes.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setClasses('opacityChange colorChange');
        setColor(randomColor);
        setTimeout(() => setQuote(randomQuoteObj.quote), 750);
        setTimeout(() => setAuthor(randomQuoteObj.author), 750);
        setTimeout(() => setClasses('colorChange'), 1500); 
    };
    const style = {
        backgroundColor: color,
        color: color,
    }

    return (
        <div className="colorChange" style={style} id="container">
            <div className="quote-box-container" id="quote-box">
                <div className={classes} id="quote-line" style={{ display: 'inline-block' }}> <span> <FontAwesomeIcon icon={['fas', 'quote-left']} size="2x" /> </span> <h2 id="text" style={{ display: 'inline' }} > {quote} </h2> </div>
                <div className={classes} id="authorDiv"> <p id="author">-{author} </p> </div>
                <div id="footer">
                    <a style={{ color: color }} target="_blank" rel="noreferrer" id="tweet-quote" href={`https://twitter.com/intent/tweet?text= "${quote}"  -${author} `}>
                        <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
                    </a>
                    <button className="colorChange" style={{ backgroundColor: color }} id="new-quote" onClick={handleClick}>New quote</button>
                </div>
            </div>
        </div>
    );
}


export default QuoteMachine
