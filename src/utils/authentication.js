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
            console.log(user, token);
        });
    });
}

export default function user() {
    const authOn = process.env.AUTH_ENABLED === 1
    return {
        authenticated: authOn ? window.localStorage.getItem('jwt_token') : true,
        login() {
            authOn ? loginWithAuth() : router.resolve('/')
        },
        logout() {
            window.localStorage.removeItem('jwt_token')
            router.resolve('/login')
        }
    }
}
