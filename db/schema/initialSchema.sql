CREATE TABLE public.user (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  gender VARCHAR(50),
  birth_date DATE,
  document_type VARCHAR(50),
  phone BIGINT,
  direction TEXT,
  role INT NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE location (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  postal_codes VARCHAR(255) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hotel (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  starts INT NOT NULL,
  state INT NOT NULL,
  location_id INT,
  CONSTRAINT fk_location
    FOREIGN KEY(location_id) 
    REFERENCES location(id)
);

CREATE TABLE room (
  id SERIAL PRIMARY KEY,
  area INT NOT NULL,
  capacity INT NOT NULL,
  state INT NOT NULL,
  description TEXT,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  hotel_id INT,
  CONSTRAINT fk_hotel
    FOREIGN KEY(hotel_id) 
    REFERENCES hotel(id)
);

CREATE TABLE reservation (
  id SERIAL PRIMARY KEY,
  guest_name VARCHAR(255) NOT NULL,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  room_id INT,
  CONSTRAINT fk_room
    FOREIGN KEY(room_id) 
    REFERENCES room(id)
);

CREATE TABLE service (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  emoji VARCHAR(255) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hotel_service (
  hotel_id INT,
  service_id INT,
  CONSTRAINT fk_hotel
    FOREIGN KEY(hotel_id) 
    REFERENCES hotel(id),
  CONSTRAINT fk_service
    FOREIGN KEY(service_id) 
    REFERENCES service(id),
  PRIMARY KEY (hotel_id, service_id)
);

create TABLE role (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description VARCHAR(255),
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hotel_role (
  hotel_id INT,
  role_id INT,
  CONSTRAINT fk_hotel
    FOREIGN KEY(hotel_id) 
    REFERENCES hotel(id),
  CONSTRAINT fk_role
    FOREIGN KEY(role_id) 
    REFERENCES role(id),
  PRIMARY KEY (hotel_id, role_id)
);
