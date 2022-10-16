import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import post from "../PostSummaryList/posts.js";
import HomeComponents from "./HomeComponents.js";

function HomeComponent() {
    let currentpage = "homescreen";
    $('#wd-home').append(`
<!-- <h2>Home</h2>-->
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar(currentpage)}
   </div>
   
   <div class="col-10 col-lg-7 col-xl-6">
<!--    <h3>ExploreComponent</h3>-->
    ${HomeComponents()}
   </div>   

   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
<!--    <h3>WhoToFollowList </h3>-->
    <div class="list-group mt-2">
           ${PostSummaryList(post)}
           </div>
   </div>
   
  </div>
   `);
};
$(HomeComponent);
