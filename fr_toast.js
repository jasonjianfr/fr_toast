/*
 * jQuery Plugin Research
 * Team Members: Jason, Raul, Joe, Caspar, Tim, Leon, Hank, Jared
 * ver 1.0.0
 * License: WTFPL
*/
(function( $ ){
	$.frToast = function(option) {
		var _defaultSettings = {
			icon: '',
			title: '',
			context: '',
			bgColor: '#000000',
			fontColor: '#FFFFFF',
			position: 'center',
			init: function() {},
			before: function() {},
			after: function() {},
			finish: function() {}
		};
		
		var _settings = $.extend(_defaultSettings, option);
        
		var toastView = '<div>'
							+ '<div class="fr_toast_zone">'
								+ '<div class="fr_toast_wraper">'
									+ '<div class="fr_toast_icon fr_toast_icon_image_vertical_align">'
									+ '</div>'
									+ '<div class="fr_toast_text_zone">'
										+ '<div class="fr_toast_text fr_toast_text_title">'
										+ '</div>'
										+ '<div class="fr_toast_text fr_toast_text_context">'
										+ '</div>'
									+ '</div>'
								+ '</div>'
							+ '</div>';
                        + '</div>';
		
        var $toastView = $(toastView);
        var today = new Date();
    	var timeLong = today.getTime();
        var id = 'fr_toast_' + timeLong;
        
        //init
		_settings.init.call(this);
        
        //$toastView.find('.fr_toast_zone').attr('id', id);
        $('.fr_toast_zone', $toastView).attr('id', id);//defferent way to find the specified sub-element, same result as above.
        
        $toastView.find('.fr_toast_icon').addClass(_settings.icon);
        $toastView.find('.fr_toast_text_title').text(_settings.title);
        $toastView.find('.fr_toast_text_context').text(_settings.context);
        $toastView.find('.fr_toast_zone').css('background-color', _settings.bgColor);
        $toastView.find('.fr_toast_zone').css('color', _settings.fontColor);
        
        //position
        setPosition($toastView, _settings.position)
        
        var htmlBox = $toastView.html();
		$('body').append(htmlBox);
		
		//before toast
		_settings.before.call(this);
		
		//toast
		$('#' + id)
        .fadeIn()
        .delay(3000)
        .fadeOut('slow', function() {
			//success
			_settings.finish.call(this,_settings);
            
        	$(this).remove();
        });
		
		//after toast
		_settings.after.call(this);
	}
    
    function setPosition($toastView, position) {
    	var basePosition = '10px';
    	var userDefine = false;
    	if (position.indexOf('center') != -1) {
        	$toastView.find('.fr_toast_zone').addClass('fr_toast_center');
            userDefine = true;
		} else {
            if (position.indexOf('left') != -1) {
                $toastView.find('.fr_toast_zone').css('left', basePosition);
                if (position == 'left') {
                	$toastView.find('.fr_toast_zone').css('top', '50%');
                    $toastView.find('.fr_toast_zone').css('transform', 'translate(0%, -50%)');
                }
                userDefine = true;
            }

            if (position.indexOf('right') != -1 && position.indexOf('left') == -1) {
                $toastView.find('.fr_toast_zone').css('right', basePosition);
                if (position == 'right') {
                	$toastView.find('.fr_toast_zone').css('top', '50%');
                    $toastView.find('.fr_toast_zone').css('transform', 'translate(0%, -50%)');
                }
                userDefine = true;
            }
            
            if (position.indexOf('top') != -1) {
                $toastView.find('.fr_toast_zone').css('top', basePosition);
                if (position == 'top') {
                	$toastView.find('.fr_toast_zone').css('left', '50%');
                    $toastView.find('.fr_toast_zone').css('transform', 'translate(-50%, 0%)');
                }
                userDefine = true;
            }

            if (position.indexOf('bottom') != -1 && position.indexOf('top') == -1) {
                $toastView.find('.fr_toast_zone').css('bottom', basePosition);
                if (position == 'bottom') {
                	$toastView.find('.fr_toast_zone').css('left', '50%');
                    $toastView.find('.fr_toast_zone').css('transform', 'translate(-50%, 0%)');
                }
                userDefine = true;
            }
        }
        
        if (!userDefine) {
        	$toastView.find('.fr_toast_zone').addClass('fr_toast_center');
        }
    }
	
})(jQuery);