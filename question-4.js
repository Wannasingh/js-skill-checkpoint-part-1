// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100},
  { name: "Banana", price: 10, quantity: 50},
  { name: "Orange", price: 30, quantity: 60},
];
// เริ่มเขียนโค้ดตรงนี้
let minProduct = inventory[0];
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity < minProduct.quantity){
  minProduct = inventory[i]; 
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minProduct.name} ซึ่งมี ${minProduct.quantity} ชิ้น`);
