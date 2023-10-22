-- Duplicate this INSERT statement for each city
INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Bogotá', 'Cundinamarca', 'Colombia', '54321', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Medellín', 'Antioquia', 'Colombia', '67890', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Cali', 'Valle del Cauca', 'Colombia', '13579', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Barranquilla', 'Atlántico', 'Colombia', '24680', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Cartagena', 'Bolívar', 'Colombia', '86420', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Santa Marta', 'Magdalena', 'Colombia', '97531', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Manizales', 'Caldas', 'Colombia', '75319', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Pasto', 'Nariño', 'Colombia', '41876', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Neiva', 'Huila', 'Colombia', '56789', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Villavicencio', 'Meta', 'Colombia', '98765', now());

INSERT INTO public."location"
(id, city, state, country, "postalCodes", "createAt")
VALUES(nextval('location_id_seq'::regclass), 'Bucaramanga', 'Santander', 'Colombia', '680001', now());


-- Add more cities as needed
