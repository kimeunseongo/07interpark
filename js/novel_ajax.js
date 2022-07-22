/* 소설분야에서 많은 회원이 구매한책 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"소설" },
	headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".novel_slide1 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".novel_slide1 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});


/* 이 책을 조회한 회원들이 같이 본책 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"프레드릭 배크만" },
	headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".novel_slide2 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".novel_slide2 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});



/* 이 책을 구매한 회원들이 구매한책 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"감성" },
	headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".novel_slide3 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".novel_slide3 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});

