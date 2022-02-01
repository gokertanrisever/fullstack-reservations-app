CREATE TABLE reservations (
	  id			    uuid,
  	name		    varchar(250),
  	res_status	integer
);

INSERT INTO reservations values ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Foo', 0);
INSERT INTO reservations values ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'Bar', 1);
INSERT INTO reservations values ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 'Baz', 2);