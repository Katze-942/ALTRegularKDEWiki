// https://vitepress.dev/guide/custom-theme
import { h, Suspense } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import AKWContribution from './components/AKWContribution.vue'
import AKWDocsAsideMeta from './components/AKWDocsAsideMeta.vue'
import AKWHomeTeamMembers from './components/AKWHomeTeamMembers.vue'
import AKWHomeSponsors from './components/AKWHomeSponsors.vue'
import AKWGallery from './components/AKWGallery.vue'
import VueSilentbox from 'vue-silentbox'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'

import {
  gitLocales,
  gitMapContributors
} from '../data/gitlog'

import { lexiconEnhancedReadabilities } from './lexicon/enhanced-readabilities'

import 'uno.css'
import './styles/style.css'
import './styles/custom.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'home-features-after': () => [
        h(Suspense, null, {
            default: h(AKWHomeTeamMembers)
        }),
        h(AKWHomeSponsors)],
      'aside-outline-after': () => h(AKWDocsAsideMeta),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.provide(InjectionKey, {
      locales: lexiconEnhancedReadabilities
    } as Options)
    enhanceAppWithTabs(app)
    app.component('contribution', AKWContribution);
    app.use(VueSilentbox, {
      downloadButtonLabel: "Скачать 📥"
    });
    app.component('Gallery', AKWGallery);
    app.use(NolebaseGitChangelogPlugin, {locales: gitLocales, mapContributors: gitMapContributors})
  },
} satisfies Theme
