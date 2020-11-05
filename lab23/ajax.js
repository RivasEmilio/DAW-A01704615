

$(document).ready(function() {

    $('.datepicker').datepicker();
    
    $("#pp").submit(function(event){
        var request;

        event.preventDefault();
    
        if (request) {
            request.abort();
        }

        var $form = $(this);
    
        var $inputs = $form.find("input, select, button, textarea");
    
        var serializedData = $form.serialize();
    
        $inputs.prop("disabled", true);
    
        request = $.ajax({
            url: "apod.php",
            type: "post",
            data: serializedData
        });
    
        request.done(function (response, textStatus, jqXHR){
            // Log a message to the console
            console.log(response);
            $( '#pp' ).each(function(){
                this.reset();
            });
            $('#tabla').html(response);
        });
    
        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });
    
        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });
    
    });

    

   

});

