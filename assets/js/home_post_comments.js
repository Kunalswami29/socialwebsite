{
    // method to submit the form data for new comment using AJAX
    let createComment = function () {
        let newCommentform = $('#post-comments-form');
        newCommentform.submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/comments/create',
                data: newCommentform.serialize(),
                success: function (data) {
                    let newComment = newCommentDom(data.data.comment);
                    $(' .post-comments-list>ul').prepend(newComment);
                    deleteComment($(' .delete-comment-button'),newComment);
                    new Noty({
                        theme: 'relax',
                        text: "Comment published!",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500

                    }).show();
                }, error: function (error) {
                    console.log(error.responseText);

                }
            })
        });

    }

    let newCommentDom = function (comment) {
        return $(`<li id="comment-${comment._id}">
        <p>
            
            <small>
                <a class="delete-comment-button" href="/comments/destroy/${comment._id}">X</a>
            </small>

            ${comment.content}
            <br>
            <small>
                ${comment.user.name}
            </small>
        </p>    
    </li>`);
    }


    // method of destroying comments
    let deleteComment = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type:'get',
                url:$(deleteLink).prop('href'),
                success: function(data){
                    $(`#comment-${data.data.comment_id}`).remove();
                },error:function(error){
                    console.log(error.responseText)
                }

            })
        })

    }
    createComment();
}