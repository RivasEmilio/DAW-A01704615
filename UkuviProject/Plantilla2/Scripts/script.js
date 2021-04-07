$(document).ready(function () {
    $(".AutoMan").on('click',function(){
        $('.AutoMan').removeClass('act');
        $(this).addClass('act');
    });

    $(".genero").on('click',function(){
        $('.genero').removeClass('act');
        $(this).addClass('act');
    });
    $(".tipoSeguro").on('click',function(){
            $('.tipoSeguro').removeClass('act');
            $(this).addClass('act');
        });
    
    //controlar los botones de seguro en mobile 
    let counterSeguro = 1, tipoSeguroEnPagina = 4; 
    $("#controllerSeguroBack").hide();
    $(".tipoSeguro2").hide();
    $("#controllerSeguroNext").on('click',function(){   
        if(counterSeguro == 1&&(counterSeguro+1)*2<=tipoSeguroEnPagina){
            $('.tipoSeguro1').hide();
            $('.tipoSeguro2').show();
            $("#controllerSeguroBack").show();
            $("#controllerSeguroNext").hide();
            counterSeguro++;
        }
        if(counterSeguro == 2&&tipoSeguroEnPagina>4){
            $('.tipoSeguro2').hide();
            $('.tipoSeguro3').show();
            counterSeguro++;
        }
        else if(counterSeguro == 2&&(counterSeguro+1)*2<=tipoSeguroEnPagina){
            $('.tipoSeguro2').hide();
            $('.tipoSeguro3').show();
            $("#controllerSeguroBack").show();
            $("#controllerSeguroNext").hide();
            counterSeguro++;
        }
    });
    $("#controllerSeguroBack").on('click',function(){   
        if(counterSeguro == 2){
            $('.tipoSeguro2').hide();
            $('.tipoSeguro1').show();
            $("#controllerSeguroBack").hide();
            $("#controllerSeguroNext").show();
            counterSeguro--;
        }
        // if(counterSeguro == 2&&tipoSeguroEnPagina>4){
        //     $('.tipoSeguro2').hide();
        //     $('.tipoSeguro1').show();
        //     $("#controllerSeguroBack").hide();
        //     $("#controllerSeguroNext").show();
        //     counterSeguro--;
        // }
    });


    $(window).bind("resize", function () {
        if ($(this).width() < 1080) {

            $('.navbar').addClass('justify-content-center');
            $('.formSeguro').addClass('flex-column');
            $('.formSeguro').removeClass('mb-3');
            $('.longText').removeClass('mr-2');
            $('.textA').removeClass('mr-2 mx-2');
            $('.textB').removeClass('mr-2 ml-2 mr-1');
            $('.typeButtonLeft').removeClass('ml-2');
            $('.footer').addClass('flex-column');
            $('.indentacion').removeClass('ml-5');
            $('.socialBig').hide();
            $('.socialSmall').show();
            $('.socialSmall').addClass('d-flex');
            $('.optionMob').show();
            $('.optionMob').addClass('d-flex');
            $('.optionPC').hide();
            $('#datos').removeClass('p-5');
            $('#datos').addClass('p-3 d-flex flex-column justify-content-center align-items-center');
            $('#mapaInformacion').removeClass('flex-wrap');
            $('#mapaInformacion').addClass('flex-column');
            $('#bubble').removeClass('mt-5');
            $('#buttonSeguroPC').removeClass('d-flex');
            $('#buttonSeguroPC').hide();
            $('#buttonSeguroMob').addClass('d-flex');
            $('#buttonSeguroMob').show();
            
        } else {
            $('.navbar').removeClass('justify-content-center')
            $('.formSeguro').removeClass('flex-column')
            $('.formSeguro').addClass('mb-3');
            $('.longText').addClass('mr-2');
            $('.textA').addClass('mr-2 mx-2');
            $('.textB').addClass('mr-2 ml-2 mr-1');
            $('.typeButtonLeft').addClass('ml-2');
            $('.footer').removeClass('flex-column');
            $('.indentacion').addClass('ml-5');
            $('.socialSmall').hide(); 
            $('.socialBig').show();
            $('.optionMob').hide();
            $('.optionPC').show();
            $('.optionMob').removeClass('d-flex');
            $('#datos').removeClass('p-3 d-flex flex-column justify-content-center align-items-center');
            $('#datos').addClass('p-5');
            $('#mapaInformacion').addClass('flex-wrap');
            $('#mapaInformacion').removeClass('flex-column');
            $('#bubble').addClass('mt-5');
            $('#buttonSeguroPC').addClass('d-flex');
            $('#buttonSeguroPC').show();
            $('#buttonSeguroMob').removeClass('d-flex');
            $('#buttonSeguroMob').hide();
        }
    }).trigger('resize');
    

});
