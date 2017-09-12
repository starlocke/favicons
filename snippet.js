/**********
This is a snippet for JavaScript-injection extensions in Web Browsers.

Chrome Plugin, called "Custom JavaScript for Websites":
- https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en

Firefox Plugin, called "Custom Style Script"
- https://addons.mozilla.org/en-US/firefox/user/MilenMonrov/?src=api
***********/
(function() {
    var favicon = 'qa-favicon'; // <-- change this as needed

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://raw.githubusercontent.com/starlocke/favicons/master/'+favicon+'.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
