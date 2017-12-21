$(document).ready(function(){
    getQuote();
  
    var quoteStr = "";
    var authorStr = "";
  
    function getQuote() {
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
        $.getJSON(url, function(data) {
            $(".quote").html('"' + data.quoteText + '"');
            $(".author").html("-" + data.quoteAuthor);
            quoteStr = data.quoteText;
            authorStr = data.quoteAuthor;
        });
    }; 
    
    $("#tweet").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + quoteStr + " - " + authorStr);
    }); 
      
    $("#newQuote").on("click", function() {
        getQuote();
    }); 
});