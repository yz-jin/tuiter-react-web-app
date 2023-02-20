/* eslint-env jquery */
const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item d-flex align-items-center">
            <img src="${who.avatarIcon}" alt="${who.userName}"  class="rounded-circle custom-avatar-size mt-auto ms-1 mb-auto me-3">
                <div class="ms-1">
                    <div class="d-flex">
                        <div><b>${who.userName}</b></div>
                        <span class="d-inline-block ms-2">
                            <i class="fas fa-check-circle"></i>
                        </span>
                    </div>
                    <small>@${who.handle}</small>
                </div>
                <button type="button" class="btn-blue more-rounded ms-auto float-end">Follow</button>
        </li>
    `);
}
export default WhoToFollowListItem;


