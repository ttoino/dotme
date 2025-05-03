CREATE TABLE `cv_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`userId` varchar(255) NOT NULL,
	`info_name` varchar(255) NOT NULL DEFAULT 'New User',
	`info_profilePicture` varchar(255),
	`info_roles` json,
	`info_bio` json,
	`contacts_email` varchar(255),
	`contacts_phone` varchar(20),
	`contacts_github` varchar(255),
	`contacts_linkedin` varchar(255),
	`areas` json,
	`skills` json,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `cv_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `portfolio_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`userId` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`foreignId` varchar(255) NOT NULL,
	`x` int unsigned NOT NULL,
	`y` int unsigned NOT NULL,
	`width` int unsigned NOT NULL,
	`height` int unsigned NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `portfolio_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `template_user_relation` (
	`userId` varchar(255) NOT NULL,
	`templateId` bigint unsigned NOT NULL,
	CONSTRAINT `template_user_relation_userId_templateId_pk` PRIMARY KEY(`userId`,`templateId`)
);
--> statement-breakpoint
CREATE TABLE `templates_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`ownerId` varchar(255),
	`name` varchar(255) NOT NULL,
	`description` json NOT NULL,
	`image` varchar(255) NOT NULL,
	`category` varchar(255) NOT NULL,
	`price` int unsigned NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `templates_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users_table` (
	`email` varchar(255) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`deletedAt` timestamp,
	CONSTRAINT `users_table_email` PRIMARY KEY(`email`)
);
