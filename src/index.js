$( function() {
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
});