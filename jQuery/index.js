$("h1").css("color", "red");
$("h1").addClass("big-text");
console.log($("h1").attr("class"));
$("h2").text("World");
$("button").html("<em>Hi</em>");
console.log($("a").attr("href"));
$("a").attr("href", "https://www.github.com");

$("h1").click(function(){
    $("h1").css("color", "orange");
})

for(var i=0; i<4; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "green";
    });
}

$("button").click(function(){
    $("h1").css("color", "green");
})

// The keypress event is fired when a key is pressed down and that key normally produces a character value.
$("input").keypress(function(event){
    console.log(event.key);
})

// The keydown event is fired when a key is pressed down.
$(document).keydown(function(event){
    $("h1").text(event.key);
    console.log(event.key);
})

$("h1").on("mouseover",function(event){
    $("h1").css("color", "blue");
})

$("h2").before("<button>before!</button>");
$("h2").after("<button>after!</button>");
$("h2").prepend("<button>prepend!</button>");
$("h2").append("<button>append!</button>");

$("button").click(function(){
    // $("h1").hide();
    // $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5});
    // $("h1").animate({margin: 20});
    // $("h1").animate({margin: "20%"});
    
    // chaining animations
    $("h1").slideUp().slideDown().animate({opacity: 0.5});

})