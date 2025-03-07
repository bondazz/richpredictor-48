
-- RichPredict Database Schema

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Settings Table
CREATE TABLE IF NOT EXISTS settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  site_name VARCHAR(100) NOT NULL DEFAULT 'RichPredict',
  site_url VARCHAR(255) NOT NULL DEFAULT 'https://richpredict.com',
  maintenance_mode BOOLEAN NOT NULL DEFAULT 0,
  allow_registration BOOLEAN NOT NULL DEFAULT 1,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Predictions Table
CREATE TABLE IF NOT EXISTS predictions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  league VARCHAR(100) NOT NULL,
  home_team VARCHAR(100) NOT NULL,
  away_team VARCHAR(100) NOT NULL,
  match_date DATE NOT NULL,
  match_time TIME NOT NULL,
  stadium VARCHAR(100),
  home_win_probability INT NOT NULL,
  draw_probability INT NOT NULL,
  away_win_probability INT NOT NULL,
  prediction VARCHAR(100) NOT NULL,
  odd DECIMAL(5,2) NOT NULL,
  is_premium BOOLEAN NOT NULL DEFAULT 0,
  category ENUM('general', 'under_over', 'correct_score') NOT NULL DEFAULT 'general',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Premium Stats Table
CREATE TABLE IF NOT EXISTS premium_stats (
  id INT AUTO_INCREMENT PRIMARY KEY,
  match_date DATE NOT NULL,
  prediction VARCHAR(100) NOT NULL,
  odd DECIMAL(5,2) NOT NULL,
  result ENUM('win', 'loss') NOT NULL,
  profit DECIMAL(8,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Default Admin User (username: admin, password: admin123)
INSERT INTO users (username, password, email, role) 
VALUES ('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@richpredict.com', 'admin')
ON DUPLICATE KEY UPDATE username = 'admin';

-- Insert Default Settings
INSERT INTO settings (site_name, site_url) 
VALUES ('RichPredict', 'https://richpredict.com')
ON DUPLICATE KEY UPDATE id = id;
