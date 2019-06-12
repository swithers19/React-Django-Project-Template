let apiURL;

const hostname = window && window.location && window.location.hostname;
if (hostname==='localhost:3000'){
    apiURL = 'localhost:8000'
}
else {
    apiURL = ''
}

export const API_ROOT = `${apiURL}/api/`;