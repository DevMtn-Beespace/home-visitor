UPDATE visits
SET
visitee_id = $2,
visitor_id = $3,
visit_date = $4,
visit_time = $5,
contacted = $6,
confirmed = $7,
cancelled = $8,
impromptu = $9,
visitor_note = $10,
visitee_note = $11,
admin_note = $12
WHERE
visit_id = $1;
