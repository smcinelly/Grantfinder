


// clickable card functionality
$(document).ready(() => {
  $(document.body).on('click', '.card1[data-clickable=true]', (e) => {
    var href = $(e.currentTarget).data('href');
    window.location = href;
  });
});



