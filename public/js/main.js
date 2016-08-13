$(function() {
    $('#pressMe').on('click', function() {
        $.ajax({
            url: 'getGamers',
            type: 'GET',
            success: function(data) {
                console.log(data);
                $('#gameTblBody').html(data);
            },
            error: function(err) {
                alert(err);
            }
        });
    });
});