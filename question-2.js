// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
console.log(inventory);
inventory.push({ name: "Orage", price: 20, quantity: 300});
console.log(inventory);
let result = 0;
let sum = 0;
let multiply = [];
for (let i = 0; i <inventory.length; i++){
  multiply[i] = inventory[i].price * inventory[i].quantity;
  sum += multiply[i]
}
console.log(multiply)
console.log(sum);
