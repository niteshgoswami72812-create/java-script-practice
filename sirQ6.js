function convert() {

    let text =
        document.querySelector("#input").value.toLowerCase();
    let reversedText = text.split('').reverse().join('')

    if (text === reversedText && text !== "") {

        document.querySelector("#output").innerHTML = "yes it's a palindrome!"
    } else {
        document.querySelector("#output").innerHTML = "NO it's not pailndrome"
    }
}