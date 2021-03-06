/*! Copyright (c) 2010 Burin Asavesna (http://helloburin.com) and Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 1.0
 */

jQuery.each_slice = function( array, num, callback ) {
  var slice;
  // Clone the array to prevent manipulation
  array = array.slice();
  while ( (slice = array.splice(0, num)) && slice.length > 0 ) {
    callback.apply( slice );
  }
  return array;
};

jQuery.fn.each_slice = function( num, callback ) {
  var slice;
  // Clone the jQuery object to prevent manipulation
  var self = this.slice();
  while ( (slice = self.splice(0, num)) && slice.length > 0 ) {
    callback.apply( jQuery( slice ) );
  }
  return this;
};
