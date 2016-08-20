UPDATE messages
SET
from_user_id = $2,
to_user_id = $3,
about_user_id = $4,
message = $5
WHERE
id = $1;
