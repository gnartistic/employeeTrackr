INSERT INTO departments (department_name)
VALUES
('Human Resources'),
('Marketing'),
('Production'),
('Accounting');

INSERT INTO roles (title, salary, department_id)
VALUES
('Talent Manager', '85498.00', 1),
('Employee Benefits Specialist', '65434.00', 1),
('Workplace Safety Specialist', '84653.80', 1),

('Marketing Manager', '140000.00', 2),
('Marketing Analyst', '48978.90', 2),
('Brand Manager', '120000.00', 2),
('Graphic Designer', '42278.00', 2),

('Product Manager', '73487.00', 3),
('Product Launch Specialist', '70000.00', 3),
('Product Development Specialist', '57150.00', 3),

('Accounting Manager', '84788.00', 4),
('Accountant', '46898.00', 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id, department_id)
VALUES
('Ronald', 'Young', 1, null, 1),
('Christine', 'Thompson', 2, 1, 1),
('Jean', 'Wright', 3, 1, 1),

('Julia', 'Bell', 4, null, 2),
('Joseph', 'Peterson', 5, 4, 2),
('Aaron', 'Rivera', 6, 4, 2),
('Elizabeth', 'Collins', 7, 4, 2),

('Johnny', 'Jenkins', 8, null, 3),
('Bonnie', 'Phillips', 9, 8, 3),
('Judith', 'Parker', 10, 8, 3),
('Linda', 'Green', 11, null, 4),
('Justin', 'Evans', 12, 11, 4);

