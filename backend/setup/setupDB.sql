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

INSERT INTO user (username, password, email, role)
VALUES ('joshname', 'joshpass', 'josh@josh.co.uk', 'admin'),
       ('garryname', 'garrypass', 'garry@garry.co.uk', 'user');
