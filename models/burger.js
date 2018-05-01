$(".create-form").on('submit', function (event) {
	event.preventDefault();

	var newBurger = {
		name: $('#id').val().trim(),
	};

	$.ajax("/api/burgers", {
		type: 'POST',
		data: newBurger
	}).then(function () {
		console.log("created a new burger");
		location.reload();
	});
});
$(".eat").on('click', function (event) {
	event.preventDefault();
	var eatBurger = {
		devoured: true
	};
	var id = $(this).data('id');

	$.ajax("/api/burger/" + id, {
		type: "PUT",
		data: eatBurger
	}).then(function () {
		console.log("Your burger has been devoured");
		location.assign("/");
	});
});