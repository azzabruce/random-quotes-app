$(document).ready(function(){
    getNewQuote();
    //create a new variable and name it quote
    var quote ;
    //create a new variable and name it author
    var author ;
    //create a function that generates new quote every time a button is clicked or the page refereshed 
    function getNewQuote(){
        
     //create avariable with the api url    
    var url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
   
   //run  
    $.getJSON(url, function(data){
    console.log(data);
        //generate random quotes using Math
       var randomQuote = data.quotes[Math.floor(Math.random()*data.quotes.length)];
        //console quote and author to make sure the call is working
        console.log(randomQuote.quote);
        console.log(randomQuote.author);
        //replace quote innerhtml with a random quote 
       $('#quote').html(randomQuote.quote);
        //replace the innerhtml with author 
       $('#author').html(randomQuote.author);
        $('.twitterBtn').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' +randomQuote.quote + '" ' + randomQuote.author));
    
    });
    
  };
    
    
//create an eventlistener for the newQuote button and the twitter share button
  $('#newQuote').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
  });
     
});