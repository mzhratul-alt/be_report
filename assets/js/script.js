let input_form = document.input_form,
  current_student_input = document.input_form.current_student,
  postponed_student_input = document.input_form.postponed_student,
  cancelled_student_input = document.input_form.cancelled_student,
  transferred_to_input = document.input_form.transferred_to,
  transferred_from_input = document.input_form.transferred_from,
  irregular_student_input = document.input_form.irregular_student,
  dropout_student_input = document.input_form.dropout_student,
  admitted_student_output = document.getElementById("admitted_student"),
  postponed_student_output = document.getElementById("postponed_student"),
  cancelled_student_output = document.getElementById("cancelled_student"),
  transferred_to_output = document.getElementById("transferred_to"),
  transferred_from_output = document.getElementById("transferred_from"),
  irregular_student_output = document.getElementById("irregular_student"),
  regular_student_output = document.getElementById("regular_student");

input_form.addEventListener("keyup", function () {
  //Admitted Student
   admitted_student_output.innerText = Number(current_student_input.value) + Number(transferred_to_input.value) - Number(transferred_from_input.value);

   //Postponed Student
   postponed_student_output.innerText = Number(postponed_student_input.value)

   //Cancelled Student
   cancelled_student_output.innerText = Number(cancelled_student_input.value)

   //Transferred To
   transferred_to_output.innerText = Number(transferred_to_input.value)

   //Transferred From
   transferred_from_output.innerText = Number(transferred_from_input.value)

   //Irregular Student
   irregular_student_output.innerText = Number(irregular_student_input.value) + Number(dropout_student_input.value)

   //Regular Student
   regular_student_output.innerText = Number(current_student_input.value) - (
      Number(postponed_student_input.value) +
      Number(cancelled_student_input.value) +
      Number(irregular_student_input.value) +
      Number(dropout_student_input.value)
   )



});
