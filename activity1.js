function updatescore()
{
    score = score +1;
    document.getElementById("score").innerHTML ="score:" +score;
    }

    function saveScore()
    {
        localstorage.setItem("score", score);

    }

    function nextpage(){
        window.location = "activity_2.html";
 }


 