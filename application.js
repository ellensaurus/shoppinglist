$(document).ready(function(){

// Check off list items and move them to bottom of list, or uncheck to move to top of list
function checkUncheck() {
	$("[type="checkbox"]").on("click", function() {
		var itemsList = $(this).parent();

		if($(this).is(":checked")) {
			$(itemsList).css("text-decoration", "line-through");
			$(itemsList).appendTo("ul");
			console.log("Bought this item already");
		}

		else {
			$(itemsList).css("text-decoration", "none");
			$("ul").prepend(itemsList);
			console.log("Need to buy this item");
		}
	});
}

// Run checkUncheck on current list items
	checkUncheck();

// Add item to list
	$("#addButton").click(function() {
		event.preventDefault();
		var addItem = $("#newItem").val();

		$("ul").prepend('<li><input type="checkbox" class="checkOut"><img class="trashItem" src="trash.png" alt="delete icon" />'+ addItem + '</li>');
		checkUncheck();
		$('#shoppingList')[0].reset();
		console.log("I've been added!");
	});

// Use .slideToggle for trash can icon
	$("ul#sortable").on("click", ".trashItem", function() {
		var trashThis = $(this).parent();
		$(trashThis).slideToggle(400);
		console.log("Delete me");
});

// Delete checked items off of list
	$("#deleteList").click(function() {
		var dialog = confirm("Are you sure you want to delete these items?");
		var deleteItem = $("input[type="checkbox"]:checked");

		if(dialog === true) {
			$(deleteItem).parent().detach();
			console.log("Confirmed delete of check items");
		}
	});

// Make list items sortable
	$("#sortable").sortable();
});



