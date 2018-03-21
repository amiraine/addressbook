$(document).ready(function() {
  $("form.contacts").submit(function(event) {
    var nameInput = $("input#name1").val();
    var emailInput = $("input#email1").val();
    var githubInput = $("input#github1").val();
    $("#namelist").append(("<li>")+nameInput);
    $("#emaillist").append(("<li>")+emailInput);
    $("#githublist").append(("<li>")+githubInput);
    event.preventDefault();
  });
});
