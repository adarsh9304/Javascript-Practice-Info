/*
FINDING Nth Highest salary

SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET n-1;


SELECT salary
FROM (
  SELECT salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
  FROM employees
) AS temp
WHERE row_num = n;


WITH ranked_salaries AS (
  SELECT salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
  FROM employees
)
SELECT salary
FROM ranked_salaries
WHERE row_num = n;


SELECT salary
FROM employees e1
WHERE n-1 = (
  SELECT COUNT(DISTINCT salary)
  FROM employees e2
  WHERE e2.salary > e1.salary
);





*/  