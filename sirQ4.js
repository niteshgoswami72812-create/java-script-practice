function convert() {

   let text =
      document.querySelector("#input").value
   let result = text.split("").reverse().join(" ")

   document.querySelector("#output").innerHTML = result


}