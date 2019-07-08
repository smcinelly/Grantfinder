// initiation for the dropdowns
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });
  M.AutoInit();

  // Show Cards
  function showHide() {
   var x = document.getElementById("showcards");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
  }
