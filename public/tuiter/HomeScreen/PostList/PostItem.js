/* eslint-env jquery */
const PostItem = (post) => {
    return(`
            <div class="wd-bookmarks-post">
            
                <img class="wd-bookmarks-post-user-image" src="${post.avatarIcon}" alt="${post.userName}">
                <div class="wd-bookmarks-post-detail">
                    <div class="d-flex w-100 justify-content-between">
                        <div>
                            <p class="wd-bookmarks-post-user">${post.userName}</p>
                            <i class="fas fa-check-circle" style="color:white"></i>
                            <p class="wd-bookmarks-post-handle">@${post.handle}</p>
                            <p class="wd-bookmarks-post-date"> · ${post.time}</p>
                        </div>
                        <small><i class="fa fa-ellipsis-h" style="color: gray"></i></small>
                    </div>
                   
                    <div class="wd-bookmarks-post-tuit">${post.text}</div>
                  
                    <div class="wd-bookmarks-post-block">
                            <img class="wd-bookmarks-post-image${post.imageTitle.length >0 ? '' : "-no-show"}" src="${post.image}" alt="${post.imageTitle}">
                            <div class="wd-bookmarks-post-title-and-text${post.imageTitle.length >0 ? '' : "-no-show"}">
                                <div class="wd-bookmarks-post-title"> ${post.imageTitle} </div>
                                <div class="wd-bookmarks-post-text"> ${post.imageText}</div>
                            </div>
                        </div> 
                        
                   
                <div class="wd-bookmarks-icons">
                    <a href="#" class="no-underline">
                        <i class="fas fa-comment"></i>
                        <span class="wd-bookmarks-icons-comment-number">${post.comments}</span>
                    </a>
                    <a href="#" class="no-underline">
                        <i class="fas fa-retweet"></i>
                        <span class="wd-bookmarks-icons-retuit-number">${post.retuits}</span>
                    </a>
                    <a href="#" class="no-underline">
                        <i class="fas fa-heart"></i>
                        <span class="wd-bookmarks-icons-heart-number">${post.likes}</span>
                    </a>
                    <a href="#" >
                        <i class="fas fa-share"></i>
                    </a>        
                </div>
            </div>
            
        </div>
        <hr>

    `);
}
export default PostItem;