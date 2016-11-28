// set eu cookie law cookie
function euCookieAccept(){
    document.cookie = 'agree-to-cookies=yes; expires=Mon, 1 APR 2030 12:00:00 UTC';
}

// check if eu cookie law cookie exists
function euCookieCheck(){
    if (document.cookie.length == 0) {
        document.getElementById('eu-cookie-warning').style.display = 'block';
    }
}

// when the page is ready - http://youmightnotneedjquery.com/#ready
function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// control the functionality of the primary website navgation
function siteNavigation() {
}

// load scripts here
ready(function() {
    console.log('Seems to be working.');
    euCookieCheck();
    siteNavigation();
});
