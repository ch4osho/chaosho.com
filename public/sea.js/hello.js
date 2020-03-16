// define(function(require, exports, module){
//     // var $ = require('jquery');

//     // exports.sayHello = function(){
//     //     $('#hello').toggle('slow')
//     // }

//     module.exports = {
//         name: 'hello',
//         sayHello(){
//             console.log(123123123)
//         }
//     }
// })


define(function(require, exports, module) {
    var $ = require('jquery');
  
    exports.sayHello = function() {
      $('#hello').toggle('slow');
    };
  });