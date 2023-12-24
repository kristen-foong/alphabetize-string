function alphabetizeString(str) {
    let sortedStr = str.split('').sort().join('');
    return sortedStr;
}

function customAlphaString(str, alpha) {
    let sortedStr = str.split('').sort((a,b) => {
        return alpha.indexOf(a) - alpha.indexOf(b);
    }).join('');
    return sortedStr;
}

function alphabetize() {
    let str = document.getElementById("inputString").value;
    str = str.toLowerCase();
    let customAlpha = document.getElementById("customAlpha").value;
    customAlpha = customAlpha.toLowerCase();
    let alphabetized = "";

    if(customAlpha.length == 0) {
        console.log('no alpha provided');
        alphabetized = alphabetizeString(str);
    } else if (customAlpha.length == 26) {
        alphabetized = customAlphaString(str, customAlpha);
    } else {
        alphabetized = "Error: custom alphabet is not 26 characters long";
    }

    console.log(alphabetized);
    document.getElementById("alphabetized").innerText = alphabetized;
}