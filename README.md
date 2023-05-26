# Sellerhack

Данный проект создан с ипользованием Git подмодулей и Nuxt Layers (extends)

## Развертка проекта

Склонируйте репозиторий вместе с подмодулями через

```bash
git clone <project-url> --recurse-submodules
```

Установите зависимости проекта и подмодулей:

```bash
cd ./pricehack
npm i

сd ./pricehack-ui
npm i
```

Запустите режим разработки

```bash
cd ./pricehack
npm run dev

```

Или создание билда

```bash
cd ./pricehack
npm run build

```

## Подмодуль UI

Подмодуль pricehack-ui является отдельным малым nuxt-проектом со storybook + vite. При изменениях внутри pricehack-ui нужно будет выполнить пуш изменения в репозиторий pricehack-ui,а также в репозиторий pricehack.