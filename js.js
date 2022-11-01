let add = document.querySelector('.mimateba');
let remove = document.querySelector('.gamokleba');

let int = document.querySelector('.number');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;
})

remove.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
})