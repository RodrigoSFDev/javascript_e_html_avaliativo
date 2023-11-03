const checkboxes = document.querySelectorAll("input[type=checkbox]");
const button = document.querySelector("button");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked){
        checkedCount++;

      } 
    });
    button.disabled = checkedCount < 2;
  });
});