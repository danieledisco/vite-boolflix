<script>
import AppLogo from './AppLogo.vue';
import MainNav from './MainNav.vue';
export default {
    name: 'AppHeader',

    components: { AppLogo, MainNav }
}

</script>
 
<template>
    <header>
        <div class="container">
            <AppLogo></AppLogo>
            <MainNav></MainNav>
        </div>
    </header>
</template>
 
<style scoped>
header {
    background-color: var(--bflix-dark);
    padding: 1rem 0;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--bflix-logo);

    }
}
</style>