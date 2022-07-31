<template>
    <div class="flex">
        <svg v-for="index in 5" :key=index version="1.1" xmlns="http://www.w3.org/2000/svg"  width="21px" viewBox="0 0 50 50">
            <defs>
                <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                    <stop offset="50%" stop-color="var(--star-color-filled)"></stop>
                    <stop offset="50%" stop-color="var(--star-color-blank)"></stop>
                </linearGradient>
            </defs>
            <path v-if="(index*2)<=rating" fill="var(--star-color-filled)" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            <path v-else-if="(index*2-rating)==1" fill="url(#half)" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            <path v-else fill="var(--star-color-blank)" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
        </svg>
        {{ rating }}/10
    </div>
</template>
<script>
export default {
  props: ['rating'],
};
</script>