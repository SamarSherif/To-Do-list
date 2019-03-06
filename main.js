$(document).ready(function(){
    $("span").click(function(){
        $(this).parent().hide(500,function(){
            $(this).remove();
        });
    });
});
