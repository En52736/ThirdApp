$('#button').click(function(){
  $('#slideout').toggleClass('on');
});
$('#button1').click(function(){
  $('#slideout').toggleClass('on');
});

var myApp = new Framework7();
 
    var $$ = Dom7;
 
    $$('.open-right-panel').on('click', function (e) {
        // 'right' position to open Right panel
        myApp.openPanel('right');
    });
 
    $$('.panel-close').on('click', function (e) {
        myApp.closePanel();
    });

