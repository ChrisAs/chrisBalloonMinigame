
// Make so when balloon is activated background color of body changes

// To random gradient color with transition delay


$(function () {


    alert('There are 16 balloons to pop!')
    $('.balloon').on('click', function () {
        console.log(`Try using the shuriken`)
        $(this).addClass('popped')
        $('body').css('background-color', 'red')
        alert('Cheater!')
    })

    $(function () {
        $(".fas.fa-fan").draggable({ containment: "#containment-wrapper", scroll: false });
    });
    $(function () {
        $('.balloon').removeData
    })
    $('.balloon').droppable({
        drop: function (event, ui) {
            console.log(`You popped a balloon!`)
            // $("body").css({"backgroundColor": "green", "color": "white"});
            
            $(this).addClass('popped')

            let back = ["#ff3300", "blue", "red", "#FFE53B", "#FF2525", "#F6416C", "#9F44D3", "#E80505", "#58CFFB", "#21D4FD"];
            let rand = back[Math.floor(Math.random() * back.length)];
            $('body').css('background', rand);


        }
    });
    //  Countdown game timer with alert and refreshing of page stating try again

});


//Make draggable needle to drop on balloon fab class object to activate effect

window.onload = function () {
    let hou = 0;
    let sec = 60;
    setInterval(function () {

        document.getElementById("timer").innerHTML = hou + " : " + sec;
        sec--;
        while (sec == 00) {
            alert('YOU LOSE!')
        }
    }, 900);

}

// Make timer stop 
function resetTimer() {
    while (sec === 00) sec

    let sec = 0;
}
    //Make balloon disappear after activated