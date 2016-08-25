INSERT into teams
(
  team_name,
  team_leader,
  team_second
)
VALUES
(
  $1,
  $2,
  $3
)
RETURNING team_id;
