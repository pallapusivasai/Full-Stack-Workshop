function createShoppingCart() {
  let items = [];
  let discountPercent = 0;

  return {
    // Add item or increase quantity if item already exists
    addItem(product) {
      const existing = items.find(item => item.id === product.id);

      if (existing) {
        existing.quantity += product.quantity;
        console.log(
          `Updated ${existing.name} quantity to ${existing.quantity}`
        );
      } else {
        items.push({ ...product });
        console.log(`Added ${product.name} to cart`);
      }
    },

    // Remove item by id
    removeItem(id) {
      items = items.filter(item => item.id !== id);
      console.log(`Removed item with id ${id}`);
    },

    // Update quantity for a given item
    updateQuantity(id, quantity) {
      const item = items.find(item => item.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
        console.log(`Set ${item.name} quantity to ${quantity}`);
      }
    },

    // Return all cart items
    getItems() {
      return items;
    },

    // Get total price after discount
    getTotal() {
      const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const discount = total * (discountPercent / 100);
      return +(total - discount).toFixed(2);
    },

    // Get total quantity of items
    getItemCount() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },

    // Check if cart is empty
    isEmpty() {
      return items.length === 0;
    },

    // Apply discount percentage
    applyDiscount(code, percent) {
      if (percent > 0 && percent <= 100) {
        discountPercent = percent;
        console.log(`Applied discount code "${code}" (${percent}%)`);
      }
    },

    // Clear cart
    clear() {
      items = [];
      discountPercent = 0;
      console.log(`Cart cleared`);
    }
  };
}

/* ===== Example Usage ===== */

const cart = createShoppingCart();

cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });

console.log(`Items in cart:`, cart.getItems());

cart.updateQuantity(1, 3);
cart.removeItem(2);

console.log(`Total price: $${cart.getTotal()}`);
console.log(`Item count: ${cart.getItemCount()}`);
console.log(`Is cart empty? ${cart.isEmpty()}`);

cart.applyDiscount('SAVE10', 10);
console.log(`Total after discount: $${cart.getTotal()}`);

cart.clear();
console.log(`Is cart empty? ${cart.isEmpty()}`);
