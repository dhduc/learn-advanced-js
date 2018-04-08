// var text = 'outside';
// function show(){
//     console.log(text);
//     var text = 'inside';
// };
// show();

function b() {
  console.log(text);
}

function a() {
  var text = "in a";
  b();
}

var text = "in gloal";
a();
