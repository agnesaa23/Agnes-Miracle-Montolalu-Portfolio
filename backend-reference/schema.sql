-- Database Schema for Portfolio Application

CREATE TABLE profiles (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    subtitle TEXT,
    role VARCHAR(255) NOT NULL,
    sub_role VARCHAR(255),
    hero_image VARCHAR(255),
    about_title VARCHAR(255),
    about_description_1 TEXT,
    about_description_2 TEXT,
    about_image_1 VARCHAR(255),
    about_image_2 VARCHAR(255),
    contact_phone VARCHAR(50),
    contact_instagram VARCHAR(255),
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE profile_stats (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    profile_id BIGINT UNSIGNED NOT NULL,
    value VARCHAR(255) NOT NULL,
    label VARCHAR(255) NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE TABLE social_links (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    profile_id BIGINT UNSIGNED NOT NULL,
    handle VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE TABLE skills (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    icon VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE skill_bullets (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    skill_id BIGINT UNSIGNED NOT NULL,
    bullet_text VARCHAR(255) NOT NULL,
    FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE
);

CREATE TABLE achievements (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    display_id VARCHAR(10) NOT NULL, -- e.g., "01", "02"
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE projects (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    grid_span VARCHAR(100) DEFAULT 'col-span-1', -- Tailwind classes for layout
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

-- Insert Initial Data (Matching the mock data in React)
INSERT INTO profiles (id, name, last_name, title, subtitle, role, sub_role, hero_image, about_title, about_description_1, about_description_2, about_image_1, about_image_2, contact_phone, contact_instagram) VALUES
(1, 'Agnes Miracle', 'Montolalu', 'XII B Student at SMAK Frateran Surabaya', 'Turning passion into real opportunities.', 'Entrepreneur', 'Creative Artist & Student', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop', 'Driven by Excellence & Creativity', 'A 12th-grade student from class XII B at SMAK Frateran Surabaya. During my academic journey, I achieved Summa Cum Laude in 11th grade.', 'Currently, I am actively pursuing multiple creative and entrepreneurial paths, believing in growth through real-world experience. My journey is a blend of rigorous academic standards and fluid artistic expression.', 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', '087824042008', '@agnesmiracle');

INSERT INTO profile_stats (profile_id, value, label) VALUES
(1, 'Summa', 'Cum Laude Achievement'),
(1, 'XII B', 'Academic Class');

INSERT INTO social_links (profile_id, handle, type) VALUES
(1, '@nails.byamm', 'Business'),
(1, '@muse.byamm', 'Modeling'),
(1, '@am.oments', 'Photography');

INSERT INTO skills (id, title, icon, description) VALUES
(1, 'Press-On Nails Business', 'brush', 'Running AMM Nails, creating and selling custom press-on nails. Successfully sold 200+ sets to happy clients.'),
(2, 'Makeup Muse & Model', 'face', 'Collaborating with professional makeup artists for creative projects since 2025. Completed dozens of high-end modeling projects.'),
(3, 'Professional Photographer', 'camera', 'Passionate freelance photographer specializing in Sweet Seventeen, Prewedding, and Yearbook shoots.');

INSERT INTO skill_bullets (skill_id, bullet_text) VALUES
(1, 'Custom Designs'), (1, '200+ Sales'),
(2, 'Professional Portfolios'), (2, 'Editorial Projects'),
(3, 'Sweet Seventeen'), (3, 'Prewedding Sets');

INSERT INTO achievements (display_id, title, subtitle, sort_order) VALUES
('01', 'Summa Cum Laude', 'Academic Distinction - Grade 11', 1),
('02', 'Gold Medal - Nusantara Student Olympiad', 'PKN Category (2024)', 2),
('03', 'Gold Medal - Young Genius Competition', 'English Category (2023)', 3),
('04', 'Gold Medal - Best Indonesian Student Competition', 'Bahasa Indonesia Category (2024)', 4),
('05', 'Silver Medal - Indonesian Smart Youth Competition', 'English Category (2023)', 5);

INSERT INTO projects (title, category, image, grid_span, sort_order) VALUES
('AMM Nails Portfolio', 'Business', 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1000&auto=format&fit=crop', 'col-span-1 md:col-span-2 row-span-2', 1),
('ALIVE Camp 2024', 'Leadership', 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop', 'col-span-1 md:col-span-2', 2),
('Muse Projects', 'Modeling', 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop', 'col-span-1', 3),
('Client Shoots', 'Freelance', 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop', 'col-span-1', 4);
