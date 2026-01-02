SELECT
  CONCAT(
    UPPER(SUBSTRING_INDEX(name, ' ', -1)),
    ', ',
    SUBSTRING_INDEX(name, ' ', 1)
  ) AS formatted_name,

  CONCAT(
    LOWER(SUBSTRING_INDEX(name, ' ', 1)),
    '.',
    LOWER(SUBSTRING_INDEX(name, ' ', -1)),
    '@company.com'
  ) AS email,

  CONCAT(
    UPPER(LEFT(SUBSTRING_INDEX(name, ' ', 1), 1)),
    UPPER(LEFT(SUBSTRING_INDEX(name, ' ', -1), 1))
  ) AS initials

FROM employees;
SELECT
  CONCAT(
    UPPER(SUBSTRING_INDEX(name, ' ', -1)),
    ', ',
    SUBSTRING_INDEX(name, ' ', 1)
  ) AS formatted_name,

  CONCAT(
    LOWER(SUBSTRING_INDEX(name, ' ', 1)),
    '.',
    LOWER(SUBSTRING_INDEX(name, ' ', -1)),
    '@company.com'
  ) AS email,

  CONCAT(
    UPPER(LEFT(SUBSTRING_INDEX(name, ' ', 1), 1)),
    UPPER(LEFT(SUBSTRING_INDEX(name, ' ', -1), 1))
  ) AS initials

FROM employees;
-- This query formats employee names, generates email addresses, and creates initials based on the full name stored in the 'name' column of the 'employees' table.