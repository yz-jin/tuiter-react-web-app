import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item border-0">
                    <h6><b>Who to follow</b></h6>
                </li>
                ${
                    who.map(person => {
                    return WhoToFollowListItem(person);
                    }).join('')
                }
            </ul>
    `); }
export default WhoToFollowList;