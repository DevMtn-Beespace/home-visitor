-- SELECT * from visitees where visitee_id = $1;

SELECT distinct *
FROM users u
JOIN visitees vee
ON vee.visitee_id = u.user_id
WHERE u.visitee_id = $1;
