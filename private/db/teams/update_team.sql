UPDATE teams
SET
  team_name = $2,
  team_leader = $3,
  team_second = $4
WHERE team_id = $1;
