const store = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450,
      },
      price: 600,
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20,
      },
      price: 1000,
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0,
      },
      price: 1400,
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100,
      },
      price: 600,
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300,
      },
      price: 600,
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80,
      },
      price: 2400,
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200,
      },
      price: 1800,
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15,
      },
      price: 2300,
    },
  ],
};

// Each section needs it's own for loop
// DO NOT change any of the code
/* 
--Question about the line above: 
when we have to asign an existing object to a new object shouldn't we have to use let instead of const?
*/
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}

// ----- Section -----

// A list of products that cost more than £1000
const expensiveProducts = [];

for (let i = 0; i < store.products.length; i++) {
  // get the product object
  const product = store.products[i];
  // get product price
  const price = product.price;
  // if product price is more than 1000, add product object to expensiveProduct[]
  if (price > 1000) {
    expensiveProducts.push(product);
  }
}
console.log("expensiveProducts: ", expensiveProducts);

// ----- Section -----

// A list of products that cost less than £1000
const cheapProducts = [];

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get product price
  const price = product.price;
  // if product price is less than 1000, add product object to cheapProduct[]
  if (price < 1000) {
    cheapProducts.push(product);
  }
}
console.log("cheapProducts: ", cheapProducts);

// ----- Section -----

// A list of products that have an incoming delivery
const productsThatNeedToBeReceived = [];

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get incomingDelivery from product stock
  const incomingDelivery = store.products[i].stock.incomingDelivery;
  // if incomingDelivery value is true, then add product object to productsThatNeedToBeReceived[]
  if (incomingDelivery === true) {
    productsThatNeedToBeReceived.push(product);
  }
}
console.log("productsThatNeedToBeReceived: ", productsThatNeedToBeReceived);
// ----- Section -----

// A list of products that are out of stock
const outOfStockProducts = [];

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get quantity from product stock
  const quantity = store.products[i].stock.quantity;
  // if the quantity is equal to 0, then add product to outOfStockProducts[]
  if (quantity === 0) {
    outOfStockProducts.push(product);
  }
}
console.log("outOfStockProducts: ", outOfStockProducts);

// ----- Section -----

// A list of products that have a quantity that is less than 100 and have no incoming delivery
const productsThatNeedToBeOrdered = [];

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get quantity from product stock
  const quantity = store.products[i].stock.quantity;
  // get incomingDelivery from product stock
  const incomingDelivery = store.products[i].stock.incomingDelivery;
  // if quantity is less than 100 && incomingDelivery is false, then add product to productsThatNeedToBeOrdered[]
  if (quantity < 100 && incomingDelivery === false) {
    productsThatNeedToBeOrdered.push(product);
  }
}
console.log("productsThatNeedToBeOrdered: ", productsThatNeedToBeOrdered);

// ----- Section -----

// A list of products of the type "tablet"
const tablets = [];

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get product type
  const type = store.products[i].type;
  // if product type is 'tablet', then add product to tablets[]
  if (type === "tablet") {
    tablets.push(product);
  }
}
console.log("tablets: ", tablets);
// ----- Section -----

// A list of products of the type "computer"
const computers = [];

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get product type
  const type = store.products[i].type;
  // if product type is 'computer', then add product to the computers[]
  if (type === "computer") {
    computers.push(product);
  }
}
console.log("computers: ", computers);

// ----- Section -----

// An object that represents an "iMac"
let iMac = null;

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get product name
  const name = store.products[i].name;
  // if product name is 'iMac', set it to iMac object
  if (name === "iMac") {
    iMac = product;
  }
}
console.log("iMac object: ", iMac);

// ----- Section -----

// An object that represents an "iPhone 12"
let iPhone12 = null;

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get product name
  const name = store.products[i].name;
  // if the name of product is iPhone, set it to iPhone12 object
  if (name === "iPhone 12") {
    iPhone12 = product;
  }
}
console.log("iPhone12 object: ", iPhone12);

// ----- Section -----

// An object that represents an "iPad mini"
let iPadMini = null;

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get product name
  const name = store.products[i].name;
  // if the name of the product is "iPad Mini", set it to iPadMini object
  if (name === "iPad mini") {
    iPadMini = product;
  }
}
console.log("iPadMini object: ", iPadMini);

// ----- CHALLENGE -----

// A list of unique product types
const productTypes = [];

for (let i = 0; i < store.products.length; i++) {
  // get product object
  const product = store.products[i];
  // get product type
  const type = product.type;
  // if productTypes[] doesn't have unique product type, then add it to productTypes[]

  // --Solution one--
  // let typeExists = false;
  // for (let j = 0; j < productTypes.length; j++) {
  //   if (productTypes[j] === type) {
  //     typeExists = true;
  //   }
  // }
  // if (!typeExists) {
  //   productTypes.push(type);
  // }

  // --Solution two--
  if (!productTypes.includes(type)) {
    productTypes.push(type);
  }
}
console.log("unique product types: ", productTypes);

// Output:
// => ["mobile", "computer", "tablet"]

// Use the "stores" array in the challenge.js file
// And do the above again, collecting data from all stores.
