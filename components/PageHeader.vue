<template>
    <header>
        <NuxtLink to="/">
            <nuxt-img class="flex mx-auto mt-8" src="/img/logo-bubur-ayam.png" alt="Logo Bubur Ayam #timbuburdiaduk" />
        </NuxtLink>
        <div class="flex place-content-center mt-8 lg:mt-16">
            <button v-on:click="toggleNavbar()">
                <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="64px" height="64px">
                    <path fill="var(--primary)" d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"/>
                </svg>
                <svg v-if="showMenu" version="1.1" viewBox="0 0 20.699 21.479" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px">
                    <g transform="translate(1.632 1.6339)" label="Layer 1">
                            <path d="m-2.5783e-4 -0.0014681 17.436 18.214" stroke="var(--primary)" stroke-linecap="round" stroke-width="3.2316"/>
                            <path d="m-2.5783e-4 18.212 17.436-18.214" stroke="var(--primary)" stroke-linecap="round" stroke-width="3.2316"/>
                            <title>Layer 1</title>
                    </g>
                </svg>
            </button>
        </div>
        <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="drop-shadow-lg mx-auto place-content-center w-full md:w-1/2">
            <NuxtLink class="main-menu-item" to="/lokasi">Lokasi</NuxtLink>
        </div>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                showMenu: false,
            }
        },

        methods: {
            toggleNavbar() {
                this.showMenu = !this.showMenu;
            }
        },
    }
</script>
