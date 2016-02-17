$(document).ready(function(){
	$('.search-bar').keypress(function(e){
		$('.content').empty();
		if(e.which == 13) {
			var searchValue = $('.search-bar').val();
			var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=" + searchValue;

			$.ajax({url: url,
				dataType: "jsonp",
	    	success: function(response){
	        var obj = response['query']['pages'];

					for(var key in obj) {
				  	if (obj.hasOwnProperty(key)) {
							$('.content').append("<div class='link-div '><p class='text-center'><a class='link' href='" + "http://en.wikipedia.com/?curid=" + key + "'>" + obj[key].title + "</a></p></div></br>");
				  	}
					}
	    	}
			});
		return false;
		}
	});
});

