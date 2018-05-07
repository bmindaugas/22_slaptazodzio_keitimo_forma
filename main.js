$(document).ready(function(e) {
    
    $(".ajax").submit(function(e) {
        
        e.preventDefault();
        
        // surenkam formos duomenis
        var form_data = $(this).serialize();
        var form_url = $(this).attr("action");
        var form_method = $(this).attr("method").toUpperCase();
        
        // parodom 
        $("#loadingimg").toggleClass('hidden');
        $.ajax({
            url: form_url, 
            type: form_method,      
            data: form_data,     
            cache: false,
            success: function(returnhtml, status){       
                console.log('status', status, 'resp', returnhtml);                   
                $("#result").html(returnhtml); 

                window.setTimeout(function(){
                    $("#loadingimg").toggleClass('hidden');
                }, 1000);
            } ,
            error: function(xhr, status, errormsg) {
                console.log(xhr, status, errormsg);
            }         
        });    
        
    });
    
});