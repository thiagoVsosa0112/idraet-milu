$(document).ready(function(){
    
    $('.categoria .category-item[category="all"]').addClass('ct_item-active');

    
    $('.category-item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);
        $('.category-item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');


        //ocultar
        $('.card').hide();
    
    
        //mostrar
    
        $('.card[category="'+catProduct+'"]').show();
    })
 
    $('.category-item[category="all"]').click(function() {
        $('.card').show();
    })


});




