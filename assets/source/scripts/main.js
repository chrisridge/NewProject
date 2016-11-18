// 
function EuCookieAccept(){
    console.log("cookie set");
    var CurrentDateTime = "date";
    document.cookie = "agree-to-cookies=yes";
}

// check if eu cookie law cookie exists
function EuCookieCheck(){
    if (document.cookie.length == 0) {
        console.log("searching for eu cookie law cookie");
        document.getElementById("eu-cookie-warning").style.display = 'block';
    }
}
// when the page is ready - http://youmightnotneedjquery.com/#ready
function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
        EuCookieCheck();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function() {
    console.log("Seems to be working.");
});
