// Function to generate random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Array of categories
  const categories = [
    "Electronics",
    "Home & Lifestyle",
    "Men Fashion",
    "Women Fashions",
    "Toys"
  ];
  
  // Array to store products
  const generatedProducts = [];
  
  // Generate 100 products
  for (let i = 0; i < 100; i++) {
    const title = `Product ${i+1}`;
    const price = getRandomInt(10, 1000);
    const category = categories[getRandomInt(0, categories.length - 1)];
    const image = `https://picsum.photos/200/150?random=${category}`;
  
    generatedProducts.push({ title, price, category, image });
  }
  
  // Export the products array
  export const products = generatedProducts;
  