UPDATE users
SET
first_name = $2,
last_name = $3,
address = $4,
city = $5,
state = $6,
zip = $7,
phone = $8,
email = $9,
google_profile_pic = $10,
region = $11,
member = $12,
admin = $13,
advocate = $14,
google_id = $15,
facebook_id = $16,
visitee_id = $17,
visitor_id = $18,
advocate_id = $19,
team_id = $20
WHERE user_id = $1;
