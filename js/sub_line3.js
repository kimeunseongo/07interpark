/* 책소개 펼쳐보기 */

$(function () {
   $(".text_spread1").eq(0).click(function () {
      $(".text_spread1").eq(0).hide();
      $("#intro_hide").show();
      $(".text_spread1").eq(1).show();
   });
});


/* 책소개 접어보기 */

$(function () {
   $(".text_spread1").eq(1).click(function () {
      $(".text_spread1").eq(1).hide();
      $("#intro_hide").hide();
      $(".text_spread1").eq(0).show();
   });
});

/* 출판사 서평 펼쳐보기 */

$(function () {
   $(".text_spread2").eq(0).click(function () {
      $(".text_spread2").eq(0).hide();
      $("#pub_hide").show();
      $(".text_spread2").eq(1).show();
   });
});


/* 출판사 서평 접어보기 */

$(function () {
   $(".text_spread2").eq(1).click(function () {
      $(".text_spread2").eq(1).hide();
      $("#pub_hide").hide();
      $(".text_spread2").eq(0).show();
   });
});


/* 추천사 펼쳐보기 */

$(function () {
   $(".text_spread3").eq(0).click(function () {
      $(".text_spread3").eq(0).hide();
      $("#goodline_hide").show();
      $(".text_spread3").eq(1).show();
   });
});


/* 추천사 접어보기 */

$(function () {
   $(".text_spread3").eq(1).click(function () {
      $(".text_spread3").eq(1).hide();
      $("#goodline_hide").hide();
      $(".text_spread3").eq(0).show();
   });
});


/* 목차 펼쳐보기 */

$(function () {
   $(".text_spread4").eq(0).click(function () {
      $(".text_spread4").eq(0).hide();
      $("#chapter_hide").show();
      $(".text_spread4").eq(1).show();
   });
});


/* 목차 접어보기 */

$(function () {
   $(".text_spread4").eq(1).click(function () {
      $(".text_spread4").eq(1).hide();
      $("#chapter_hide").hide();
      $(".text_spread4").eq(0).show();
   });
});



/* 본문중에서 펼쳐보기 */

$(function () {
   $(".text_spread5").eq(0).click(function () {
      $(".text_spread5").eq(0).hide();
      $("#core_hide").show();
      $(".text_spread5").eq(1).show();
   });
});


/* 본문중에서 접어보기 */

$(function () {
   $(".text_spread5").eq(1).click(function () {
      $(".text_spread5").eq(1).hide();
      $("#core_hide").hide();
      $(".text_spread5").eq(0).show();
   });
});