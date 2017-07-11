function styleBtn() {

    jQuery('#content .btn').wrap('<div class="btn-wrapper"></div>');
    jQuery('#content .btn').wrap('<div class="btn-inner-wrapper"></div>');
    jQuery.each(jQuery('#content .btn'), function() {

        if(jQuery(this).data('float')) {
          jQuery(this).parents('.btn-wrapper').addClass('btn-' + jQuery(this).data('float'));
        }

        if(jQuery(this).data('size')) {
          jQuery(this).parents('.btn-wrapper').addClass('btn-' + jQuery(this).data('size'));
        }

        if(jQuery(this).data('cls')) {
            var cls = jQuery(this).data('cls').split(' ');
            var jThis = jQuery(this);
            
            jQuery.each(cls, function(i, v) {
                jThis.parents('.btn-wrapper').addClass(v);
            });
        }
    });
}

function styleSelect() {
    jQuery.each(jQuery('select'), function() {
        jQuery(this).wrap('<div class="select"></div>');
    });
}

function numerator() {

    jQuery.each(jQuery('.numerator-block'), function() {

        var ind = 1;
        jQuery.each(jQuery('.numerator-row', jQuery(this)), function() {
            jQuery(this).prepend('<div class="fi-num">'+ind+'</div>');
            ind++;
        });
    });
}

jQuery(document).ready(function() {
    styleBtn();
    styleSelect();
    numerator();

    if(jQuery('.zoom-container .lupa').length) {
        jQuery('.zoom-container .lupa').click(function() {
            jQuery(this).prev('.fancybox').trigger('click');
        });
    }


});
