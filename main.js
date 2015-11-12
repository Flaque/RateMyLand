$(document).ready(function() {
    console.log("Started the website bitches");



    $("#reviewModal").on('show.bs.modal', function(event){
        loadReviewTemplate($(this));
    });

});

function loadReviewTemplate($modal) {
    var data = {};
    $.Mustache.load('./components/review/review.tmpl')
        .done(function() {
            $modal.mustache('yo', data);
        });
}
