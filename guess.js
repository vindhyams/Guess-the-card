'use strict';
//selecting the required items
const message = document.querySelector('.message');
const but1 = document.querySelector('.show1');
const but2 = document.querySelector('.show2');
const but3 = document.querySelector('.show3');
const result = document.querySelector('.resultmain');
const wrong = document.querySelector('.wrongmain');
const close = document.querySelector('.close');

//generating the randam number
const rand = function () {
  const num = Math.trunc(Math.random() * 3) + 1;
  return num;
};
var res = rand();
//console.log(res);
result.classList.add('hidden');
wrong.classList.add('hidden');
const reset = function () {
  result.classList.add('hidden');
  wrong.classList.add('hidden');
  res = rand();
  //console.log(res);
};

but1.addEventListener('click', function () {
  if (res == 1) {
    result.classList.remove('hidden');
    result.classList.add('result');
  } else {
    wrong.classList.remove('hidden');
    wrong.classList.add('wrong');
  }
});

but2.addEventListener('click', function () {
  if (res == 2) {
    result.classList.remove('hidden');
    result.classList.add('result');
  } else {
    wrong.classList.remove('hidden');
    wrong.classList.add('wrong');
  }
});
but3.addEventListener('click', function () {
  if (res == 3) {
    result.classList.remove('hidden');
    result.classList.add('result');
  } else {
    wrong.classList.remove('hidden');
    wrong.classList.add('wrong');
  }
});

close.addEventListener('click', reset);
