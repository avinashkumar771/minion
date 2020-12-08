var getButton = document.querySelector("#btn-refrence");
var txtValue = document.querySelector(".txt-area")
var outputValue = document.querySelector(".outputDiv")
var url = "https://api.funtranslations.com/translate/minion.json"
function translationUrl(textHandler){
    return url + "?"+"text="+textHandler;
}
function errorHandler(error)
{
    console.log("error occured",error)
    alert("errror occured");
}
function buttnClicked()  {
    var textHandler = txtValue.value;
    fetch(translationUrl(textHandler))
    .then(function responseHandler(response){
        return response.json()
    })
    .then(json => {
        var translatedText = json.contents.translated;
        outputValue.innerText = translatedText; // output
       })
    .catch(errorHandler)
}

getButton.addEventListener("click",buttnClicked);


