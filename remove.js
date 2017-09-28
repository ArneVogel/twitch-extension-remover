//Thanks to Marco Bonelli https://stackoverflow.com/a/28046281/8156794
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('remover');
    button.addEventListener('click', function() {
		chrome.tabs.executeScript({
			code: 'var stream_overlay = document.querySelector("div.extension-container"); stream_overlay.parentElement.removeChild(stream_overlay);var settings_button = document.getElementById("js-extension-settings");settings_button.parentNode.removeChild(settings_button);'
		})
		
        
    });
});