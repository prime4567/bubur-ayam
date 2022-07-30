<template>
    <div class="flex">
        <svg v-for="index in 5" :key=index version="1.1" xmlns="http://www.w3.org/2000/svg"  width="21px" viewBox="0 0 50 50">
            <defs>
                <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                    <stop offset="50%" stop-color="#FFD700"></stop>
                    <stop offset="50%" stop-color="#D3D3D3"></stop>
                </linearGradient>
            </defs>
            <path v-if="(index*2)<=rating" class="star-svg-full" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            <path v-else-if="(index*2-rating)==1" fill="url(#half)" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
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