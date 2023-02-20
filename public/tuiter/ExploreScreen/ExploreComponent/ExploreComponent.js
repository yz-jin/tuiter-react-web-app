import PostSummaryList from "./PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
    <div class="d-flex align-items-center">
            <div class="input-group border border-secondary bg-white more-rounded">
                   <div class="input-group-prepend d-flex justify-content-center">
                        <span class="input-group-text border-0 bg-transparent">
                            <i class="fas fa-search" style="color: gray"></i>
                        </span>
                   </div>
                   <input type="text" class="form-control border-0" placeholder="Search Twitter">
            </div>
            <span class="d-inline-block ms-3 align-self-center bg-transparent border-0">
                <i class="fas fa-cog" style="font-size: 1.5rem; color: dodgerblue"></i>
            </span>
    </div>
    <ul class="nav nav-tabs mt-2 mb-2">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item nav-item-action">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>                
    </ul>
    <div class="position-relative">
        <img src="../../images/starshipspacex.jpeg" class="w-100 mb-2" alt="spacex">
        <div class="position-absolute bottom-0 left-0 text-white ms-2">
            <h3 class="text-center">SpaceX's Starship</h3>
        </div>
    </div>
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;
