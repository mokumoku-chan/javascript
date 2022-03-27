let hello = "Hello World"
let int1 = 1;
let str1 = 'JavaScriptを覚えよう'


let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がリンゴより安い');
} else if(orange == apple) {
  alert('みかんとリンゴが同じ値段');
} else{
  alert('みかんの値段がリンゴより高い');
}

let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');