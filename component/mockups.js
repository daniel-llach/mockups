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
      $el.addClass('mockups');
      methods.initMockups($el, options);
    },
    destroy: function(){

    }
  }

  // Private methods
  let methods = {
    initMockups: function($el, options){
      console.log("options: ", options);

      // get plugin template
      let mockup = methods.getTemplate('mockups.html');
      mockup.then((res) => {
        $el.append( res({
          type: options.type
        }) ).addClass('image');
      }).then(() => {
        // get device image and put into its container
        methods.setDevice($el, options);
      }).then(() => {
        // put user image into device
        let $userapp = $el.find('.userapp');
        methods.putImage($userapp, options);
      })

    },
    putImage: function($userapp, options){
      return new Promise(function(resolve, reject){
        if(options.adjust){
          //TODO: a smart adjust process
          console.info("TODO: a smart adjust process");
        }else{
          $userapp.append('<img src="' + options.img + '">')
        }
        resolve();
      });
    },
    setDevice: function($el, options){
      let $device = $el.find('.device');

      return new Promise(function(resolve, reject){
        $device.append('<img src="' + urlBase + 'img/' + options.type + '.png">')
        if(options.reflection){
          $el.find('.reflection').append('<img src="' + urlBase + 'img/' + options.type + '_reflection.png">')
        }
        resolve();
      });
    },
    getTemplate: function(name){
      return new Promise(function(resolve, reject){
          $.get(urlBase + "templates/" + name, function( result ) {
            resolve(_.template(result));
          }).fail(function() {
            reject('no template')
          });
        }
      );
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
