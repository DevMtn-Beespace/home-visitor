UPDATE users
SET
username = $2,
password = $3,
first_name = $4,
last_name = $5,
address = $6,
city = $7,
state = $8,
zip = $9,
phone = $10,
email = $11,
admin = $12,
visitee = $13,
visitor = $14
WHERE user_id = $1;
