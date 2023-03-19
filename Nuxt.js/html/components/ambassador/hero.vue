<template>
    <div class="ambassador-slide ambassador-slide--hero">
        <div class="ambassador-slide__container">
            <div v-if="$attrs.ambassador.featured_image" class="ambassador-slide__background">
                <nuxt-img :src="$attrs.ambassador.featured_image" :alt="$attrs.ambassador.title" fit="cover" sizes="sm:100vw md:50vw lg:33vw" loading="lazy" />
            </div>
            <div v-if="$attrs.ambassador.title" class="ambassador-slide__content">
                <h1 v-if="$attrs.ambassador.title" class="ambassador-slide__title" v-html="$attrs.ambassador.title"></h1>
            </div>
            <button class="ambassador-slide__scroll" @click="$parent.scrollToNext('hero')"><span></span></button>
        </div>
    </div>
</template>
