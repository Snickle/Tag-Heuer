<template>
    <nuxt-link class="homepage-ambassador" :to="{ path: 'ambassador/' + $attrs.ambassador.slug }">
        <div v-if="$attrs.ambassador.image" class="homepage-ambassador__background">
            <nuxt-img :src="$attrs.ambassador.image" :alt="$attrs.ambassador.title" fit="cover" sizes="sm:100vw md:50vw lg:33vw" loading="lazy" />
        </div>
        <div v-if="$attrs.ambassador.image" class="homepage-ambassador__content">
            <h2 v-if="$attrs.ambassador.title" class="homepage-ambassador__title" v-html="$attrs.ambassador.title"></h2>
        </div>
    </nuxt-link>
</template>
