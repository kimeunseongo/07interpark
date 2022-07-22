
/*책소개*/


$(function(){

  $.get("./sub_txt/introduce.txt", function(data) {

    $("#introduce").html(data);

  })     



});


/*책소개 펼치기*/

$(function(){

  $.get("./sub_txt/introduce2.txt", function(data) {

    $("#intro_hide").html(data);

  })     



});


/*출판사 */

$(function(){

  $.get("./sub_txt/publisher.txt", function(data) {

    $("#publisher").html(data);

  })     



});


/*출판사 펼치기*/

$(function(){

  $.get("./sub_txt/publisher2.txt", function(data) {

    $("#pub_hide").html(data);

  })     



});





/*추천사 */

$(function(){

  $.get("./sub_txt/goodline.txt", function(data) {

    $("#goodline").html(data);

  })     



});



/*추천사 펼치기*/

$(function(){

  $.get("./sub_txt/goodline2.txt", function(data) {

    $("#goodline_hide").html(data);

  })     



});


/*목차 */

$(function(){

  $.get("./sub_txt/chapter.txt", function(data) {

    $("#chapter").html(data);

  })     



});



/*목차 펼치기*/

$(function(){

  $.get("./sub_txt/chapter2.txt", function(data) {

    $("#chapter_hide").html(data);

  })     



});



/*본문중에서 */

$(function(){

  $.get("./sub_txt/core.txt", function(data) {

    $("#core").html(data);

  })     



});



/*본문중에서 펼치기*/

$(function(){

  $.get("./sub_txt/core2.txt", function(data) {

    $("#core_hide").html(data);

  })     



});


