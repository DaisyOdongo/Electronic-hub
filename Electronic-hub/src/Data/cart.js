const productCart = {
  itemTotal() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart")).length;
      }
    }
    return 0;
  },
  addItem(item) {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        product: item,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  },
  updateCart(itemIndex, quantity) {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart[itemIndex].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  },
  getCart() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    }
    return [];
  },
  removeItem(itemIndex) {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.splice(itemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
  },
  emptyCart(cb) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
      cb();
    }
  },
};

export default productCart;
