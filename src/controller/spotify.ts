export const loginURL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${encodeURIComponent(
  "76007946b07a474487db86cb749ba027"
)}&redirect_uri=${encodeURIComponent(
  "https://hear-me-out-43d23.web.app/"
)}&scope=${encodeURIComponent("streaming user-read-email user-read-private")}`;
