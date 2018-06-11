function palindrome() {
    var str = prompt("Check voor palindroom", "level");

    var lowercase = (/[^A-Za-z0-9]/g);
    var toLowercase = str.toLowerCase().replace(lowercase, "");

    var strTurn = toLowercase.split("").reverse().join("");
    return strTurn === toLowercase;


}

    function reload() {
        location.reload();
    }


    document.getElementById("demo").innerHTML = palindrome();