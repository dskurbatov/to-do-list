var itemList = {
  items: [],

  addItem: function(item){
    itemList.items.push(item)
  },

  removeItem: function(item){
    for (var i = 0; i < itemList.items.length; i++) {
      if(itemList.items[i] === item){
        var index = itemList.items.indexOf(item);
        itemList.items.splice(index, 1);
      };
    };
    return itemList.items;
  }
};

function addItem(event){

  event.preventDefault();

  var item = $("#item").val();
  itemList.addItem(item);

  $("#listOfItems").append("<li><input type='checkbox' class='done'><span>" + item + "</span><button class='delete'>Delete</button></li>");
  $("#item").val("").focus();

};

function getDone(event){

  event.preventDefault();

  var deleteItem = $(this).parent().find("span").text();
  itemList.removeItem(deleteItem);
  $(this).parent().remove();
};

function finishItem(){
  var finishedItem = $(this).parent().find("span");

  if(finishedItem.hasClass("checked")){
    finishedItem.removeClass("checked");
  } else {
    finishedItem.addClass("checked");
  }
};

$(document).ready(function(){
  $(".add").on("click", addItem);
  $(document).on("click", ".delete", getDone);
  $(document).on("click", ".done",finishItem);
});