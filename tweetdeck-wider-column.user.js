// ==UserScript==
// @name    TweetDeck Wider Column
// @include https://tweetdeck.twitter.com/*
// @version 0.0.0
// @grant none
// ==/UserScript==

(() => {
    const style = document.createElement('style')
    style.innerText = `.column { width: 33% !important; }`

    document.head.appendChild(style)

    console.log('TweetDeck Wider Column Installed')
})()

