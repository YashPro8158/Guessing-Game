let inputvalue = document.getElementById("usernum");
let random = Math.floor(Math.random() * 100 + 1);
let shownum = document.getElementById("shownum");
let i = 0;
shownum.innerHTML = random;
function guessnumber() {
    i++;
    console.log(i);
    if (inputvalue.value == "") {
        alert("Guess the number pls ");
        exit;
    }
    else if (random == inputvalue.value) {
        document.getElementById("result").innerHTML = "Congratulation 😍😍" + "<br>" + "You did it by " + i + " Try ";
        //console.log('the try of ', i, " matched")

    }
    else if (inputvalue.value < random) {
        document.getElementById("result").innerHTML = "Guess the large number";
    }
    else if (inputvalue.value > random) {
        document.getElementById("result").innerHTML = "Guess the smaller number";
    }
    /* else {
         console.log('the try of ', i, ' is not match')
     }*/
}
document.getElementById("reset").addEventListener("click", function () {
    location.reload();
})