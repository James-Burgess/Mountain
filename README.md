# Mountain
_An apline.js project template with all the normal goodies:_

- Webpack to build and serve the project
- Navigo to route pages
- Postcss so we can write nice scss. 
- Auth0 to handle authentication
- Bulma css for sweet styles

# Obtaining auth0 credentials

 1. create a new file called .env in your application root directory and copy paste the contents of the .env.sample file.
 2. login or register to your auth0 account.
 3. once in your auth0 portal, click the applications dropdown and select Applications.
 4. select create application.
 5. enter your application name and select regular web application.
 6. go into application settings.
 7. populate the Domain and Client ID of the .env file with the relevant fields in the auth0 application settings.
 8. In the auth0 application settings, scroll to the application URI's section. Add the allowed callback URL/'s that will be redirected to once authenticated and add the allowed web origins URL/'s that will be the root of the web application.
    > If you are testing this application locally, for example. The allowed callback URL would be http://localhost:8080/ and the allowed web origin URL would be http://localhost:8080. 

# Running locally

- Populate a `.env` file in the root of the app (use `.env.sample` for help)
- `$ yarn install`
- `$ yarn serve`
