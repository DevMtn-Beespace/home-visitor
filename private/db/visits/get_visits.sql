SELECT * from visits
JOIN users on users.user_id = visits.visitee_id;
