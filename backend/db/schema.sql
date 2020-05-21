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
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  username TEXT UNIQUE NOT NULL,
  bio TEXT NOT NULL
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  caption TEXT,
  poster_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  picture TEXT,
  created_at TEXT NOT NULL
);


CREATE TABLE tags
(
  id SERIAL PRIMARY KEY,
  post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag TEXT NOT NULL
);

INSERT INTO users
  (full_name, email, username, bio)
VALUES
  ('Marializa Martinez', 'mariamartinez@pursuit.org', 'marializa0414', 'Animator turned chocolatier');
 


INSERT INTO posts
  (poster_id, caption,picture,created_at)
VALUES(1, 'heyy', '/public/uploads/IMG_6040.jpeg', '2020-05-21T05:36:00');

INSERT INTO tags
  (post_id,tag)
VALUES(1, 'TAG1');  