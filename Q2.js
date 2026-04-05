// Number Positive, Negative ya Zero

function hidetext() {

    let nitesh = document.querySelector('#nitesh')

    nitesh.style.display = 'none'

    let num = prompt("ek number enter karo:")

    if (num >= 0) {
        alert("positive")
    }
    else if (num < 0) {
        alert("negative")
    }


}