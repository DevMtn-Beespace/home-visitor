-- SELECT * from visitees;

SELECT distinct *
FROM users u
JOIN visitees vee
ON vee.visitee_id = u.user_id
WHERE u.visitee_id IS NOT null;
