$(document).ready(function () {
$("#submit").click(function () {
	
	
	$.post("/request",
	{
		name: "Manoj",
		designation: "UG"
	},
	function (data, status) {
		console.log(data)
		localStorage.setItem("name", "Manoj");
		// alert(data[0].name_recieved)
	});
});
});
