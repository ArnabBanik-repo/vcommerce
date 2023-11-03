CREATE TABLE user (
    roll CHAR(9) PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    roll CHAR(5) DEFAULT 'user',
    password_changed_at TIMESTAMP,
    CHECK (CHAR_LENGTH(password) >= 8),
    CHECK (email LIKE '%@vitstudent.ac.in') 
);

CREATE TABLE favourites (
  user_id char(9),
  product_id varchar(50),
  PRIMARY KEY(user_id, product_id),
  FOREIGN KEY(user_id) REFERENCES user(roll),
  ON DELETE CASCADE
);

CREATE INDEX idx_favourites_user_product ON favourites (user_id, product_id);
