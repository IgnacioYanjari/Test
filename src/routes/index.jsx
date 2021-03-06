import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import MainPage from "views/MainPage/MainPage.jsx";


var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path :"/components", name: "ComponentsPage", component : Components},
  { path: "/", name: "MainPage", component: MainPage }
];

// var indexRoutes = [
//   { path: "/landing-page", name: "LandingPage", component: LandingPage },
//   { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
//   { path: "/login-page", name: "LoginPage", component: LoginPage },
//   { path :"/components", name: "ComponentsPage", component : Components},
//   { path: "/", name: "MainPage", component: MainPage }
// ];

export default indexRoutes;
