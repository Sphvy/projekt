$(function () {
  $.ajax({
    type: "GET",
    url: "https://reaktiiv.com/projects.json",
    mimetype: "json",
    crossDomain: "true",
    success: function (data) {
      console.log("success")
      $(document).ready(function(){
        $("#myTable").DataTable({
          "data": data,
          "columns": [
            { "data" : "image", render: function (data, type, row, meta) {
              return '<img src="' + data + '" height="200" width="200"/>';
            }},
            { "data" : "title"},
            { "data" : "year"}
          ]
        });
      })
      
    }
  })
});





