<template>
    <div class="homepage-ambassadors">
        <div v-if="$attrs.ambassadors" class="homepage-ambassadors__container">
            <HomepageAmbassador v-for="( ambassador, ambassador_key ) in $attrs.ambassadors" :key="ambassador_key" :ambassador="ambassador" />
        </div>
        <div v-else class="homepage-ambassadors__empty">
            <!-- TODO -->
        </div>
    </div>
</template>