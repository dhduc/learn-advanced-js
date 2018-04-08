// Hoisting

hello();
console.log(homepage);

var homepage = 'homepage';
function hello() {
    console.log('hello');
}