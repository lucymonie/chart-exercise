$('.toggleChart').click(function() {
  if ($('.chart1').hasClass('current')) {
    $('.chart1').removeClass('current').hide();
    $('.chart2').addClass('current').show();
  } else {
    $('.chart1').addClass('current').show();
    $('.chart2').removeClass('current').hide();
  }
});
