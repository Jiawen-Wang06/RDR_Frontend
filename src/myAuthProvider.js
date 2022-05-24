import axios from 'axios';
export default {

    // called when the user attempts to log in
    login: ({ username, password }) => {
        const request = new Request('http://localhost:8080/auth', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                console.log(response.status);
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                console.log(response);
                return response.json();
            })
            .then(auth => {
                //localStorage.setItem('auth', JSON.stringify(auth));
                console.log(auth);
                if(auth.status == 10000){
                    localStorage.setItem('username',auth.data.username);
                }else{
                    throw new Error(auth.msg);
                }
                
            })
            .catch((msg) => {
                throw new Error(msg)
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};