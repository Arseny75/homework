let temp = prompt("Введите температуру");

if ( temp >= 25 && temp <= 80 ) {
    alert(`Сегодня на улице ${temp} градуса, можете надеть футболку`); 
} else if ( temp <= 24 && temp >= 15 ) {
     alert(`Сегодня на улице ${temp} градусов, можете надеть осеннею куртку`); 
} else if ( temp <= 14 && temp >= -60 ) {
    alert(`Сегодня на улице ${temp} градусов, можете надеть теплую одежду`);
} else {
    alert(`Вы ввели ${temp}, это некорректное значение`);
}