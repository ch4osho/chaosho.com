<template>
    <section id="popup" class="mask">
        <div class="popup">
            <input type="text" placeholder="输入密码" v-model="password" class="input">
            <span class="warm">{{warm}}</span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'popup',
    data: function(){
        return {
            password: '',
            warm: ''
        }
    },
    methods: {

    },
    watch: {
        password: function(){
            if(this.password != 1) {
                this.warm = '错误'
            } else {
                this.warm = '正确'
                this.$emit('enterPassword')
            }
        }
    }
    
}
</script>

<style lang="scss">
    .mask{
        width: 100vw;
        height: 100vh;
        background: #ededed;
        position: fixed;
        z-index: 100;

        .popup{
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            width: 16.5rem;
            height: 10rem;
            border-radius: .5rem;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .warm{
                color: red;
                font-weight: bold
            }
        }
    }
</style>