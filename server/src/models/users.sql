CREATE DATABASE here_me_out_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    recent_songs text[],
    recent_albums text[],
    recent_artist text[],
);

INSERT INTO users (first_name, last_name, username, password) VALUES ('Bree', 'Payton','bpayton3','happydance');
