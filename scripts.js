

// clickable card functionality
$(document).ready(() => {
  $(document.body).on('click', '.card1[data-clickable=true]', (e) => {
    var href = $(e.currentTarget).data('href');
    window.location = href;
  });
});

// Modal Initiation
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});



