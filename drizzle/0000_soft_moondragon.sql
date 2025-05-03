CREATE TABLE `areas_table` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`cvId` int unsigned NOT NULL,
	`name` varchar(255) NOT NULL,
	`links` json,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `areas_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `cv_table` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`userId` varchar(255) NOT NULL,
	`info_name` varchar(255) NOT NULL,
	`info_profilePicture` varchar(255),
	`info_roles` json,
	`info_bio` json,
	`contacts_email` varchar(255),
	`contacts_phone` varchar(20),
	`contacts_github` varchar(255),
	`contacts_linkedin` varchar(255),
	`skills` json,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `cv_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `experiences_table` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`areaId` int unsigned NOT NULL,
	`organization` varchar(255),
	`description` json,
	`location` varchar(255),
	`roles` json,
	`links` json,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `experiences_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `roles_table` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`startDate` varchar(255) NOT NULL,
	`endDate` varchar(255),
	`description` json,
	`links` json,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `roles_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users_table` (
	`email` varchar(255) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `users_table_email` PRIMARY KEY(`email`)
);
