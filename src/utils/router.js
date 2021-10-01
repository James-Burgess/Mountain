import Navigo from "navigo";
import render from "./render";
import homePage from "../pages/home";
import aboutPage from "../pages/about";
import loginPage from "../pages/login";
const router = new Navigo('/');

import { auth0 } from "./authentication";

const before = async (done, match) => {
    const authenticated = window.localStorage.getItem('jwt_token');
    if (authenticated !== null){
        if (match.url === 'login') {
            console.log(authenticated)
            router.navigate('')
        }
    }else{
        if (match.url === 'login' && match.params){
            console.log(decodeURI(window.location.href))
            await auth0.handleRedirectCallback();
            window.localStorage.setItem('jwt_token', await auth0.getTokenSilently())
            window.localStorage.setItem('user', await auth0.getUser())
            router.navigate('')
        }
    }
    done()
}


router
    .hooks({
        before
    })
    .on('', homePage)
    .on('login', loginPage)
    .on('about', aboutPage)
    .notFound(() => {
        render("Page Not found");
    });

export default router