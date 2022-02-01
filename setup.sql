CREATE TABLE reservations (
	  id			    uuid,
  	name		    varchar(250),
  	res_status	integer
);

INSERT INTO reservations values ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Foo', 2);
INSERT INTO reservations values ('4ad4d2e2-55d6-4282-8010-7b633d6170b9', 'Bar', 1);
INSERT INTO reservations values ('5a90571e-c8ac-4984-83bd-c2b23fa3dae6', 'Baz', 0);