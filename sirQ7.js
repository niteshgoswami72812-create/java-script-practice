function convert() {


    let text =
        document.querySelector("#input").value
    let result = "";


        for  (let i = 0;  i < text.length; i++) {

            if (text[i] !== " ") {
                result += text[i];
                
            }
            
        }


    document.querySelector("#output").innerHTML = result;

}
    

    
