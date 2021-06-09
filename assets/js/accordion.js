  jQuery(".card_accordion").hover(
      function () {
    jQuery(this).find(".hint2").css("display", "inline");
        jQuery(this).find(".hint2").removeClass('move_out').addClass('move_in');
        jQuery(".card__head_accordion").css("display", "none");
        jQuery(this).find(".card__head_accordion").css("display", "inline");

      },
      function () {
    jQuery(this).find(".hint2").css("display", "none");
        jQuery(this).find(".hint2").addClass('move_out').removeClass('move_in');
        jQuery(".card__head_accordion").css("display", "inline");
      }
    );