(function() {

    console.log("bookmarklet starting");

    var uri1 = $('#cimg1').children('img').attr("src");
    var result1 = uri1.split("/").pop().replace(".png","");

    var uri2 = $('#cimg2').children('img').attr("src");
    var result2 = uri2.split("/").pop().replace(".png","");

    var uri3 = $('#cimg3').children('img').attr("src");
    var result3 = uri3.split("/").pop().replace(".png","");

    var uri4 = $('#cimg4').children('img').attr("src");
    var result4 = uri4.split("/").pop().replace(".png","");

    $('[name="capcha"]').val(result1+result2+result3+result4);
    dosub();
    console.log(result1+result2+result3+result4);
  })();