// User se ek number lo aur check karo ki wo even hai ya odd (alert me result dikhana).






function hidetext() {

    let nitesh = document.querySelector('#nitesh')

    nitesh.style.display = 'none'



    let num = prompt("ek number enter karo:")

    if (num % 2 == 0) {
        alert("Even")
    }
    else if (num < 0) {
        alert("ple enter valid number")
    }
    else {
        alert("odd")
    }

}










