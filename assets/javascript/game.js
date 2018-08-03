$(document).ready(function() {

    var random = Math.floor(Math.random()*102+19);
    
    $("#randomnumberBox").text(random);

    console.log(random);
    
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);
    
    var userTotal= 0;
    var wins = 0;
    var losses = 0;
    
    $("#winlossBox").text("Wins " + wins)   
    $("#winlossBox").text("Losses " + losses);
    
    function reset() {
        random = Math.floor(Math.random()*102+19);
        console.log(random);
        $("#numberToGet").text(random);
        var num1 = Math.floor(Math.random()*12+1);
        var num2 = Math.floor(Math.random()*12+1);
        var num3 = Math.floor(Math.random()*12+1);
        var num4 = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $("#score").text(userTotal);
    }
    
    function winner() {
        alert("You Won!!");
        wins++;
        $("#winlossBox").text("Wins " + wins);
        reset();
    }
    
    function loser() {
        alert("You Lose!!");
        losses++;
        $("#winlossBox").text("Losses " + losses);
        reset();
    }
    
    $("#image1").on("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal " + userTotal);
        $("#scoreBox").text(userTotal);

        if (userTotal === random) {
            winner()
        }
    
        else if (userTotal > random) {
            loser()
        }
       
    $("#image2").on("click", function() {
        userTotal = userTotal + num2;
        console.log("New userTotal " + userTotal);
        $("#scoreBox").text(userTotal);
    
    
        if (userTotal === random) {
            winner()
        }
    
        else if (userTotal > random) {
            loser()
        }

    $("#image3").on("click", function() {
        userTotal = userTotal + num3;
        console.log("New userTotal " + userTotal);
        $("#scoreBox").text(userTotal);

        if (userTotal === random) {
            winner()
        }
    
        else if (userTotal > random) {
            loser()
        }

    $("#image4").on("click", function() {
        userTotal = userTotal + num4;
        console.log("New userTotal " + userTotal);
        $("#scoreBox").text(userTotal);

        if (userTotal === random) {
            winner()
        }
            
        else if (userTotal > random) {
            loser()
        }
      })
     })
    })
   })
});