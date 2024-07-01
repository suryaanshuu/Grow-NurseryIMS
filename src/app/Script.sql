create table plant (	
	name varchar(75) not null,
	batch_no int not null,
	serial_no int not null,
	primary key(name, batch_no, serial_no),
	water varchar(10),
	sunlight varchar(10),
	lifespan int,
	height real,
	fruit_nut char(1),
	soil_ph real,
	temperature real,
	fertilizer varchar(25),
	pest varchar(75),
	comp_plants varchar(75),
	UNIQUE (name),
	UNIQUE (batch_no)
);

create table customer ( 
	cid int primary key,
	name varchar(75),
	phone int,
	email varchar(75),
	age int
);

create table supplier ( 
	sid int primary key,
	name varchar(75),
	phone int,
	email varchar(75),
	address varchar(150),
	lead_time interval
);

create table stock ( 	
	pl_name VARCHAR(75) NOT NULL REFERENCES plant(name),
	batch_no INT NOT null REFERENCES plant(batch_no),
	loc VARCHAR(25),
	stock INT,
	PRIMARY KEY(pl_name, batch_no)
);	

create table pricing ( 
	pl_name varchar(75)NOT NULL REFERENCES plant(name),
	batch_no INT NOT null REFERENCES plant(batch_no),
	PRIMARY KEY(pl_name, batch_no),
	units int,
	unit_price real,
	total_price real,
	tax real
);

create table seed (	
	pl_name varchar(75) NOT NULL REFERENCES plant(name),
	sid int references supplier(sid),
	quantity int,
	price real,
	germination interval,
	temp real,
	humidity varchar(10),
	prop_time interval,
	expiration_date date,
	primary key(sid, pl_name)
);


INSERT INTO plant (name, batch_no, serial_no, water, sunlight, lifespan, height, fruit_nut, soil_ph, temperature, fertilizer, pest, comp_plants)
VALUES ('Rose', 1, 101, 'Moderate', 'Full Sun', 5, 1.2, 'Y', 6.5, 20.0, 'Organic', 'Aphids', 'Lavender');

select * from plant


