-- SELECT * from visitees where visitee_id = $1;

-- SELECT distinct *
-- FROM users u
-- JOIN visitees vee
-- ON vee.visitee_id = u.user_id
-- WHERE vee.visitee_id = $1;

SELECT * from users where user_id = $1;
