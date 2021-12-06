var restaurant = {};

function createRestaurant(name){
  restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return restaurant
}


// function addMenuItem(name, newMenu){
//   restaurant.menus.lunch.push(newMenu)
// }



  function addMenuItem(restaurantObject, newMenu){

      if (newMenu.type == 'breakfast' && restaurantObject.menus.breakfast.includes(newMenu) == false){
        restaurant.menus.breakfast.push(newMenu);
      }

      if (newMenu.type == 'lunch' && restaurantObject.menus.lunch.includes(newMenu) == false){
        restaurant.menus.lunch.push(newMenu);
      }

      if (newMenu.type == 'dinner' && restaurantObject.menus.dinner.includes(newMenu) == false){
        restaurant.menus.dinner.push(newMenu);
      }
}

// function addMenuItem(restaurantObject, newMenu){
//     if (newMenu.type == 'breakfast'){
//       if ()
//       for (i = 0; i < restaurant.menu.breakfast.length; i++){
//       restaurant.menus.breakfast.push(newMenu);
//     }
//   }
//
//     if (newMenu.type == 'lunch'){
//       restaurant.menus.lunch.push(newMenu);
//     }
//
//     if (newMenu.type == 'dinner'){
//       restaurant.menus.dinner.push(newMenu);
//     }
// }

function removeMenuItem(discard){
  restaurant.menus.breakfast.pop(discard)
}


module.exports = {
createRestaurant,
addMenuItem,
removeMenuItem
}
