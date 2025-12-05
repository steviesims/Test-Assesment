-- SQLite Sample Data Migration Script
-- This script adds 50 sample users and 50 tasks to the database
-- Password for all users: "Password123!"
-- Hash: $2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW

-- Note: Run this after the initial migration has created the schema
-- Usage: sqlite3 data/task_app.sqlite < sql/seed-sample-data-sqlite.sql

-- Insert 50 sample users
INSERT INTO user (id, email, password, firstName, lastName, createdAt, updatedAt) VALUES
-- Admins (5 users)
('650e8400-e29b-41d4-a716-446655440001', 'admin@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'John', 'Admin', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440002', 'sarah.admin@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Sarah', 'Williams', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440003', 'robert.admin@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Robert', 'Taylor', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440004', 'jennifer.admin@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Jennifer', 'Anderson', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440005', 'michael.admin@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Michael', 'Thomas', datetime('now'), datetime('now')),

-- Managers (10 users)
('650e8400-e29b-41d4-a716-446655440006', 'manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Mike', 'Manager', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440007', 'emily.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Emily', 'Johnson', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440008', 'david.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'David', 'Brown', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440009', 'lisa.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Lisa', 'Davis', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440010', 'james.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'James', 'Miller', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440011', 'patricia.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Patricia', 'Wilson', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440012', 'christopher.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Christopher', 'Moore', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440013', 'mary.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Mary', 'Jackson', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440014', 'daniel.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Daniel', 'White', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440015', 'nancy.manager@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Nancy', 'Harris', datetime('now'), datetime('now')),

-- Regular Users (35 users)
('650e8400-e29b-41d4-a716-446655440016', 'alice@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Alice', 'Smith', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440017', 'bob@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Bob', 'Brown', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440018', 'charlie@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Charlie', 'Davis', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440019', 'diana@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Diana', 'Wilson', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440020', 'edward@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Edward', 'Martinez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440021', 'fiona@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Fiona', 'Garcia', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440022', 'george@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'George', 'Rodriguez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440023', 'hannah@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Hannah', 'Martinez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440024', 'ian@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Ian', 'Hernandez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440025', 'julia@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Julia', 'Lopez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440026', 'kevin@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Kevin', 'Gonzalez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440027', 'laura@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Laura', 'Perez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440028', 'mark@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Mark', 'Sanchez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440029', 'nina@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Nina', 'Ramirez', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440030', 'oscar@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Oscar', 'Torres', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440031', 'penny@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Penny', 'Rivera', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440032', 'quinn@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Quinn', 'Evans', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440033', 'rachel@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Rachel', 'Collins', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440034', 'steve@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Steve', 'Stewart', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440035', 'tina@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Tina', 'Morris', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440036', 'ulysses@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Ulysses', 'Rogers', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440037', 'violet@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Violet', 'Reed', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440038', 'walter@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Walter', 'Cook', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440039', 'xena@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Xena', 'Morgan', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440040', 'yuri@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Yuri', 'Bell', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440041', 'zoe@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Zoe', 'Murphy', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440042', 'aaron@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Aaron', 'Bailey', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440043', 'bella@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Bella', 'Cooper', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440044', 'carlos@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Carlos', 'Richardson', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440045', 'dana@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Dana', 'Cox', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440046', 'ethan@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Ethan', 'Howard', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440047', 'faith@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Faith', 'Ward', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440048', 'gary@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Gary', 'Peterson', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440049', 'helen@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Helen', 'Gray', datetime('now'), datetime('now')),
('650e8400-e29b-41d4-a716-446655440050', 'isaac@example.com', '$2b$10$qxkx58xPLyvBPcB01onXIuAd/ofl96m8NttG9VlzSIajyojaWZxWW', 'Isaac', 'Ramirez', datetime('now'), datetime('now'));

-- Assign roles to users (using fixed role IDs from migration)
INSERT INTO user_roles_role (userId, roleId) VALUES
-- Admins (5 users)
('650e8400-e29b-41d4-a716-446655440001', '7c1c451c-5d56-4c9d-8b3d-f43a5e46b06f'),
('650e8400-e29b-41d4-a716-446655440002', '7c1c451c-5d56-4c9d-8b3d-f43a5e46b06f'),
('650e8400-e29b-41d4-a716-446655440003', '7c1c451c-5d56-4c9d-8b3d-f43a5e46b06f'),
('650e8400-e29b-41d4-a716-446655440004', '7c1c451c-5d56-4c9d-8b3d-f43a5e46b06f'),
('650e8400-e29b-41d4-a716-446655440005', '7c1c451c-5d56-4c9d-8b3d-f43a5e46b06f'),

-- Managers (10 users)
('650e8400-e29b-41d4-a716-446655440006', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440007', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440008', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440009', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440010', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440011', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440012', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440013', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440014', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),
('650e8400-e29b-41d4-a716-446655440015', '52aef89e-4ba0-4c6c-9c2c-3c9a2432f795'),

-- Regular Users (35 users)
('650e8400-e29b-41d4-a716-446655440016', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440017', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440018', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440019', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440020', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440021', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440022', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440023', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440024', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440025', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440026', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440027', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440028', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440029', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440030', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440031', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440032', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440033', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440034', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440035', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440036', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440037', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440038', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440039', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440040', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440041', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440042', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440043', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440044', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440045', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440046', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440047', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440048', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440049', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552'),
('650e8400-e29b-41d4-a716-446655440050', 'bdf7d1c7-8431-44e0-8f72-8f0bb7a64552');

-- Insert 50 sample tasks
INSERT INTO task (id, title, description, status, ownerId, createdAt, updatedAt) VALUES
('750e8400-e29b-41d4-a716-446655440001', 'Setup CI/CD Pipeline', 'Configure GitHub Actions for automated testing and deployment', 'in_progress', '650e8400-e29b-41d4-a716-446655440001', datetime('now', '-30 days'), datetime('now', '-2 days')),
('750e8400-e29b-41d4-a716-446655440002', 'Review Security Audit', 'Go through the security audit report and address critical issues', 'todo', '650e8400-e29b-41d4-a716-446655440002', datetime('now', '-25 days'), datetime('now', '-25 days')),
('750e8400-e29b-41d4-a716-446655440003', 'Database Migration Strategy', 'Plan and execute database schema migration to production', 'done', '650e8400-e29b-41d4-a716-446655440003', datetime('now', '-45 days'), datetime('now', '-40 days')),
('750e8400-e29b-41d4-a716-446655440004', 'Implement OAuth 2.0', 'Add OAuth 2.0 authentication with Google and GitHub providers', 'in_progress', '650e8400-e29b-41d4-a716-446655440004', datetime('now', '-20 days'), datetime('now', '-1 day')),
('750e8400-e29b-41d4-a716-446655440005', 'Performance Optimization', 'Optimize API response times and database queries', 'todo', '650e8400-e29b-41d4-a716-446655440005', datetime('now', '-15 days'), datetime('now', '-15 days')),
('750e8400-e29b-41d4-a716-446655440006', 'Sprint Planning Q1 2025', 'Organize and conduct sprint planning for Q1 2025', 'done', '650e8400-e29b-41d4-a716-446655440006', datetime('now', '-35 days'), datetime('now', '-32 days')),
('750e8400-e29b-41d4-a716-446655440007', 'Team Performance Reviews', 'Complete performance reviews for all team members', 'in_progress', '650e8400-e29b-41d4-a716-446655440007', datetime('now', '-28 days'), datetime('now', '-3 days')),
('750e8400-e29b-41d4-a716-446655440008', 'Hire Senior Backend Developer', 'Screen candidates and schedule interviews', 'in_progress', '650e8400-e29b-41d4-a716-446655440008', datetime('now', '-22 days'), datetime('now')),
('750e8400-e29b-41d4-a716-446655440009', 'API Rate Limiting', 'Implement rate limiting for public API endpoints', 'todo', '650e8400-e29b-41d4-a716-446655440009', datetime('now', '-18 days'), datetime('now', '-18 days')),
('750e8400-e29b-41d4-a716-446655440010', 'Code Review Guidelines', 'Create comprehensive code review guidelines for the team', 'done', '650e8400-e29b-41d4-a716-446655440010', datetime('now', '-40 days'), datetime('now', '-38 days')),
('750e8400-e29b-41d4-a716-446655440011', 'Implement User Dashboard', 'Create responsive dashboard with charts and statistics', 'in_progress', '650e8400-e29b-41d4-a716-446655440016', datetime('now', '-12 days'), datetime('now')),
('750e8400-e29b-41d4-a716-446655440012', 'Fix Login Page Bug', 'Resolve issue with login redirect on mobile devices', 'done', '650e8400-e29b-41d4-a716-446655440017', datetime('now', '-26 days'), datetime('now', '-24 days')),
('750e8400-e29b-41d4-a716-446655440013', 'Add Dark Mode Support', 'Implement dark mode toggle and theme switching', 'todo', '650e8400-e29b-41d4-a716-446655440018', datetime('now', '-8 days'), datetime('now', '-8 days')),
('750e8400-e29b-41d4-a716-446655440014', 'Write Unit Tests for Auth', 'Add unit tests for authentication module', 'in_progress', '650e8400-e29b-41d4-a716-446655440019', datetime('now', '-16 days'), datetime('now', '-2 days')),
('750e8400-e29b-41d4-a716-446655440015', 'Refactor API Endpoints', 'Clean up and standardize REST API endpoints', 'todo', '650e8400-e29b-41d4-a716-446655440020', datetime('now', '-10 days'), datetime('now', '-10 days')),
('750e8400-e29b-41d4-a716-446655440016', 'Design System Components', 'Create reusable UI components library', 'in_progress', '650e8400-e29b-41d4-a716-446655440021', datetime('now', '-24 days'), datetime('now', '-4 days')),
('750e8400-e29b-41d4-a716-446655440017', 'Update Dependencies', 'Update all npm packages to latest stable versions', 'done', '650e8400-e29b-41d4-a716-446655440022', datetime('now', '-50 days'), datetime('now', '-48 days')),
('750e8400-e29b-41d4-a716-446655440018', 'Implement Search Feature', 'Add full-text search with filtering and sorting', 'todo', '650e8400-e29b-41d4-a716-446655440023', datetime('now', '-14 days'), datetime('now', '-14 days')),
('750e8400-e29b-41d4-a716-446655440019', 'Setup Error Monitoring', 'Integrate Sentry for error tracking and monitoring', 'in_progress', '650e8400-e29b-41d4-a716-446655440024', datetime('now', '-19 days'), datetime('now', '-1 day')),
('750e8400-e29b-41d4-a716-446655440020', 'Create Email Templates', 'Design and implement email notification templates', 'done', '650e8400-e29b-41d4-a716-446655440025', datetime('now', '-38 days'), datetime('now', '-36 days')),
('750e8400-e29b-41d4-a716-446655440021', 'Optimize Image Loading', 'Implement lazy loading for images and optimize compression', 'in_progress', '650e8400-e29b-41d4-a716-446655440026', datetime('now', '-21 days'), datetime('now', '-5 days')),
('750e8400-e29b-41d4-a716-446655440022', 'Add Pagination Component', 'Create reusable pagination component with customizable options', 'todo', '650e8400-e29b-41d4-a716-446655440027', datetime('now', '-6 days'), datetime('now', '-6 days')),
('750e8400-e29b-41d4-a716-446655440023', 'API Documentation Update', 'Update API documentation to reflect recent changes', 'done', '650e8400-e29b-41d4-a716-446655440028', datetime('now', '-42 days'), datetime('now', '-39 days')),
('750e8400-e29b-41d4-a716-446655440024', 'Implement WebSocket Support', 'Add real-time communication using WebSockets', 'in_progress', '650e8400-e29b-41d4-a716-446655440029', datetime('now', '-17 days'), datetime('now', '-3 days')),
('750e8400-e29b-41d4-a716-446655440025', 'Database Backup Strategy', 'Design and implement automated database backup system', 'todo', '650e8400-e29b-41d4-a716-446655440030', datetime('now', '-11 days'), datetime('now', '-11 days')),
('750e8400-e29b-41d4-a716-446655440026', 'Mobile Responsive Design', 'Ensure all pages are mobile-responsive and accessible', 'in_progress', '650e8400-e29b-41d4-a716-446655440031', datetime('now', '-23 days'), datetime('now', '-6 days')),
('750e8400-e29b-41d4-a716-446655440027', 'Implement Caching Layer', 'Add Redis caching for frequently accessed data', 'todo', '650e8400-e29b-41d4-a716-446655440032', datetime('now', '-9 days'), datetime('now', '-9 days')),
('750e8400-e29b-41d4-a716-446655440028', 'User Activity Logging', 'Implement comprehensive user activity logging system', 'done', '650e8400-e29b-41d4-a716-446655440033', datetime('now', '-44 days'), datetime('now', '-41 days')),
('750e8400-e29b-41d4-a716-446655440029', 'Notification System', 'Build in-app notification system with push notifications', 'in_progress', '650e8400-e29b-41d4-a716-446655440034', datetime('now', '-27 days'), datetime('now', '-7 days')),
('750e8400-e29b-41d4-a716-446655440030', 'Payment Gateway Integration', 'Integrate Stripe for payment processing', 'todo', '650e8400-e29b-41d4-a716-446655440035', datetime('now', '-13 days'), datetime('now', '-13 days')),
('750e8400-e29b-41d4-a716-446655440031', 'Analytics Dashboard', 'Create analytics dashboard with key metrics and charts', 'in_progress', '650e8400-e29b-41d4-a716-446655440036', datetime('now', '-29 days'), datetime('now', '-8 days')),
('750e8400-e29b-41d4-a716-446655440032', 'Multi-language Support', 'Implement i18n for multiple language support', 'todo', '650e8400-e29b-41d4-a716-446655440037', datetime('now', '-7 days'), datetime('now', '-7 days')),
('750e8400-e29b-41d4-a716-446655440033', 'Export Data Functionality', 'Add ability to export data to CSV and Excel formats', 'done', '650e8400-e29b-41d4-a716-446655440038', datetime('now', '-46 days'), datetime('now', '-43 days')),
('750e8400-e29b-41d4-a716-446655440034', 'File Upload Improvements', 'Enhance file upload with drag-drop and progress bars', 'in_progress', '650e8400-e29b-41d4-a716-446655440039', datetime('now', '-31 days'), datetime('now', '-9 days')),
('750e8400-e29b-41d4-a716-446655440035', 'User Profile Management', 'Build comprehensive user profile management system', 'todo', '650e8400-e29b-41d4-a716-446655440040', datetime('now', '-5 days'), datetime('now', '-5 days')),
('750e8400-e29b-41d4-a716-446655440036', 'Two-Factor Authentication', 'Implement 2FA using TOTP and SMS', 'in_progress', '650e8400-e29b-41d4-a716-446655440041', datetime('now', '-33 days'), datetime('now', '-10 days')),
('750e8400-e29b-41d4-a716-446655440037', 'Automated Testing Suite', 'Create comprehensive E2E testing with Cypress', 'todo', '650e8400-e29b-41d4-a716-446655440042', datetime('now', '-4 days'), datetime('now', '-4 days')),
('750e8400-e29b-41d4-a716-446655440038', 'Content Management System', 'Build CMS for managing dynamic content', 'done', '650e8400-e29b-41d4-a716-446655440043', datetime('now', '-48 days'), datetime('now', '-45 days')),
('750e8400-e29b-41d4-a716-446655440039', 'API Versioning Strategy', 'Implement API versioning for backward compatibility', 'in_progress', '650e8400-e29b-41d4-a716-446655440044', datetime('now', '-34 days'), datetime('now', '-11 days')),
('750e8400-e29b-41d4-a716-446655440040', 'Monitoring Dashboard', 'Create system monitoring dashboard with alerts', 'todo', '650e8400-e29b-41d4-a716-446655440045', datetime('now', '-3 days'), datetime('now', '-3 days')),
('750e8400-e29b-41d4-a716-446655440041', 'Social Media Integration', 'Add social media sharing and OAuth login', 'in_progress', '650e8400-e29b-41d4-a716-446655440046', datetime('now', '-36 days'), datetime('now', '-12 days')),
('750e8400-e29b-41d4-a716-446655440042', 'Compliance Documentation', 'Prepare GDPR and SOC2 compliance documentation', 'todo', '650e8400-e29b-41d4-a716-446655440047', datetime('now', '-2 days'), datetime('now', '-2 days')),
('750e8400-e29b-41d4-a716-446655440043', 'Load Testing', 'Perform load testing and optimize for 10k concurrent users', 'done', '650e8400-e29b-41d4-a716-446655440048', datetime('now', '-52 days'), datetime('now', '-50 days')),
('750e8400-e29b-41d4-a716-446655440044', 'Microservices Architecture', 'Refactor monolith to microservices architecture', 'in_progress', '650e8400-e29b-41d4-a716-446655440049', datetime('now', '-37 days'), datetime('now', '-13 days')),
('750e8400-e29b-41d4-a716-446655440045', 'Admin Panel Enhancement', 'Add advanced features to admin panel', 'todo', '650e8400-e29b-41d4-a716-446655440050', datetime('now', '-1 day'), datetime('now', '-1 day')),
('750e8400-e29b-41d4-a716-446655440046', 'GraphQL API Implementation', 'Implement GraphQL API alongside REST', 'in_progress', '650e8400-e29b-41d4-a716-446655440006', datetime('now', '-39 days'), datetime('now', '-14 days')),
('750e8400-e29b-41d4-a716-446655440047', 'Customer Feedback System', 'Build system for collecting and analyzing feedback', 'todo', '650e8400-e29b-41d4-a716-446655440007', datetime('now', '-12 days'), datetime('now', '-12 days')),
('750e8400-e29b-41d4-a716-446655440048', 'SEO Optimization', 'Optimize application for search engines', 'done', '650e8400-e29b-41d4-a716-446655440008', datetime('now', '-54 days'), datetime('now', '-51 days')),
('750e8400-e29b-41d4-a716-446655440049', 'Blockchain Integration', 'Research and prototype blockchain integration', 'in_progress', '650e8400-e29b-41d4-a716-446655440009', datetime('now', '-41 days'), datetime('now', '-15 days')),
('750e8400-e29b-41d4-a716-446655440050', 'AI/ML Model Deployment', 'Deploy machine learning model for recommendations', 'todo', '650e8400-e29b-41d4-a716-446655440010', datetime('now', '-8 days'), datetime('now', '-8 days'));

-- Assign users to tasks (creating varied collaborations)
INSERT INTO task_assignees_user (taskId, userId) VALUES
-- Task 1: CI/CD Pipeline
('750e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440016'),
('750e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440017'),
('750e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440006'),

-- Task 2: Security Audit
('750e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440018'),
('750e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440007'),

-- Task 3: Database Migration
('750e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440019'),
('750e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440020'),

-- Task 4: OAuth Implementation
('750e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440021'),
('750e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440022'),
('750e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440023'),

-- Task 5: Performance Optimization
('750e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440008'),
('750e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440024'),

-- Task 6: Sprint Planning
('750e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440025'),
('750e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440026'),

-- Task 7: Performance Reviews
('750e8400-e29b-41d4-a716-446655440007', '650e8400-e29b-41d4-a716-446655440001'),

-- Task 8: Hiring
('750e8400-e29b-41d4-a716-446655440008', '650e8400-e29b-41d4-a716-446655440027'),
('750e8400-e29b-41d4-a716-446655440008', '650e8400-e29b-41d4-a716-446655440028'),

-- Task 9: Rate Limiting
('750e8400-e29b-41d4-a716-446655440009', '650e8400-e29b-41d4-a716-446655440029'),
('750e8400-e29b-41d4-a716-446655440009', '650e8400-e29b-41d4-a716-446655440030'),

-- Task 10: Code Review Guidelines
('750e8400-e29b-41d4-a716-446655440010', '650e8400-e29b-41d4-a716-446655440009'),
('750e8400-e29b-41d4-a716-446655440010', '650e8400-e29b-41d4-a716-446655440031'),

-- Task 11: Dashboard
('750e8400-e29b-41d4-a716-446655440011', '650e8400-e29b-41d4-a716-446655440032'),
('750e8400-e29b-41d4-a716-446655440011', '650e8400-e29b-41d4-a716-446655440033'),

-- Task 12: Login Bug
('750e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440034'),

-- Task 13: Dark Mode
('750e8400-e29b-41d4-a716-446655440013', '650e8400-e29b-41d4-a716-446655440035'),
('750e8400-e29b-41d4-a716-446655440013', '650e8400-e29b-41d4-a716-446655440036'),
('750e8400-e29b-41d4-a716-446655440013', '650e8400-e29b-41d4-a716-446655440010'),

-- Task 14: Unit Tests
('750e8400-e29b-41d4-a716-446655440014', '650e8400-e29b-41d4-a716-446655440037'),
('750e8400-e29b-41d4-a716-446655440014', '650e8400-e29b-41d4-a716-446655440011'),

-- Task 15: API Refactor
('750e8400-e29b-41d4-a716-446655440015', '650e8400-e29b-41d4-a716-446655440038'),
('750e8400-e29b-41d4-a716-446655440015', '650e8400-e29b-41d4-a716-446655440039'),

-- Task 16: Design System
('750e8400-e29b-41d4-a716-446655440016', '650e8400-e29b-41d4-a716-446655440040'),
('750e8400-e29b-41d4-a716-446655440016', '650e8400-e29b-41d4-a716-446655440041'),
('750e8400-e29b-41d4-a716-446655440016', '650e8400-e29b-41d4-a716-446655440042'),

-- Task 17: Dependencies
('750e8400-e29b-41d4-a716-446655440017', '650e8400-e29b-41d4-a716-446655440043'),

-- Task 18: Search Feature
('750e8400-e29b-41d4-a716-446655440018', '650e8400-e29b-41d4-a716-446655440044'),
('750e8400-e29b-41d4-a716-446655440018', '650e8400-e29b-41d4-a716-446655440045'),

-- Task 19: Error Monitoring
('750e8400-e29b-41d4-a716-446655440019', '650e8400-e29b-41d4-a716-446655440012'),
('750e8400-e29b-41d4-a716-446655440019', '650e8400-e29b-41d4-a716-446655440046'),

-- Task 20: Email Templates
('750e8400-e29b-41d4-a716-446655440020', '650e8400-e29b-41d4-a716-446655440047'),

-- Task 21: Image Optimization
('750e8400-e29b-41d4-a716-446655440021', '650e8400-e29b-41d4-a716-446655440048'),
('750e8400-e29b-41d4-a716-446655440021', '650e8400-e29b-41d4-a716-446655440049'),

-- Task 22: Pagination
('750e8400-e29b-41d4-a716-446655440022', '650e8400-e29b-41d4-a716-446655440050'),

-- Task 23: API Docs
('750e8400-e29b-41d4-a716-446655440023', '650e8400-e29b-41d4-a716-446655440013'),
('750e8400-e29b-41d4-a716-446655440023', '650e8400-e29b-41d4-a716-446655440016'),

-- Task 24: WebSocket
('750e8400-e29b-41d4-a716-446655440024', '650e8400-e29b-41d4-a716-446655440017'),
('750e8400-e29b-41d4-a716-446655440024', '650e8400-e29b-41d4-a716-446655440018'),
('750e8400-e29b-41d4-a716-446655440024', '650e8400-e29b-41d4-a716-446655440019'),

-- Task 25: Database Backup
('750e8400-e29b-41d4-a716-446655440025', '650e8400-e29b-41d4-a716-446655440014'),
('750e8400-e29b-41d4-a716-446655440025', '650e8400-e29b-41d4-a716-446655440020'),

-- Task 26: Responsive Design
('750e8400-e29b-41d4-a716-446655440026', '650e8400-e29b-41d4-a716-446655440021'),
('750e8400-e29b-41d4-a716-446655440026', '650e8400-e29b-41d4-a716-446655440022'),

-- Task 27: Caching
('750e8400-e29b-41d4-a716-446655440027', '650e8400-e29b-41d4-a716-446655440023'),
('750e8400-e29b-41d4-a716-446655440027', '650e8400-e29b-41d4-a716-446655440015'),

-- Task 28: Activity Logging
('750e8400-e29b-41d4-a716-446655440028', '650e8400-e29b-41d4-a716-446655440024'),

-- Task 29: Notifications
('750e8400-e29b-41d4-a716-446655440029', '650e8400-e29b-41d4-a716-446655440025'),
('750e8400-e29b-41d4-a716-446655440029', '650e8400-e29b-41d4-a716-446655440026'),
('750e8400-e29b-41d4-a716-446655440029', '650e8400-e29b-41d4-a716-446655440027'),

-- Task 30: Payment Gateway
('750e8400-e29b-41d4-a716-446655440030', '650e8400-e29b-41d4-a716-446655440002'),
('750e8400-e29b-41d4-a716-446655440030', '650e8400-e29b-41d4-a716-446655440028'),

-- Task 31: Analytics
('750e8400-e29b-41d4-a716-446655440031', '650e8400-e29b-41d4-a716-446655440029'),
('750e8400-e29b-41d4-a716-446655440031', '650e8400-e29b-41d4-a716-446655440030'),

-- Task 32: i18n
('750e8400-e29b-41d4-a716-446655440032', '650e8400-e29b-41d4-a716-446655440031'),
('750e8400-e29b-41d4-a716-446655440032', '650e8400-e29b-41d4-a716-446655440032'),

-- Task 33: Export Data
('750e8400-e29b-41d4-a716-446655440033', '650e8400-e29b-41d4-a716-446655440033'),

-- Task 34: File Upload
('750e8400-e29b-41d4-a716-446655440034', '650e8400-e29b-41d4-a716-446655440034'),
('750e8400-e29b-41d4-a716-446655440034', '650e8400-e29b-41d4-a716-446655440035'),

-- Task 35: User Profile
('750e8400-e29b-41d4-a716-446655440035', '650e8400-e29b-41d4-a716-446655440036'),
('750e8400-e29b-41d4-a716-446655440035', '650e8400-e29b-41d4-a716-446655440037'),
('750e8400-e29b-41d4-a716-446655440035', '650e8400-e29b-41d4-a716-446655440038'),

-- Task 36: 2FA
('750e8400-e29b-41d4-a716-446655440036', '650e8400-e29b-41d4-a716-446655440003'),
('750e8400-e29b-41d4-a716-446655440036', '650e8400-e29b-41d4-a716-446655440039'),

-- Task 37: E2E Testing
('750e8400-e29b-41d4-a716-446655440037', '650e8400-e29b-41d4-a716-446655440040'),
('750e8400-e29b-41d4-a716-446655440037', '650e8400-e29b-41d4-a716-446655440041'),

-- Task 38: CMS
('750e8400-e29b-41d4-a716-446655440038', '650e8400-e29b-41d4-a716-446655440042'),

-- Task 39: API Versioning
('750e8400-e29b-41d4-a716-446655440039', '650e8400-e29b-41d4-a716-446655440043'),
('750e8400-e29b-41d4-a716-446655440039', '650e8400-e29b-41d4-a716-446655440044'),

-- Task 40: Monitoring
('750e8400-e29b-41d4-a716-446655440040', '650e8400-e29b-41d4-a716-446655440004'),
('750e8400-e29b-41d4-a716-446655440040', '650e8400-e29b-41d4-a716-446655440045'),

-- Task 41: Social Media
('750e8400-e29b-41d4-a716-446655440041', '650e8400-e29b-41d4-a716-446655440046'),
('750e8400-e29b-41d4-a716-446655440041', '650e8400-e29b-41d4-a716-446655440047'),

-- Task 42: Compliance
('750e8400-e29b-41d4-a716-446655440042', '650e8400-e29b-41d4-a716-446655440005'),

-- Task 43: Load Testing
('750e8400-e29b-41d4-a716-446655440043', '650e8400-e29b-41d4-a716-446655440048'),

-- Task 44: Microservices
('750e8400-e29b-41d4-a716-446655440044', '650e8400-e29b-41d4-a716-446655440006'),
('750e8400-e29b-41d4-a716-446655440044', '650e8400-e29b-41d4-a716-446655440016'),
('750e8400-e29b-41d4-a716-446655440044', '650e8400-e29b-41d4-a716-446655440017'),

-- Task 45: Admin Panel
('750e8400-e29b-41d4-a716-446655440045', '650e8400-e29b-41d4-a716-446655440049'),
('750e8400-e29b-41d4-a716-446655440045', '650e8400-e29b-41d4-a716-446655440050'),

-- Task 46: GraphQL
('750e8400-e29b-41d4-a716-446655440046', '650e8400-e29b-41d4-a716-446655440007'),
('750e8400-e29b-41d4-a716-446655440046', '650e8400-e29b-41d4-a716-446655440018'),

-- Task 47: Feedback System
('750e8400-e29b-41d4-a716-446655440047', '650e8400-e29b-41d4-a716-446655440008'),
('750e8400-e29b-41d4-a716-446655440047', '650e8400-e29b-41d4-a716-446655440019'),

-- Task 48: SEO
('750e8400-e29b-41d4-a716-446655440048', '650e8400-e29b-41d4-a716-446655440020'),

-- Task 49: Blockchain
('750e8400-e29b-41d4-a716-446655440049', '650e8400-e29b-41d4-a716-446655440009'),
('750e8400-e29b-41d4-a716-446655440049', '650e8400-e29b-41d4-a716-446655440021'),
('750e8400-e29b-41d4-a716-446655440049', '650e8400-e29b-41d4-a716-446655440022'),

-- Task 50: ML Model
('750e8400-e29b-41d4-a716-446655440050', '650e8400-e29b-41d4-a716-446655440010'),
('750e8400-e29b-41d4-a716-446655440050', '650e8400-e29b-41d4-a716-446655440023');

-- Add some sample attachments
INSERT INTO task_attachment (id, filename, mimetype, path, taskId, createdAt, updatedAt) VALUES
('850e8400-e29b-41d4-a716-446655440001', 'ci-cd-config.yaml', 'text/yaml', '/uploads/ci-cd-config.yaml', '750e8400-e29b-41d4-a716-446655440001', datetime('now', '-30 days'), datetime('now', '-30 days')),
('850e8400-e29b-41d4-a716-446655440002', 'security-audit-report.pdf', 'application/pdf', '/uploads/security-audit-report.pdf', '750e8400-e29b-41d4-a716-446655440002', datetime('now', '-25 days'), datetime('now', '-25 days')),
('850e8400-e29b-41d4-a716-446655440003', 'migration-plan.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', '/uploads/migration-plan.docx', '750e8400-e29b-41d4-a716-446655440003', datetime('now', '-45 days'), datetime('now', '-45 days')),
('850e8400-e29b-41d4-a716-446655440004', 'oauth-flow-diagram.png', 'image/png', '/uploads/oauth-flow-diagram.png', '750e8400-e29b-41d4-a716-446655440004', datetime('now', '-20 days'), datetime('now', '-20 days')),
('850e8400-e29b-41d4-a716-446655440005', 'performance-metrics.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '/uploads/performance-metrics.xlsx', '750e8400-e29b-41d4-a716-446655440005', datetime('now', '-15 days'), datetime('now', '-15 days')),
('850e8400-e29b-41d4-a716-446655440006', 'sprint-retrospective.pdf', 'application/pdf', '/uploads/sprint-retrospective.pdf', '750e8400-e29b-41d4-a716-446655440006', datetime('now', '-32 days'), datetime('now', '-32 days')),
('850e8400-e29b-41d4-a716-446655440007', 'dashboard-mockup.fig', 'application/octet-stream', '/uploads/dashboard-mockup.fig', '750e8400-e29b-41d4-a716-446655440011', datetime('now', '-12 days'), datetime('now', '-12 days')),
('850e8400-e29b-41d4-a716-446655440008', 'design-system-guide.pdf', 'application/pdf', '/uploads/design-system-guide.pdf', '750e8400-e29b-41d4-a716-446655440016', datetime('now', '-24 days'), datetime('now', '-24 days')),
('850e8400-e29b-41d4-a716-446655440009', 'api-documentation.html', 'text/html', '/uploads/api-documentation.html', '750e8400-e29b-41d4-a716-446655440023', datetime('now', '-39 days'), datetime('now', '-39 days')),
('850e8400-e29b-41d4-a716-446655440010', 'load-test-results.pdf', 'application/pdf', '/uploads/load-test-results.pdf', '750e8400-e29b-41d4-a716-446655440043', datetime('now', '-50 days'), datetime('now', '-50 days'));
