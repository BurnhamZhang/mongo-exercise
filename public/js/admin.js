/**
 * Created by riyasushiming on 16/10/14.
 */
$(function () {
    $('.del').on('click',function () {
        var id = $(this).data('id');
        var tr = $(this).closest('tr');
        $.ajax({
            type:'DELETE',
            url:'/admin/list?id='+id,
        }).done(function (resp) {
            if(resp.success == 1){
                tr.remove();
            }
        })
    })
})