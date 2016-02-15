$(document).ready(function(){
	var arr = [];
	$('.search-bar').keypress(function(e){
		if(e.which == 13) {
			var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=" + "";
			$.ajax({url: url,
				dataType: "jsonp",
	    	success: function(response){
	        console.log(response['query']['pages']);
	    	}
			});
		return false;
		}//
	});
});