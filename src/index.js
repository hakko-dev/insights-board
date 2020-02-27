function initLayout(){
	if(window.screen.width < 1024){
		$('#sidebar').removeClass('show')
		$('#sidebar').addClass('collapse')
	}else{
		$('#sidebar').addClass('collapse show')
	}
}
$( function() {
	initLayout()
	window.onresize = function(event) {
		initLayout()
	};

	$('.time-line-chart').each(function(index, chart){
		var _this = $(chart)
		console.log(_this)
		var avg = _this.data('avg')
		var value = _this.data('value')
		var percentage = _this.data("percentage")

		_this.append('<div class="line"/>')
		_this.append('<div class="line"/>')
		_this.append('<div class="line"/>')
		_this.append('<div class="line"/>')
		_this.append('<div class="bullet" title="<b/>상위 '+percentage+'%</b><br/>선택 매장의 평균">'+value+'</div>')
		_this.append('<div class="average" title="벤치마크 평균">'+avg+'</div>')

		_this.find('.bullet').css('left', percentage+"%")

		if(percentage < 20){
			_this.addClass('very-bad')
			return
		}
		if(percentage < 40){
			_this.addClass('bad')
			return
		}
		if(percentage < 60){
			_this.addClass('normal')
			return
		}
		if(percentage < 80){
			_this.addClass('good')
			return
		}
		if(percentage < 100){
			_this.addClass('very-good')
			return
		}
	})

	$( document ).tooltip({
		content: function () {
			return $(this).attr('title');
		}
	});
	$('[data-blind="true"]').on('click', function () {
		var isOpened = $(this).data('opened')
		$(this).data('opened', !isOpened)
		$(this).find('i').text(isOpened ? "arrow_drop_down" : "arrow_drop_up")
		$(this).find('span').text(isOpened ? "펼치기" : "접기")
		$($(this).data('target')).toggle('blind');
	})

	$('.percent[data-percentage]').each(function(index, item){
		var item = $(item)
		var percentage = item.data('percentage')
		var value = item.data('value')
		var color = item.data('color') || 'rgba(0, 214, 61, 0.2)'
		item.text(value)
		if(percentage == 100){
			item.css('background', 'linear-gradient(to left, rgba(0, 0, 0, 0) ' + 0 + '%, '+color+' ' + 0 + '%, '+color+' 100%)')
		}else{
			item.css('background', 'linear-gradient(to left, rgba(0, 0, 0, 0) ' + (100 - percentage) + '%, '+color+' ' + (100 - percentage+1) + '%, '+color+' 100%)')
		}
	})

	$(".sparkline").sparkline('html',{
		type: 'bar',
		barColor: '#d0d7dd',
		fillColour: '#d0d7dd',
		disableTooltips: true,
		disableHighlight: true,
		barWidth: 3
	});
});