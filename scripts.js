function newItem(){

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    //Adding new item
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = $('#list');
        list.append(li);
    }

    //Crossing out item
    function crossOut(){
        li.toggleClass("strike");
    }
    
    li.on('dblclick', crossOut);

    //Add delete x button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
        li.addClass("delete");
    }

    $('#list').sortable();

}