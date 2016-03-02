# Tabula
**Шаблон проекта для быстрого старта с использованием Jade/PostCss/Webpack/Es2015**

## Старт проекта
### Скопируйте репозиторий и перейдите в директорию проекта

```
git clone git@github.com:gladkih/tabula.git project-name && cd project-name
```

### Установка модулей

```
npm i
```

### Запуск проекта

```
npm start
```

Проект запущен [`http://localhost:3000/`](http://localhost:3000/).

В `gulp/config.js scripts` указать скрипты, которые будет «собирать» webpack. В `gulp/config.js assets` указать сторонние ресурсы, которые скопированы в `build/static/assets`.

## Параметры запуска
### Для разработки

```
npm start
```

### Для сборки проекта в папку `build`

```
npm run build
```

### Для сборки скриптов

```
npm run scripts
```

### Для сборки стилей

```
npm run scripts
```

### Для сортировки стилей

```
npm run csscomb
```

### Для сборки шаблонов

```
npm run html
```

## Структура папок и файлов
- `app/` - директория с исходниками.
- `app/components/` -- компоненты проекта.
- `app/js/` -- скрипты.
- `app/assets/` -- необходимые для проекта подключаемые ресурсы.
- `app/templates/` -- jade шаблоны.
- `build/` -- директория для выкладки проект.
- `gulp/` -- задачи для `gulp`.
