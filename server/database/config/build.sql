BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR[60] NOT NULL UNIQUE,
    password VARCHAR[60] NOT NULL,
    email VARCHAR[120] NOT NULL UNIQUE
)

CREATE TABLE posts (
    id SERIAL PRIMARY KEY
    title VARCHAR[300] NOT NULL,
    body TEXT,
    vote INTEGER DEFAULT 0,
    voters TEXT,
    date DATE,
    user_id INTEGER FOREIGN KEY,
)

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment TEXT NOT NULL,
    date DATE,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
)

COMMIT;