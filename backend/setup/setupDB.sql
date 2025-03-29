DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user`
(
    `id`       int(11)      NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email`    varchar(255) NOT NULL,
    `role`     varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

INSERT INTO `user` (username, password, email, role)
VALUES ('joshname', 'joshpass', 'josh@josh.co.uk', 'admin'),
       ('garryname', 'garrypass', 'garry@garry.co.uk', 'user');


DROP TABLE IF EXISTS `user_post`;
CREATE TABLE IF NOT EXISTS `user_post`
(
    `id`      int(11)      NOT NULL AUTO_INCREMENT,
    `user_id` int(11)      NOT NULL,
    `content` text         NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

INSERT INTO `user_post` (user_id, content)
VALUES (1, 'This is a post by Josh (cool)'),
       (2, 'This is a post by Garry (bad)');