$(document).ready(function(){
    $("span").click(function(){
        $(this).parent().hide(500,function(){
            $(this).remove();
        });
    });

    $("#add-item").click(function(){
        var newTodo ="";
       newTodo =  $("input[type='text']").val();
       $("ul").append("<li class='list-group-item'>"  + newTodo + " <span><i class='fa fa-trash-alt'></i></span> </li>");
    });
});
