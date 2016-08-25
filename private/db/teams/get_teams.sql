SELECT u.first_name, u.last_name from teams t
JOIN users u ON t.team_leader = u.user_id OR t.team_second = u.user_id;

-- work in progress
