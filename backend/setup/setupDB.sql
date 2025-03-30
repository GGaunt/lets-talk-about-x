DROP TABLE IF EXISTS `user_post`;
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user`
(
    `id`       bigint       NOT NULL AUTO_INCREMENT,
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


CREATE TABLE IF NOT EXISTS `user_post`
(
    `id`         bigint       NOT NULL AUTO_INCREMENT,
    `user_id`    bigint       NOT NULL,
    `content`    text         NOT NULL,
    `deleted_at` datetime     NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

INSERT INTO `user_post` (user_id, content, deleted_at)
VALUES (1, 'This is a post by Josh (cool)', NULL),
       (1, 'This is a post by Josh (mediocre)', now()),
       (2, 'This is a post by Garry (bad)', now());

-- SELECT * FROM user;
-- SELECT * FROM user_post;

SELECT u.id AS user_id, u.username, up.content

FROM user AS u
JOIN user_post AS up ON u.id = up.user_id;