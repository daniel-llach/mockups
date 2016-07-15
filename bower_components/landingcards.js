// mockups
(function( $ ){
  "use strict"
  var scripts = document.getElementsByTagName("script");
  var urlBase = scripts[scripts.length-1].src;
  urlBase = urlBase.replace('mockups_es5.js', '');
  urlBase = urlBase.replace('mockups.js', '');

  // Public methods
  let api = {
    init : function(options) {
      const $el = $(this);
      $el.attr('class','mockups');
      methods.initMockups($el, options);
    },
    destroy: function(){
      // const $el = $(this);
      // $el.empty();
      // $el.removeClass('mockups');
    }
  }

  // Private methods
  let methods = {
    initMockups: function($el, options){
      
    }
  }

  // Events
  var events = {

  };

  // jquery component stuff
  $.fn.mockups = function(methodOrOptions) {
      if ( api[methodOrOptions] ) {
          return api[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ))
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
          // Default to "init"
          return api.init.apply( this, arguments )
      } else {
          $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.mockups' )
      }
  };


})( jQuery )
