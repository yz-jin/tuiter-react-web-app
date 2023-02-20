/* eslint-env jquery */

import NavigationSidebar from "../ExploreScreen/NavigationSidebar/index.js";
import PostSummaryList from "../ExploreScreen/ExploreComponent/PostSummaryList";
import PostList from "./PostList";

function homeScreen() {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-xs-1">
                ${NavigationSidebar("home")}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-xs-1 text-white">
                ${PostList()}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4
                        col-xl-4  text-white">
                ${PostSummaryList()}
            </div>
        </div>
`);
}
$(homeScreen);