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
ALTER TABLE `templates_table` ADD `createdAt` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE `templates_table` ADD `updatedAt` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `templates_table` ADD `deletedAt` timestamp;