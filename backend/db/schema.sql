DROP DATABASE IF EXISTS tweets_database;
CREATE DATABASE tweets_database;

\c tweets_database;

/* 

-users table
-tweets table
-tags table

*/

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;

CREATE TABLE users
(
  id VARCHAR PRIMARY KEY,
  fullname TEXT,
  email TEXT NOT NULL UNIQUE,
  username TEXT UNIQUE,
  profile_pic VARCHAR,
  bio TEXT
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  poster_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
  body TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  
);


CREATE TABLE tags
(
  id SERIAL PRIMARY KEY,
  post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag TEXT NOT NULL
);

