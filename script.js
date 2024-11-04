// повара
const chefs = new Map([
    ["Пицца 'Маргарита'", "Маша"],
    ["Суши 'Филадельфия'", "Ира"],
    ["Тирамису", "Настя"],
    ["Чизкейк", "Лена"]
]);

// клиентыи их заказы
const clientOrders = new Map();

// клиенты 
const alexey = { name: "Саша" };
const maria = { name: "Маша" };
const irina = { name: "Костя" };


function addOrder(client, dishes) {
    clientOrders.set(client, dishes);
}


addOrder(alexey, ["Пицца 'Маргарита'", "Тирамису"]);
addOrder(maria, ["Суши 'Филадельфия'", "Пицца 'Маргарита'"]);
addOrder(irina, ["Чизкейк"]);


clientOrders.forEach((dishes, client) => {
    console.log(`Заказы клиента ${client.name}:`);
    dishes.forEach(dish => {
        console.log(`- ${dish}, повар: ${chefs.get(dish)}`);
    });
});