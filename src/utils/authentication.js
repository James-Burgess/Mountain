import router from './router'
import { Auth0Client } from '@auth0/auth0-spa-js';

export const auth0 = new Auth0Client({
    domain: process.env.AUTH0_DOMAIN,
    client_id: process.env.AUTH0_CLIENT_ID
});

const loginWithAuth = () => {
    auth0.loginWithRedirect({
        redirect_uri: window.location.origin + '/login'
    }).then(token => {
        auth0.getUser().then(user => {
            console.log(user);
        });
    });
}

export default function user() {
    return {
        authenticated: window.localStorage.getItem('jwt_token'),
        login() {
            loginWithAuth()
        },
        logout() {
            window.localStorage.removeItem('jwt_token')
            router.resolve('/login')
        }
    }
}
