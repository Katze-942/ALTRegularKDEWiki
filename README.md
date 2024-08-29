<div align="center">
  <a href="https://github.com/OlegShchavelev/ALTKDEWiki">
    <img src="https://i.imgur.com/DA9QSc6.png" alt="Logo" width="256" height="256">
  </a>
  <h1 align="center">ALT KDE Wiki
  <br/>
  <img alt="GitHub License" src="https://img.shields.io/github/license/OlegShchavelev/ALTKDEWiki">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/OlegShchavelev/ALTKDEWiki">
  <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/OlegShchavelev/ALTKDEWiki">
  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/OlegShchavelev/ALTKDEWiki/github-pages?label=Last%20Deploy">
  </h1>
  <p align="center"> База знаний открытого сообщества пользователей операционной системы ALT Regular KDE.</p>
  <br/>
  <br/>
</div>

## Разработка

Перед запуском проекта убедитесь, что у вас установлены необходимые компоненты

```shell
sudo apt-get install node git
```

Выполним загрузку репозитория, перейдём в каталог проекта и запустим в режиме разработки

```shell
git clone https://github.com/OlegShchavelev/ALTKDEWiki.git
cd ALTKDEWiki
npm i
npm run docs:dev
```

## Дополнительный функционал

### Включение динамической сортировки участников на главной странице

Для работы функции требуется создать `read-only` токен GitHub

(Официальный REST API GitHub не предоставляет данные об активности в репозитории без авторизации.
Поэтому для использования данного функционала требуется ключ с правом на чтение публичных репозиториев)

[Как это сделать можно прочитать тут](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

Далее для локального использования нужно создать файл `.env` в папке `/docs/` и добавить в него данную строку:

```
VITE_GIT_KEY="{ваш токен}"
```

(Данный файл добавлен в исключения `.gitignore`, можно не бояться, что он уйдёт в репозиторий)

А для использования функционала в сборке нужно создать `secret` c названием `VITE_GIT_KEY` для `GitHub Actions` в вашем репозитории

[Как это сделать можно ознакомиться здесь](https://docs.github.com/actions/security-guides/encrypted-secrets)

После этого будет доступен функционал сортировки.

(На данный момент данный ключ используется только в `.vitepress/utils/gitStats.js`, если вы не доверяете проекту - вы можете проверить как ваш ключ используется ведь все компоненты имеют открытый исходный код. Либо вы можете просто не использовать данный функционал. Все остаётся на ваше усмотрение.)

### Настройки динамической сортировки

- `homeTopLimit` — лимит отображаемых пользователей на главной странице
- `home_filter_type` — тип сортировки пользователей на главной странице
- `page_filter_type` — тип сортировки пользователей на странице команды

  1. `additions` — по количеству добавленных в репозиторий строк
  2. `commits` — по количеству коммитов в репозиторий
  3. `role+additions` — по роли участника (Разработчик -> Участник) и количеству добавленных в репозиторий строк
  4. `role+commits` — по роли участника (Разработчик -> Участник) и количеству коммитов

- `enable_autosearch` — включено/выключено автозаполнение перечня участников из статистики
- `loading_placeholders` — массив с возможными выводами у спиннера загрузки виджета

## Зеркало

Вся документация из этого репозитория размещается на сайте [alt-kde.wiki](https://alt-kde.wiki/) автоматически.

## Лицензия

MIT Copyright © 2023-present OLEG SHCHAVELEV
