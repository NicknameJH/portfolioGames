$(document).ready(function () {
    // Cuando se muestre el modal de imagen, ajustar el tamaño de la imagen
    $('.modal').on('show.bs.modal', function (e) {
      var $image = $(e.relatedTarget).find('img');
      var src = $image.attr('src');
      $(this).find('img').attr('src', src);
    });
  });