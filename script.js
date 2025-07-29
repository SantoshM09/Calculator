$(document).ready(function () {
  let expression = "";

  $(".buttons input[type='button']").on("click", function () {
    const value = $(this).val();

    if (value === "C") {
      expression = "";
      $("#display").val("");
    } else if (value === "=") {
      try {
        const result = eval(expression);
        $("#display").val(result);
        expression = result.toString();
      } catch (error) {
        $("#display").val("Error");
        expression = "";
      }
    } else {
      expression += value;
      $("#display").val(expression);
    }
  });
});