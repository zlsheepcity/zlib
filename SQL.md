# SQL snippets

```sql
SELECT
    a.values,
    b.status,
    (
        SELECT
            MAX(c.rating)
        FROM
            table_rating c
        WHERE
            a.id = c.id
    ) max_rating

FROM
    table_values a

LEFT JOIN
    table_status b ON (a.id = b.id)

WHERE 1
    AND b.date_added > (NOW() - INTERVAL 1 MONTH)

ORDER BY
    (CASE
        WHEN a.special IS NOT NULL
        THEN a.special
        WHEN a.discount IS NOT NULL
        THEN a.discount
        ELSE a.price
     END)
;
```
