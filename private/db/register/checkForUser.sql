SELECT email, username from users
WHERE username = $1 OR email = $2;
