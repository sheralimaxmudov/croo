var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var demo1 = document.getElementById('demo1')
var demo2 = document.getElementById('demo2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var demo3 = document.getElementById('demo3')
var demo4 = document.getElementById('demo4')


var tug1 = document.getElementById('tug1')
var tug2 = document.getElementById('tug2')
var tug3 = document.getElementById('tug3')
var tug4 = document.getElementById('tug4')






var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var b4 = document.getElementById('b4')
var b5 = document.getElementById('b5')
var b6 = document.getElementById('b6')
var b7 = document.getElementById('b7')
var b8 = document.getElementById('b8')
var b9 = document.getElementById('b9')


var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')
var a3 = document.getElementById('a3')
var a4 = document.getElementById('a4')
var a5 = document.getElementById('a5')
var a6 = document.getElementById('a6')
var a7 = document.getElementById('a7')
var a8 = document.getElementById('a8')
var a9 = document.getElementById('a9')





function tugg2() {
    b1.style.display = 'block';
    b2.style.display = 'none';
    b3.style.display = 'none';
    b4.style.display = 'block';
    b5.style.display = 'none';
    b6.style.display = 'none';
    b7.style.display = 'none';
    b8.style.display = 'block';
    b9.style.display = 'none';

    a1.style.marginTop= '10px'
    a1.style.marginLeft= '30px'
    a4.style.marginLeft= '440px'
    a4.style.marginTop= '-389px'
    a8.style.marginTop= '-389px'
    a8.style.marginLeft = '850px'

}
function tugg3() {
    b1.style.display = 'none';
    b2.style.display = 'none';
    b3.style.display = 'block';
    b4.style.display = 'none';
    b5.style.display = 'none';
    b6.style.display = 'block';
    b7.style.display = 'block';
    b8.style.display = 'none';
    b9.style.display = 'none';

a3.style.marginTop = '20px'
a3.style.marginLeft = '80px'
a6.style.marginTop = '20px'
a7.style.marginTop = '20px'

}

function tugg4() {
    b1.style.display = 'none';
    b2.style.display = 'block';
    b3.style.display = 'none';
    b4.style.display = 'none';
    b5.style.display = 'block';
    b6.style.display = 'none';
    b7.style.display = 'none';
    b8.style.display = 'none';
    b9.style.display = 'block';

a5.style.marginTop = '20px'
a2.style.marginLeft = '78px'
a2.style.marginTop = '20px'
a9.style.marginTop = '20px'

}
function tugg1() {
    b1.style.display = ' inline-table';
    b2.style.display = ' inline-table';
    b3.style.display = ' inline-table';
    b4.style.display = ' inline-table';
    b5.style.display = 'inline-table';
    b5.style.display = 'inline-table';
    b6.style.display = 'inline-table';
    b7.style.display = 'inline-table';
    b8.style.display = 'inline-table';
    b9.style.display = 'inline-table';

a1.style.marginRight= '-575px'
a4.style.marginTop= '30px'
a2.style.marginTop = '-390px'
a2.style.marginLeft = '485px'
a4.style.marginLeft= '75px'
a1.style.marginLeft= '75px'
a7.style.marginTop= '510px'
a8.style.marginTop= '420px'
a8.style.marginLeft= '900px'
a3.style.marginBottom= '10px'
a3.style.marginLeft= '900px'
a9.style.marginTop= '160px'
}




tug1.addEventListener('click', tugg1)
tug2.addEventListener('click', tugg2)
tug3.addEventListener('click', tugg3)
tug4.addEventListener('click', tugg4)





function fun1() {
    demo1.style.display = '1';
    demo1.style.display = 'flex';

    demo2.style.display = 'none';
    demo3.style.display = 'none';
    demo4.style.display = 'none';
}
function fun2() {
    demo2.style.display = '1';
    demo2.style.display = 'flex';
    demo2.style.opacity = '1';
    demo1.style.display = 'none';
    demo3.style.display = 'none';
    demo4.style.display = 'none';

}
function fun3() {
    demo3.style.display = '1';
    demo3.style.display = 'flex';
    demo3.style.opacity = '1';
    demo1.style.display = 'none';
    demo2.style.display = 'none';
    demo4.style.display = 'none';
}
function fun4() {
    demo4.style.display = '1';
    demo4.style.display = 'flex';
    demo4.style.opacity = '1';
    demo1.style.display = 'none';
    demo2.style.display = 'none';
    demo3.style.display = 'none';
}


btn1.addEventListener('click', fun1)
btn2.addEventListener('click', fun2)
btn3.addEventListener('click', fun3)
btn4.addEventListener('click', fun4)


