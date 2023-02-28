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
                        height={60}
                        width={60}
                    />
                </div>
                <div className="col-10">
                    <div className="d-flex w-100 justify-content-between mb-1">
                        <div className="d-flex">
                            <p className="mb-0">{post.userName}&nbsp;</p>
                            <div style={{ display: "inline-block" }}>
                                <i className="bi bi-check-circle"></i>
                                <span className="text-muted"> @{post.handle}</span>
                                <span className="text-muted"> · {post.time}</span>
                            </div>
                        </div>
                        <small><i className="bi bi-three-dots"></i></small>
                    </div>

                    <p className="mb-2">{post.text}</p>
                    <div className="mb-2 border" style={{ borderColor: "rgba(0, 0, 0, 0.125)", borderRadius: "10px" }}>
                        <img
                            src={post.image}
                            alt={post.imageTitle}
                            className="img-fluid rounded"
                        />
                        {post.imageTitle !== '' && <hr className="mt-0 mb-1" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }} />}
                        <div className="ms-2 me-2">{post.imageTitle}</div>
                        <div className="text-muted ms-2 me-2">{post.imageText}</div>
                    </div>
                    <div className="d-flex justify-content-between" style={{marginInlineEnd: '20%'}}>
                        <div>
                            <i className="bi bi-chat-square"></i>
                            <span>&nbsp;&nbsp;{post.comments}</span>
                        </div>
                        <div>
                            <i className="bi bi-arrow-repeat"></i>
                            <span>&nbsp;&nbsp;{post.retuits}</span>
                        </div>
                        <div>
                            <i className="bi bi-heart"></i>
                            <span>&nbsp;&nbsp;{post.likes}</span>
                        </div>
                        <div>
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;