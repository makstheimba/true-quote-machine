function getRandElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function getNewQuote() {
    var defaultQuotes = ["War, War never changes.",
                     "Who let the dogs out?",
                    "One Does Not Simply Walk Into Mordor.",
                    "I used to be an adventurer like you, then I took an arrow in the knee."
                     ],
        famousPeople = ["Albert Einstein", "Donald Trump", "Tiger Woods",
                   "Confucius", "Usain Bolt", "Isaac Newton",
                   "Lionel Messi", "Kanye West", "Jackie Chan",
                   "Osama bin Laden", "Dwayne Johnson"];
    $.getJSON({
        url: "http://api.forismatic.com/api/1.0/?method=getQuote&key=939083&lang=en&format=jsonp&jsonp=?",
        timeout: 1200,
        success: function (data) {
            $("#quoteText").html(data.quoteText);
        },
        error: function () {
            $("#quoteText").html(getRandElem(defaultQuotes));
        },
        complete: function () {
            $("#quoteAuthor").html(getRandElem(famousPeople));
            $("#quoteText, #quoteAuthor").fadeTo(300, 1);
            $("#btnNewQuote, #btnTweet").prop("disabled", false).css("cursor", "pointer");
        }
    });
}

$(document).ready(function () {
    $("#btnNewQuote").click(function () {
        $("#btnNewQuote, #btnTweet").prop("disabled", true).css("cursor", "default");
        $("#quoteText, #quoteAuthor").fadeTo(300, 0).promise().done(getNewQuote);
    });
    $("#btnTweet").click(function () {
        window.open("https://twitter.com/intent/tweet?text=" + $("#quoteText").html() + " -- " + $("#quoteAuthor").html());
    });
});