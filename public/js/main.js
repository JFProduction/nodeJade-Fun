$('#pressMe').on('click', function() {
    $.ajax({
        url: 'getGamers',
        type: 'GET',
        success: function(data) {
            $('#gameTblBody').html(data);
        },
        error: function(err) {
            alert(err);
        }
    });
});

$('#submit-user').on('click', function() {
    if ($('#username').val().length > 0 || $('#game').val().length > 0) {
        $.ajax({
            url: 'addUser',
            type: 'POST',
            data: { username: $('#username').val(), game: $('#game').val() },
            success: function(data) {
                alert(data.msg);
            },
            error: function(err) {
                alert(err);
            }
        });
    }
    else
        alert('Oops! Must have all fields filled out!');
});

$('.dial').knob();

$('.dial').trigger('configure', {
    "min": 0,
    "max": 100,
    "fgColor": "#ff5252",
    "skin": "tron"
});