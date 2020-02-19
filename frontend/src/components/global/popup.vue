<template>
    <section id="popup" class="mask">
        <div class="popup">
            <input type="text" placeholder="输入密码" v-model="password">
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
            if(this.password != 5284792) {
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
        width: 100%;
        height: 100%;
        background: #ededed;
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