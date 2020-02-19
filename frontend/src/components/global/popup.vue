<template>
    <section id="popup" class="mask">
        <div class="popup">

        </div>
    </section>
</template>

<script>
export default {
    name: 'popup',
    data: function(){
        return {

        }
    },
    methods: {

    }
    
}
</script>

<style lang="scss">
    .mask{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: block;

        .popup{
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            width: 10rem;
            height: 10rem;
            border-radius: .5rem;
            background: white;
        }
    }
</style>