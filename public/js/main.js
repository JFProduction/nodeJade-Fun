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

$('.dial').knob();

$('.dial').trigger('configure', {
    "min": 0,
    "max": 100,
    "fgColor": "#ff5252",
    "skin": "tron"
});