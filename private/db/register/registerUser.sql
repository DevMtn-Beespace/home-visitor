INSERT into USERS
(
  username,
  password,
  first_name,
  last_name,
  address,
  city,
  state,
  zip,
  phone,
  email,
  admin,
  visitee,
  visitor
)
VALUES
(
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8,
  $9,
  $10,
  $11,
  $12,
  $13
);
