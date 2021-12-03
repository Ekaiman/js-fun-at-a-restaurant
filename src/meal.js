function nameMenuItem(name) {
return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
      name: name,
      price: price,
      type: type,
    }
  return menuItem
}

function addIngredients(item1, ingredients){
  if (!ingredients.includes(item1)){
    ingredients.push(item1);
  }

  return ingredients;
}


function formatPrice(x){
  return `$${x}`
}


function decreasePrice(xxxx) {
  return (xxxx - (xxxx * .1))
}


function createRecipe(title, ingredients, menuItemType){
  recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }

return recipe 

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
