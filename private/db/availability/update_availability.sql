UPDATE availability
SET
  user_id = $2,
  available_start = $3,
  available_end = $4,
  unavailable_start = $5,
  unavailable_end = $6
WHERE id = $1;
