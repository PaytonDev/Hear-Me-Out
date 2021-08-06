const authURL = 'https://accounts.spotify.com/authorize';
const redirectURi = 'https://hear-me-out-spotify-api.herokuapp.com/'
const clientId = '76007946b07a474487db86cb749ba027'



const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
];

export const loginURL = `${authURL}?client_id=${clientId}&response_type=code&redirect_uri=${redirectURi}&scope=${scopes.join(
 "%20"   
)}`;