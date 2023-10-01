let a=33;
//console.log(typeof a);
//number
//console.log(typeof(a));
//alternative way


let b="33ff";
//console.log(typeof b);
//nan

let c=Number("33");//type conversation
//console.log(typeof c);
//number

let d=null;
//null=0
//undefined=NaN, 
//true=1, false=0
//console.log(typeof d);//Object

let e=String(33);
//console.log(typeof e);


// Notes
/*
1.33=number
2."33"=String
3.Number("33")=number, String(33)=number
4."33ff"=NaN
5.null=Object,value=0
6.undefined=NaN
7.true=1, false=0
8."" = false
9."csr" = true
*/


//                 Operations

let v=3;
let mv =-v;
console.log(mv);

console.log(2*2);//4
/*
1.2*2=4
2.2**2=2^4=16
3.2+2=4
4.2%2=0
*/

//ToPrimitive
/**
 * 1.console.log("1"+2)=12
 * when we use string("") as first place in console
 * then it converts all elements to string
 * 
 * 2.console.log(1+"2"+2) 
 *-122

 * number 1 after string "2" after all will be converted to string
 * 3.console.log(1+2+"2")
 * -32
 * 
 * 4.console.log(+true)
 * -1
 * console.log(true+)
 * err
 * 
 * 5.console.log("+"")
 * -1
 * console.log(""+)
 * err
 */


