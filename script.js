$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault(); 

        var phoneNumber = $('input[name="phone"]').val(); 

        $.ajax({
            type: 'POST',
            url: 'lookup.php',
            data: { phone: phoneNumber },
            success: function(response) {
                $('#result').text(response); 
            }
        });
    });
});