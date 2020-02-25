<template>
    <section id="popup" class="mask">
        <div class="popup">
            <header class="header">
                <slot name="header"></slot>
            </header>
            <main class="main">
                <slot></slot>
            </main>
            <footer class="footer">
                <slot name="footer"></slot>
            </footer>
            <div class="close" v-if="showClose">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="32px" width="32px" @click="close">
                    <path d="M16 0 L16 32 M0 16 L32 16" style="stroke:white;stroke-width:2" transform="rotate(45 16 16)"></path>
                    <circle cx="16" cy="16" r="15" stroke="white" stroke-width="2" fill="none"></circle>
                </svg>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'popup',
    props: ['showClose'],
    watch: {
        password: function(){
            if(this.password != 1) {
                this.warm = '错误'
            } else {
                this.warm = '正确'
                this.$emit('enterPassword')
            }
        }
    },
    methods: {
        close(){
            this.$emit('close')
        }
    }
    
}
</script>

<style lang="scss">
    .mask{
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, .8);
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 100;

        .popup{
            position: absolute;
            transform: translate(-50%, -70%);
            left: 50%;
            top: 50%;
            width: 16.5rem;
            height: 12rem;
            border-radius: .5rem;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .header{
                height: 2rem;
                font-size: .75rem;
                color: #666
            }

            .main{
                flex: 1;
                height: 8rem;
                width: 100%;
                img{
                    width: 8rem;
                }
            }

            .footer{
                height: 2rem;
                font-size: .75rem;
                color: #666;
                a{
                    text-decoration: none;
                    color: #666
                }
            }

            .header, .main, .footer{
                display: flex;
                justify-content: center;
                align-items: center
            }

            .close{
                position: absolute;
                bottom: -4rem;
            }
        }
    }
</style>