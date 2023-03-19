<template>
    <div class="ambassador-slide ambassador-slide--normal">
        <div class="ambassador-slide__container">
            <div class="ambassador-slide__background">
                <nuxt-img v-if="$attrs.slide.image" :src="$attrs.slide.image" :alt="$attrs.slide.title" fit="cover" sizes="sm:100vw md:50vw lg:33vw" loading="lazy" />
            </div>
            <div v-if="$attrs.slide.title" class="ambassador-slide__content">
                <h2 v-if="$attrs.slide.title" class="ambassador-slide__title" :class="{ 'ambassador-slide__title--featured': $attrs.slide.featured_title }" v-html="$attrs.slide.title"></h2>
                <p v-if="$attrs.slide.content" v-html="$attrs.slide.content"></p>
            </div>
            <button v-if="( $attrs.slideCount - 1 ) > $attrs.index" class="ambassador-slide__scroll" @click="$parent.scrollToNext($attrs.index)"><span></span></button>
            <button v-else class="ambassador-slide__complete"><span></span></button>
        </div>
    </div>
</template>
