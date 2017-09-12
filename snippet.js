(function() {
	
	var favicon = 'qa-favicon'; // <-- change this as needed

	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://raw.githubusercontent.com/starlocke/favicons/master/'+favicon+'.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
