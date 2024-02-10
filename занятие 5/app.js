const person = {
  name: "Tom",
    age: 27,
    massa: 72.3,
    phone: "iPhone 15",
    hobbies: ["Плавать", "Рисовать", "Читать", "Смотреть кино"],
    contacts: {
        number: 868695495,
        email: ["tom@gemail.ru", "tom@gemail.ru"],
        social: "www.vk.com"
    }
};

console.log(person["name"], person["age"]);
console.log(person["hobbies"][1]);
console.log(person["contacts"]["email"][0]);

