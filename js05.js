// Arrow Function(화살표 함수) => 자바의 람다식과 같으며, ES6(2015)

var fnc1 = () => console.log("콘솔에 출력합니다.");         // 매개변수 X, 반환 X
var fnc2 = (a, b) => console.log("계산 결과 : "+(a+b));    // 매개변수 O, 반환 X
var fnc3 = () => 27*27;                                   // 매개변수 X, 반환 O
var fnc4 = (a, b) => a*10+b*9;                            // 매개변수 O, 반환 O
var arr = [75, 90, 80, 65];
var fnc5 = arr.map(value => value*value);

fnc1();
fnc2(20, 12);
console.log("결과3 : "+fnc3());          // var data3 = fnc3();