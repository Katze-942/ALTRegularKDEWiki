export const NolebaseGitChangelogOptions = {
  plugin: {
    maxGitLogCount: 20000,
    repoURL: 'https://github.com/OlegShchavelev/ALTKDEWiki'
  },
  pluginSections: {
    sections: {
      disableChangelog: false,
      disableContributors: false
    }
  },
  locales: {
    'ru-RU': {
      changelog: {
          title: 'История изменений',
          noData: 'Нет изменений',
          lastEdited: 'Последнее редактирование: {{daysAgo}}',
          lastEditedDateFnsLocaleName: 'ru',
          viewFullHistory: 'Показать историю',
          committedOn: ' от {{date}}'
        },
        contributors: {
        title: 'Авторы',
        noData: 'Нет информации'
      }
    }
  },
}