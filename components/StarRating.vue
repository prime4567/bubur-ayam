<template>
    <div class="flex">
        <svg v-for="index in 5" :key=index version="1.1" xmlns="http://www.w3.org/2000/svg"  width="21px" viewBox="0 0 50 50">
            <path v-if="(index*2)<=rating" class="star-svg-full" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            <path v-else-if="(index*2-rating)==1" class="star-svg-half" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            <path v-else class="star-svg-blank" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
        </svg>
        {{ rating }}
    </div>
</template>
<script>
export default {
  props: ['rating'],
};
</script>