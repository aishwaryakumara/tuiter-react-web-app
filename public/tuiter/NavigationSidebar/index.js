const NavigationSidebar = (currentpage) => {

    let isHomeActive = false;
    let isExploreActive = false;
    let isNotificationActive = false;
    let isMessageActive = false;
    let isBookmarksActive = false;
    let isListActive = false;
    let isProfileActive = false;
    let isMoreActive = false;

    if(currentpage === "homescreen"){
        isHomeActive = true;
    }else if(currentpage === "explore"){
        isExploreActive = true;
    }else if(currentpage === "explore"){
        isNotificationActive = true;
    }else if(currentpage === "explore"){
        isMessageActive = true;
    }else if(currentpage === "explore"){
        isBookmarksActive = true;
    } else if(currentpage === "explore"){
        isListActive = true;
    } else if(currentpage === "explore"){
        isProfileActive = true;
    } else if(currentpage === "explore"){
        isMoreActive = true;
    }

    return(`
     <div class="list-group">
        <a class="list-group-item list-group-item-action">
          <i class="fa-sharp fa-solid fa-dove"></i></a>
        <a class=" text-decoration-none list-group-item list-group-item-action ${isHomeActive?'active':''}"  href="../HomeScreen/index.html">
          <i class="fa-solid fa-house-chimney"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">Home</span>  </a>
        <a class=" text-decoration-none list-group-item list-group-item-action ${isExploreActive?'active':''} " href="../explore/index.html">
          <i class="fa-solid fa-hashtag"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Explore </span> </a>
        <a class=" text-decoration-none list-group-item list-group-item-action ${isNotificationActive?'active':''}" href="#">
          <i class="fa-solid fa-bell"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Notifications </span> </a>
        <a class=" text-decoration-none list-group-item list-group-item-action ${isMessageActive?'active':''}" href="#">
          <i class="fa-solid fa-envelope"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Messages </span> </a>
        <a class=" text-decoration-none list-group-item list-group-item-action ${isBookmarksActive?'active':''}" href="#">
          <i class="fa-solid fa-bookmark"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Bookmarks </span> </a>
        <a class=" text-decoration-none list-group-item list-group-item-action ${isListActive?'active':''}" href="#">
          <i class="fa-solid fa-list"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Lists </span> </a>
        <a class=" text-decoration-none list-group-item list-group-item-action ${isProfileActive?'active':''}" href="#">
          <i class="fa-solid fa-user"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Profile </span> </a>
        <a class=" text-decoration-none list-group-item list-group-item-action ${isMoreActive?'active':''}" href="#">
          <i class="fa-solid fa-circle-plus"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> More </span> </a>

        <button type="submit" class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>


      </div>
 `);
}
export default NavigationSidebar;
