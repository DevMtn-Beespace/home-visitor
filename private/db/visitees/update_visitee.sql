UPDATE visitees
SET
frequency = $2,
priority = $3,
user_id = $4,
team_id = $5,
avail_id = $6
WHERE id = $1;
