
/* 이 책을 조회한 회원들이 같이 본책 */

$(function() {
	function prevsub1() {
		$('.novel_slide1 li:last').prependTo('.novel_slide1 ul');
		$('.novel_slide1 ul').css({marginLeft:-158}); 
		$('.novel_slide1 ul').stop().animate({ marginLeft: 0 }, 800);
	}

	function nextsub1() {
		$('.novel_slide1 ul').stop().animate({ marginLeft: -158 }, function () {
			$('.novel_slide1 li:first').appendTo('.novel_slide1 ul');
			$('.novel_slide1 ul').css({ marginLeft: 0 });
		});
	}

	function slidesub1() {
		$('.novel_slide1 ul').stop().animate({ marginLeft: -158 }, function () {
			$('.novel_slide1 li:first').appendTo('.novel_slide1 ul');
			$('.novel_slide1 ul').css({ marginLeft: 0 });
		});
	}

	setInterval(slidesub1, 4000);

	$('.novel_prev1').click(function () {
		prevsub1();
	});

	$('.novel_next1').click(function () {
		nextsub1();
	});
});



/* 이 책을 조회한 회원들이 같이 본책 */

$(function() {
	function prevsub2() {
		$('.novel_slide2 li:last').prependTo('.novel_slide2 ul');
		$('.novel_slide2 ul').css({marginLeft:-158}); 
		$('.novel_slide2 ul').stop().animate({ marginLeft: 0 }, 800);
	}

	function nextsub2() {
		$('.novel_slide2 ul').stop().animate({ marginLeft: -158 }, function () {
			$('.novel_slide2 li:first').appendTo('.novel_slide2 ul');
			$('.novel_slide2 ul').css({ marginLeft: 0 });
		});
	}

	function slidesub2() {
		$('.novel_slide2 ul').stop().animate({ marginLeft: -158 }, function () {
			$('.novel_slide2 li:first').appendTo('.novel_slide2 ul');
			$('.novel_slide2 ul').css({ marginLeft: 0 });
		});
	}

	setInterval(slidesub2, 5000);

	$('.novel_prev2').click(function () {
		prevsub2();
	});

	$('.novel_next2').click(function () {
		nextsub2();
	});
});


/* 이 책을 구매한 회원들이 구매한책 */

$(function() {
	function prevsub3() {
		$('.novel_slide3 li:last').prependTo('.novel_slide3 ul');
		$('.novel_slide3 ul').css({marginLeft:-158}); 
		$('.novel_slide3 ul').stop().animate({ marginLeft: 0 }, 800);
	}

	function nextsub3() {
		$('.novel_slide3 ul').stop().animate({ marginLeft: -158 }, function () {
			$('.novel_slide3 li:first').appendTo('.novel_slide3 ul');
			$('.novel_slide3 ul').css({ marginLeft: 0 });
		});
	}

	function slidesub3() {
		$('.novel_slide3 ul').stop().animate({ marginLeft: -158 }, function () {
			$('.novel_slide3 li:first').appendTo('.novel_slide3 ul');
			$('.novel_slide3 ul').css({ marginLeft: 0 });
		});
	}

	setInterval(slidesub3, 6000);

	$('.novel_prev3').click(function () {
		prevsub3();
	});

	$('.novel_next3').click(function () {
		nextsub3();
	});
});