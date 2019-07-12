// jquery
$(function () {
    $.ajax({
        url: '/hospital/obtertodos',
        method: 'get',
        success: function (data) {


            alert("DEU BOA");
        },
        error: function (data) {
            alert("DEU RUIM");
        }
    })    
});

