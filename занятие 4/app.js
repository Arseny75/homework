let people = [ "Tom", 2, 3, 4, 5, 6, 7, 8 ];
let array = [ [ 1, 2, 3], [4, 5, 6] ];
let count = 4;
let arrayLenght = array[1].length


if (arrayLenght === count ) {
console.log(`длина массива верна`);
} else if ( arrayLenght > count ) {
let.result = arrayLenght - count;
console.log(`длина вашего массива: ${arrayLenght}, необходимая длина: ${count}. Удалите из массива ${result} элемента(ов)`);
} else if ( arrayLenght < count) {
    let result = count - arrayLenght;
    console.log(`длина вашего массива: ${arrayLenght}, необходимая длина: ${count}. Удалите из массива ${result} элемента(ов)`);
};
