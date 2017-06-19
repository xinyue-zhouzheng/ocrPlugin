if (typeof jQuery === 'undefined') {
  throw new Error('ocrPlugin\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('ocrPlugin\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);


+function ($) {
  'use strict';
  
	$.fn.ocrPlugin = function(options){
		var defaultOptions = {
			"x-app-key": "",
			"x-sdk-version": "5.1",
			"x-request-date": new Date().toLocaleDateString(),
			"x-task-config": "capkey=ocr.cloud.template",
			"x-session-key": "",
			"x-udid": "101:1234567890"
		}

		var setting = $.extend(defaultOptions, options)

		return this;
	}

	$.fn.ocrPlugin.request = $.ajax({
		method: "POST",
		url: "http://",
		data:

	})

	$.fn.ocrPlugin.imageCapture = function(){

	}

	$.fn.ocrPlugin.ocrRecog = function(){

	}

}(jQuery);
