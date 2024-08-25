CREATE TABLE voters (
    voter_id INT AUTO_INCREMENT PRIMARY KEY,  
    voter_number VARCHAR(20) UNIQUE NOT NULL, -- Unique voter number assigned to each voter
    first_name VARCHAR(50) NOT NULL,          -- Voter's first name
    last_name VARCHAR(50) NOT NULL,           -- Voter's last name
    email VARCHAR(100) NOT NULL UNIQUE,       -- Voter's email address, must be unique
    phone_number VARCHAR(20),                 -- Optional phone number
    address TEXT,                             -- Optional address
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of when the voter registered
    has_voted BOOLEAN DEFAULT FALSE           -- Indicates if the voter has cast their vote
);
-- Sample data insertion
INSERT INTO voters (voter_number, first_name, last_name, email, phone_number, address) 
VALUES 
('A1235411', 'Abdulkarim', 'Ado', 'abdulkarim@gmail.com', '08026870415', '12 Modoji, Katsina, Nigeria'),
('A1235611', 'Abdullahi', 'Nura', 'abdullahi@gmail.com', '08145673444', '50 Layout, Katsina, Nigeria');
('A1235711', 'Abubakar', 'Usman', 'abu@gmail.com', '08148371388', '5 GRA, Katsina, Nigeria');
('A1235811', 'Ado', 'usman', 'usmanado@gmail.com', '08132504417', '15 NEW GRA, Katsina, Nigeria');
('A1235911', 'Asiya', 'sani', 'danmusaasia@gmail.com', '08065060884', '1 Dan daka, Katsina, Nigeria');
('A1236011', 'Maryam', 'Ibrahim', 'maryam@gmail.com', '08145673444', '3 Barhim, Katsina, Nigeria');
('A1236211', 'Usman', 'Ahamad', 'imam@gmail.com', '08145673444', '120 Sauduana, Katsina, Nigeria');