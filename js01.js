var a = 20; // 재선언 O, 변수값 변경 O
let b = 200; // 재선언 x, 변수값 변경 O
const c = 2000; // 재선언 x, 변수값 변경 x
// 백틱(backtick = ``)으로 감싼 문장 => 템플릿(template)
console.log("Hello~! NodeJS~!");
console.log("var a : "+a+", let b:"+b+", const : "+c);
console.log(`var a : ${a}, let b : ${b}, const c: ${c}`);