# Testing Practice Portal

![Project Preview](https://via.placeholder.com/800x400?text=Testing+Practice+Portal) <!-- Замените на реальный скриншот -->

Полноценный учебный портал для практики тестирования веб-приложений с фронтендом и бэкендом.

## 📌 Содержание
- [Функционал](#-функционал)
- [Технологии](#-технологии)
- [Установка](#-установка)
- [Запуск](#-запуск)
- [API Endpoints](#-api-endpoints)
- [Тестовые данные](#-тестовые-данные)

## 🛠 Функционал
- **UI тестирование**:
  - Формы с валидацией
  - Динамический контент
  - Модальные окна
- **API тестирование**:
  - RESTful endpoints
  - Аутентификация
- **База данных**:
  - SQLite с тестовыми данными
- **Инструменты тестировщика**:
  - Примеры для ручного тестирования
  - Подготовка к автоматизированному тестированию

## 💻 Технологии
**Frontend**:
- HTML5, CSS3, JavaScript (ES6+)

**Backend**:
- Node.js (v18+)
- Express
- SQLite3

**Инструменты**:
- VS Code (с Live Server)
- Postman (для тестирования API)

## 🚀 Установка

### 1. Клонирование репозитория
```bash
git clone https://github.com/ваш-username/testing-practice-site.git
cd testing-practice-site
```

### 2. Настройка бэкенда
```bash
cd server
npm install
```

### 3. Настройка фронтенда
Фронтенд не требует установки зависимостей.

## ▶ Запуск

### Backend Server
```bash
cd server
npm start
```
Сервер запустится на `http://localhost:3001`

### Frontend Development
1. Откройте папку `frontend` в VS Code
2. Установите расширение "Live Server"
3. Нажмите "Go Live" для `index.html`

## 🌐 API Endpoints

| Метод | Endpoint           | Описание                |
|-------|--------------------|-------------------------|
| GET   | /api/products      | Получить список товаров |
| POST  | /api/register      | Регистрация пользователя|
| POST  | /api/login         | Авторизация             |

Пример запроса:
```bash
curl -X GET http://localhost:3001/api/products
```

## 📊 Тестовые данные

**Пользователи:**
- Логин: `admin`, Пароль: `admin123`
- Логин: `tester`, Пароль: `test123`

**Товары:**
- 3 тестовых продукта с разными категориями

## 🐛 Тестирование
Примеры тест-кейсов находятся в [TESTING.md](TESTING.md)

## 📜 Лицензия
MIT License

---

**Разработано для практики QA** © 2023