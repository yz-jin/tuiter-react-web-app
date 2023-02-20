/* eslint-env jquery */
const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
        <a href="/" class="list-group-item">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="../HomeScreen/index.html" class="list-group-item ${active === "home" ? "active" : ''}">
          <i class="fa fa-home"></i>
          <span>Home</span>
        </a>
        <a href="../ExploreScreen/index.html" class="list-group-item ${active === "explore" ? "active" : ''}">
          <i class="fa fa-hashtag"></i>
          <span>Explore</span>
        </a>
        <a href="#" class="list-group-item ${active === "notifications" ? "active" : ''}">
          <i class="fa fa-bell"></i>
          <span>Notifications</span>
        </a>
        <a href="#" class="list-group-item ${active === "messages" ? "active" : ''}">
          <i class="fa fa-envelope"></i>
          <span>Messages</span>
        </a>
        <a href="#" class="list-group-item ${active === "bookmarks" ? "active" : ''}">
          <i class="fa fa-bookmark"></i>
          <span>Bookmarks</span>
        </a>
        <a href="#" class="list-group-item ${active === "lists" ? "active" : ''}">
          <i class="fa fa-list"></i>
          <span>Lists</span>
        </a>
        <a href="#" class="list-group-item ${active === "profile" ? "active" : ''}">
          <i class="fa fa-user"></i>
          <span>Profile</span>
        </a>
        <a href="#" class="list-group-item ${active === "more" ? "active" : ''}">
          <i class="fa fa-ellipsis-h"></i>
          <span>More</span>
        </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
      </div>

  `);
}

export default NavigationSidebar;
