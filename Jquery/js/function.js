
$("button").on("click", function(){
    $("h1").addClass("big-titte");
    $("h1").text("Goodbye!");
});

$("button").html("<strong>click me</strong>");

console.log($("#imgExemplo").attr("src"));

console.log($("#aTag").attr("href","https://br.yahoo.com/"));

// $("#textInput").keydown(function(event){3
//     $("h2").addClass("medium-tittle");
//     $(".textWritten").text(event.key);
// });

$("#textInput").on("keydown", function(event){
    $("h2").addClass("medium-tittle");
    $(".textWritten").text(event.key);
});


$("h1").before("<button>New button via Jquery Before</button>");

$("h1").after("<button>New button via Jquery After</button>");

$(".htres1").append(" append");

