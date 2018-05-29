$(document).ready(function() {
  $('span.pull-right').each(function(index) {
  var $parentParagraph = $(this).parent('p');
  $parentParagraph.css('position', 'relative');
  $(this).clone()
    .addClass('pulled-right')
    .prependTo($parentParagraph);
  });
$('span.pull-left').each(function(index) {
  var $parentParagraph = $(this).parent('p');
  $parentParagraph.css('position', 'relative');
  $(this).clone()
    .addClass('pulled-left')
    .prependTo($parentParagraph);
  });




});
