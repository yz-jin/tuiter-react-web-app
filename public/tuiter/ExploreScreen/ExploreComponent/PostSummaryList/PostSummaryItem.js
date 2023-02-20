/* eslint-env jquery */
const PostSummaryItem = (post) => {
    return(`
        <a href="#" class="list-group-item">
            <div class="d-flex align-items-center">
                <div>
                    <div class="text-muted">${post.topic}</div>
                    <div class="d-flex">
                        <div><b>${post.userName}</b></div>
                        <span class="d-inline-block ms-2">
                            <i class="fas fa-check-circle"></i>
                            <small class="text-muted ms-1">- ${post.time}</small>
                        </span>
                    </div>
                    <div class="me-5"><b>${post.title}</b></div>
                </div>
                <img src="${post.image}" class="custom-img-size mt-auto ms-auto mb-auto float-end" alt="${post.userName}">
            </div>
        </a>
    `);
}
export default PostSummaryItem;