(function ($, Drupal, window, document, undefined) {
  // Disable right click.
  var message="";
  function clickIE() {if (document.all) {(message);return false;}}
  function clickNS(e) {if
  (document.layers||(document.getElementById&&!document.all)) {
    if (e.which==2) {
      (message);
      return false;}}}
  if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS;
  }else{
    document.onmouseup=clickNS;
    document.oncontextmenu=clickIE;
  }
  document.oncontextmenu=new Function("return false");

  if (typeof document.onselectstart!="undefined") {
    document.onselectstart=new Function ("return false");
  }
  else{
    document.onmousedown=new Function ("return false");
    document.onmouseup=new Function ("return true");
  }

  // Replace text when copying.
  var target = document;
  target.oncopy = function(event) {
    var clipboardData = (event || window.event).clipboardData;
    if (clipboardData) {
      clipboardData.setData('Text', 'All rights reserved.');
    } else {
      alert('All rights reserved.');
    }
    return false;
  }
})(jQuery, Drupal, this, this.document);