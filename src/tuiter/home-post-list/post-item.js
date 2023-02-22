import React from "react";
const PostItem = (
    {
        post = {
                    "_id": 1,
                    "avatarIcon": "../../images/elonmusk.png",
                    "userName": "Elon Musk",
                    "handle": "elonmusk",
                    "time": "23h",
                    "text": "Amazing show about @Inspiration4x mission!",
                    "image": "../../images/starshipspacex.jpeg",
                    "imageTitle": "Countdown: Inspiration4 Mission to Space",
                    "imageText": "From training to launch to landing, this all-access documentaries rides along with the Inspirational4 crew on the first all-civilian orbital space...",
                    "comments": "4.2k",
                    "retuits": "3,5k",
                    "likes": "37,5k"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img
                        src={post.avatarIcon}
                        alt={`${post.userName}'s profile`}
                        className="img-fluid rounded-circle"
                    />
                </div>
                <div className="col-10">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h5 className="mb-0">{post.userName}</h5>
                        <span className="text-muted">{post.time}</span>
                    </div>
                    <p className="mb-0">@{post.handle}</p>
                    <p className="my-3">{post.text}</p>
                    {post.imageTitle && (
                        <div className="my-3">
                            <img
                                src={post.image}
                                alt={post.imageTitle}
                                className="img-fluid"
                            />
                            <div className="text-muted">{post.imageText}</div>
                        </div>
                    )}
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <i className="bi bi-chat-square"></i>
                            <span className="mx-1">{post.comments}</span>
                            <i className="bi bi-arrow-repeat mx-2"></i>
                            <span className="mx-1">{post.retuits}</span>
                            <i className="bi bi-heart mx-2"></i>
                            <span className="mx-1">{post.likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;