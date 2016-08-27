UPDATE availability
SET
  available_start = $2,
  available_end = $3
WHERE user_id = $1;
