-- ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- ┃
-- ┃──┨ vania.sql [Ver.2022_05_29] ┃
-- ┃
-- ┠──┨ Copyright(C) https://github.com/yano-kentaro
-- ┠──┨ https://www.kengineer.dev
-- ┠──┨ 開発開始日：2022_05_29
-- ┃
-- ┃──┨ vania データベース ┃
-- ┃
-- ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- ===================================================|0
--                      vania DB
-- ==========================================|2022_05_29

-- vania DBが存在する場合削除
DROP DATABASE IF EXISTS vania;

-- vania DB作成開始
CREATE DATABASE IF NOT EXISTS vania
    DEFAULT CHARACTER SET utf8
    COLLATE utf8_general_ci
;

-- ===================================================|0
--                      $1 テーブル
-- ==========================================|2022_05_29

-- $1 テーブルが存在する場合削除
DROP TABLE IF EXISTS $2.$1;

-- vania DB作成開始
CREATE TABLE IF NOT EXISTS $2.$1(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

-- ===================================================|0
--                      groups テーブル
-- ==========================================|2022_05_29

-- groups テーブルが存在する場合削除
DROP TABLE IF EXISTS vania.groups;

-- vania DB作成開始
CREATE TABLE IF NOT EXISTS vania.groups(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

-- ===================================================|0
--                      groups テーブル
-- ==========================================|2022_05_29

-- groups テーブルが存在する場合削除
DROP TABLE IF EXISTS vania.groups;

-- vania DB作成開始
CREATE TABLE IF NOT EXISTS vania.groups(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    
);