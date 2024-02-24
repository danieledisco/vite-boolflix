<script>
export default {
    name: 'AppLogo',
}
</script>
 
<template>
    <div class="logo">
        <img width="40" src="/logo.png" alt="">
    </div>
</template>
 
<style scoped>
.logo {
    >img {
        width: 100px;
    }
}
</style>