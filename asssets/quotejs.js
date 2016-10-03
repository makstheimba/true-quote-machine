$(document).ready(function(){
    $("#btnNewQuote").click(function(){    
        $("#quoteText, #quoteAuthor" ).fadeTo(800, 0);
        $("#btnNewQuote").prop("disabled", true);        
        getNewQuote();      
    });
    $("#btnTweet").click(function(){
        window.open("https://twitter.com/intent/tweet?text="+$("#quoteText").html()+" -- "+$("#quoteAuthor").html());
    });
});
function getRandElem(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getNewQuote(){
    var defaultQuotes = ["War, War never changes.",
                        "I'm so smart",
                        "Who let the dogs out?",
                        "I used to be an adventurer like you, then I took an arrow in the knee.",
                        "I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I’m fucking retarded but I don’t care, I’m beautiful. I’m having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me “Apache” and respect my right to kill from above and kill needlessly. If you can’t accept me you’re a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.",
                        "One Does Not Simply Walk Into Mordor.",
                        "It's a trap.",
                        "Not even close baby.",
                        ],
        famousPeople = ["Albert Einstein", "Barack Obama", "Tiger Woods",
                       "Confucius", "Usain Bolt", "Isaac Newton",
                       "Lionel Messi", "Jesus Christ", "Jackie Chan",
                       "Osama bin Laden", "Socrates", "Karl Marx"],
        randKey = getRandomInt(100000,999999);
    $.ajax({
        url: "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&key="+randKey+"&format=json&lang=en",
        timeout: 1200,
        success: function(data){
            console.log("success");            
            $("#quoteAuthor").html(getRandElem(famousPeople));
            $("#quoteText").html(data.quoteText);           
        },
        error: function(){
            console.log("error");
            $("#quoteAuthor").html(getRandElem(famousPeople));
            $("#quoteText").html(getRandElem(defaultQuotes));
        },
        complete: function(){
            $("#quoteText, #quoteAuthor").fadeTo(600, 1);
            $("#btnNewQuote").prop("disabled", false);
        },
    });
    
}