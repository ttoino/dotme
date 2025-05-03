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
	CONSTRAINT `templates_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `__new_cv_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
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
INSERT INTO `__new_cv_table`(`id`, `userId`, `info_name`, `info_profilePicture`, `info_roles`, `info_bio`, `contacts_email`, `contacts_phone`, `contacts_github`, `contacts_linkedin`, `skills`, `createdAt`, `updatedAt`, `deletedAt`) SELECT `id`, `userId`, `info_name`, `info_profilePicture`, `info_roles`, `info_bio`, `contacts_email`, `contacts_phone`, `contacts_github`, `contacts_linkedin`, `skills`, `createdAt`, `updatedAt`, `deletedAt` FROM `cv_table`;--> statement-breakpoint
DROP TABLE `cv_table`;--> statement-breakpoint
ALTER TABLE `__new_cv_table` RENAME TO `cv_table`;