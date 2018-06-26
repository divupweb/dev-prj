-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Июн 26 2018 г., 13:10
-- Версия сервера: 8.0.11
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `dev-prj`
--

-- --------------------------------------------------------

--
-- Структура таблицы `menu_data`
--

CREATE TABLE IF NOT EXISTS `menu_data` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `href` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `menu_data`
--

INSERT INTO `menu_data` (`id`, `title`, `href`, `image`, `description`) VALUES
(1, 'Обо мне', '#1', 'url(../../../assets/images/menu-images/about-me.jpg)', 'В данном разделе вы можете получить краткую информацию обо мне.'),
(2, 'Обратная связь', '#2', 'url(../../../assets/images/menu-images/feedback.png)', 'Вы можете связаться со мной заполнив контактную форму.'),
(3, 'Навыки', '#3', 'url(../../../assets/images/menu-images/skills.jpg)', 'В данном разделе перечислены мои общие навыки программировани.'),
(4, 'Опыт работы', '#4', 'url(../../../assets/images/menu-images/portfolio.jpg)', 'Вы можете ознакомится с моим опытом работы, прямо у нас на сайте.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
