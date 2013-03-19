/*
 * Modified by Jasper Palfree (wellcaffeinated.net)
 *
 * Originally: jQuery Tiny Pub/Sub
 * https://github.com/cowboy/jquery-tiny-pubsub
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 */

(function($, o) {

  o = $({});
  
  $.each({
      on: 'subscribe',
      off: 'unsubscribe',
      trigger: 'publish'
  }, function(k, v){
      $[v] = $.proxy(o[k], o);
  });

}(jQuery));
