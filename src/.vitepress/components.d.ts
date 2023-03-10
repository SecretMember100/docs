import '@vue/runtime-core';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        Contributors: typeof import('./components/Contributors.vue')['default']
        FeaturesList: typeof import('./components/FeaturesList.vue')['default']
        HomePage: typeof import('./components/HomePage.vue')['default']
        ListItem: typeof import('./components/ListItem.vue')['default']
        RouterLink: typeof import('vue-router')['RouterLink']
        RouterView: typeof import('vue-router')['RouterView']
        TeamMember: typeof import('./components/TeamMember.vue')['default']
    }
}

export {};
