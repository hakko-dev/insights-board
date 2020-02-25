$( function() {
	$( document ).tooltip({
		content: function () {
			return $(this).attr('title');
		}
	});
} );