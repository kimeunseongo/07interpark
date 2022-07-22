/* 저자의 다른책 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"프레드릭" },
	headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var author1=str.substring(0,28);

		$(".author_b1 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".author_b1 > ul > li").eq(i).append('<p><a href="#">' + author1 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');



	}

});



/* 역자의 다른책 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"연극소설" },
	headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var author1=str.substring(0,28);

		$(".author_b2 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".author_b2 > ul > li").eq(i).append('<p><a href="#">' + author1 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');



	}

});



