function takeOrder(xx, array){
  if ( array.length < 3){
  array.push(xx)
}
  return array
}

function refundOrder(orderNum, listspot){
  for ( i = 0; i < listspot.length; i++){
    if (orderNum === listspot[i].orderNumber){
      listspot.splice([i], 1);
    }
  }
return listspot;
}


function listItems(order){
  var orders = [];
  for ( i = 0; i < order.length; i++){
    orders.push(order[i].item)

  }
  return orders.join(', ');
}



function searchOrder(searching, item){
  for ( i = 0; i < searching.length; i++){
    if (searching[i].item === item){
      return true;
    }
  }
  return false;
}


module.exports = {
takeOrder,
refundOrder,
listItems,
searchOrder
}
