$(function(){
  $("div #survey").submit(function(event){

    event.preventDefault();
    var userName = $("input#userName").val();
    var weather = $("#weatherInput").val();
    var color = $("#colorInput").val();
    var food = $("input:radio[name=flavor]:checked").val();
    var date = $("#dateInput").val();

    $("#name").text(userName);
    $("#weather").text(weather);
    $("#color").text(color);
    $("#food").text(food);
    $("#date").text(date);
  });
});
