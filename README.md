# Приложение для поиска пользователей

Это простое приложение на React и Node.js, которое позволяет пользователям искать других пользователей по их электронной почте и номеру телефона. Приложение демонстрирует, как обрабатывать отправку форм, отменять предыдущие запросы, валидировать входные данные формы и отображать результаты.

## Функции

- **Фронтенд**: Построен на React, использует функциональные компоненты и хуки.
- **Бэкенд**: Построен на Node.js и Express, имитирует задержку ответа.
- **Валидация**: Валидация электронной почты и номера телефона.
- **Отмена предыдущих запросов**: Отменяет предыдущий запрос при новом поисковом запросе.
- **Форматирование номера телефона**: Отображает номер телефона в формате `99-99-99`, но отправляет его без дефисов на сервер.
- **Обработка ошибок**: Отображает сообщение об ошибке, если совпадений не найдено или если произошла ошибка сервера.

## Требования

- Node.js
- npm (или yarn)

## Установка

1. **Клонируйте репозиторий**:

   ```bash
   git clone https://github.com/teomayy/test-app.git
   cd test-app
   ```

## Запуск

1. **Запуск сервер**:

```bash
   cd backend
   npm run dev
```

2. **Запуск фронтенд**

```bash
   cd frontend
   npm start
```
