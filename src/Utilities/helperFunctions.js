//function to put all individual category into a new array
export const productLinkFunction = (products) => {
  let productLink = products.map((cat) => cat.category.toLowerCase());

  let productLinkSet = new Set(productLink);
  return [...productLinkSet];
};

//Nav drop down function to return for each category
//checks if navlink is brands and returns all types of brands available
export const navdropDownFilter = (products, text) => {
  if (!products || !Array.isArray(products)) return []; // Ensure `products` is an array

  if (text !== "brands") {
    const productArray = products.filter(
      (cat) => cat.category.toLowerCase() === text.toLowerCase()
    );

    if (productArray.length === 0) return { uniqueBrands: [], uniqueTypes: [] }; // Handle empty case

    const uniqueBrands = [
      ...new Set(productArray.map((product) => product.brand)),
    ];
    const uniqueTypes = [
      ...new Set(productArray.map((product) => product.type)),
    ];

    return { uniqueBrands, uniqueTypes }; // Properly return the object
  } else {
    const brands = products.map((cat) => cat.brand);
    return [...new Set(brands)]; // Ensure a consistent return type (array)
  }
};

//function to put all individual category into a new array
//store the array into a variable using the useRef reference
//to avoid re-rendring
export const productLinkUseRefFunction = (products, reactHook) => {
  const productLinkArray = productLinkFunction(products);
  const productLinkArrCurrentObj = reactHook(productLinkArray);
  const productLinkArr = productLinkArrCurrentObj.current;

  return productLinkArr;
};

//function to filter out of array the category of the array
//the value is passed from the route parameter
export const uniqueProductForEachCategory = (products) => {
  const productCategories = products.map((cat) => cat.type);

  return [...new Set(productCategories)];
};

export const uniqueStringValues = (products) => {
  return [...new Set(products)];
};

//function to return the category for view in the Allproduct generic route

export const productInThisCategory = (products, category) => {
  return products.filter(
    (product) => product.type.toLowerCase() === category.toLowerCase()
  );
};
