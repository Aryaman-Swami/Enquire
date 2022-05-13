/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 import Index from "views/user/dashboard.js";

 import Profile from "views/user/Profile.js";
 import UserEditProfile from "views/user/UserEditProfile.js";

// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";

var userroutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/user",
  },
  {
    path: "/Profile",
    name: "Profile",
    icon: "ni ni-tv-2 text-primary",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/UserEditProfile",
    name: "UserEditProfile",
    icon: "ni ni-tv-2 text-primary",
    component: UserEditProfile,
    layout: "/user",
    className:'d-none',
  },

];
export default userroutes;
