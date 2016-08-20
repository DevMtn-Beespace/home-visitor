UPDATE visitors
SET
user_id = $2,
team_id = $3,
availability_id = $4
WHERE id = $1;
