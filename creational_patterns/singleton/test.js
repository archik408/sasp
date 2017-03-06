const Singleton = require('./singleton');

const a = new Singleton();
const b = new Singleton();

console.assert(a, b);
console.log(a.getData(), b.getData());

// Old style
// var Singleton = (function(){
//
//     var instance = null;
//     var _private_var = 1;
//
//     function Singleton() {
//         if (!instance) {
//             instance = this;
//         }
//         else {
//             return instance;
//         }
//
//         this.public_var = 1;
//     }
//
//     Singleton.prototype.getPrivateVar = function () {
//         return _private_var;
//     };
//
//     Singleton.prototype.getPublicVar = function () {
//         return this.public_var;
//     };
//
// })();
//
// var a = new Singleton();
// var b = new Singleton();
//
