const client_id = 'd2b2f93d92c84b51a07a6c9c762e4ab6d2b2f93d92c84b51a07a6c9c762e4ab6';  // Thay YOUR_CLIENT_ID bằng client ID thực tế
const redirect_uri = 'https://spotify-eight-ochre.vercel.app/';  // Thay YOUR_REDIRECT_URI bằng URI thực tế
const scopes = 'user-read-private user-read-email user-library-read';

export const authEndpoint = 'https://accounts.spotify.com/authorize';

export const authUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`;
