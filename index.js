(function(){

  'use strict';

  var download = document.getElementById('js-download');

  download.addEventListener('click', function() {
    var encoder, text, blob;

    encoder = new TextEncoder('utf-8');

    // UTF-16LE
    text = encoder.encode('\u30B8\u30E3\u30D0');

    blob = new Blob([text], {
      type: 'text/plain'
    });

    download.href = URL.createObjectURL(blob);
  }, false);

}());
