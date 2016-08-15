$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["adjective1", "adjective2", "verb-ing1", "verb-ing2", "adjective3", "adjective4", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });

  $("#reset").click(function(event) {
    $("#story").hide();
  });

});
