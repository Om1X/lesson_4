(function ($) {
  $('.tabs').on('click', 'div:not(.active)', function () {
      $('.tabs > .active').removeClass('active');
      $(this).addClass('active');
      $('.innerTabs > div').removeClass('active');
      $('.innerTabs > div:eq(' + $(this).index() + ')').addClass('active');
    }
  );
})(jQuery);