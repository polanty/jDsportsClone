//function to put all individual category into a new array
export const productLinkFunction = (products) => {
  let productLink = products.map((cat) => cat.category.toLowerCase());

  let productLinkSet = new Set(productLink);
  return [...productLinkSet];
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
