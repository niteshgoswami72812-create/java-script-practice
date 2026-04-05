function convert() {

    let text =
        document.querySelector("#input").value;

    let vowels = text.match(/[aeiou]/gi)

    let result = vowels ? vowels.length : 0;

    document.querySelector("#output").innerHTML = "Total vowels: " + result;
}