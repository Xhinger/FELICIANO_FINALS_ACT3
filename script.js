$(document).ready(function(){

    $("#title").text("JQueryyyyy")

    $("p:first").css("color", "red")

    $("ul li:first-child").css("color", "green")

    $("[href]").css("color", "yellow")

    $("tr:odd").css("background", "lightblue")

    $("tr:even").css("background", "lightgreen")

    $("th").css("background", "red")

     $(".btn2").click(function(){
         $(this).css("background", "lightgreen")
         $("#message").text("You clicked the button!!")
     }) 

    $(".btn2").dblclick(function(){
        $(this).css("background", "brown")
        $("#message").text("You double clicked the button!!")
    })

    $(".btn2").mouseenter(function(){
        $("#message").text("Your mouse reached the button")
    })

    $(".btn2").mouseleave(function(){
        $("#message").text("Your mouse is outside the button")
    })

     $(".btn2").mousedown(function(){
        $(this).css("background", "darkgreen")
    })

    $(".btn2").mouseup(function(){
        $(this).css("background", "black")
    })

    $("#name").focus(function(){
        $("#message").text("Typing...")
        $(this).css("background", "lightyellow")
    })

    $("#name").blur(function(){
        $("#message").text("Ouput")
        $(this).css("background", "White")
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
    })

    $(".btn2").click(function(){
        $("#table").hide(5000)
    })

    $(".btn3").click(function(){
        $("#table").show(5000)
    })

})