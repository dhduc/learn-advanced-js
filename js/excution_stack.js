function b() {
    var str;
}

function a() {
    b();
    var str = 'string';
}

var str = 'str';
a();

var text = 'outside';
function show(){
    console.log(text);
    var text = 'inside';
};
show();