<template>
    <div :class="'single-ambassador single-ambassador--' + slug">
        <Header />
        <div class="ambassador-slides">
            <div class="ambassador-slides__container">
                <AmbassadorHero v-if="content?.featured_image" :ambassador="content" />
                <template v-if="content?.slides">
                    <AmbassadorSlides v-for="( slide, slide_key ) in content.slides" :key="slide_key" :slide="slide" :index="slide_key" :slideCount="content.slides.length" />
                </template>
            </div>
        </div>
    </div>
</template>
  
  <script>
  
  export default {
        name: "Ambassador",
        mounted() {
            this.getData();
        },
        head () {
            return {
                title: 'Tag Heuer - ' + this.title.replace( /(<([^>]+)>)/ig, ' '),
            }
        },
        methods: {
            async getData() {
                const content = await this.$axios.$get('/data/ambassadors/' + this.$route.params.ambassador + '.json').then(response => {
                    this.title = response.title;
                    this.slug = response.slug;
                    this.content = response;
                })
                .catch(error => {
                    console.log(error);
                });
            },
            scrollToNext(slide) {

                let nextSlide = slide + 1;

                if( slide == 'hero' ) {
                    nextSlide = 0;
                }

                const slides = document.getElementsByClassName("ambassador-slide--normal");

                if( slides[nextSlide] !== undefined ) {
                    slides[nextSlide].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }

            }
        },
        data() {
            return {
                title: '',
                slug: '',
                content: null,
            };
        }
  }
  </script>
  