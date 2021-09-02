var gitbook = window.gitbook;
var options;
var imgUrls;
var time;
gitbook.events.bind('start', function (e, config){
    // Save config data
    options = config['change-bg'] || {};
    imgUrl = options.url;
});
gitbook.events.bind("page.change", function (){
    $("<div>").addClass("bg").prependTo($(".book-body"));

    $(".bg").css("backgroundImage", "url(" + imgUrl + ")");
});
