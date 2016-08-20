UPDATE USERS
SET
username = $1,
password = $2
WHERE
email = $3;
