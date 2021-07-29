const authURL = 'https://accounts.spotify.com/authorize';
const redirectURi = 'https://hear-me-out-spotify-api.herokuapp.com/'
const clientId = process.env.Client_ID

const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
];

export const loginURL = `${authURL}?client_id=${clientId}&response_type=code&redirect_uri=${redirectURi}&scope=${scopes.join(
 "%20"   
)}`;