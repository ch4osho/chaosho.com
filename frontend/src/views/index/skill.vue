<template>
    <div>
        <div class="card">
            <div style="height:300px" ref="frontend"></div>
        </div>
        <div class="card">
            <div style="height: 300px" ref="frame"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'skill',
    methods: {
        drawFrontendCharts(){
            let frontend = this.$echarts.init(this.$refs['frontend'])
            frontend.setOption({
                title: { text: '前端知识储备' },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: ["Javascript","HTML(5)","CSS(3)","ES6","webpack","git","小程序开发"],
                    axisLabel: {
                        interval: 0,
                        rotate: 45,
                        textStyle: {
                            color: '#000',
                            fontSize: 10
                        },
                    }
                },
                yAxis: {},
                series: [{
                    type: 'bar',
                    data: [95, 87, 85, 80, 75, 70, 60],
                }]
            });
        },
        drawFrame(){
            let frame = this.$echarts.init(this.$refs['frame'])
            frame.setOption({
                title: { text: '前端框架熟练度' },
                series : [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data:[
                        {value:500, name:'Vue'},
                        {value:274, name:'React'},
                        {value:310, name:'Jquery'},
                        {value:335, name:'ElementUi'},
                        {value:40, name:'其他'}
                ]}
                ]
            })
        }
    },
    mounted(){
        this.drawFrontendCharts()
        this.drawFrame()
    }
}
</script>

<style>
    .card{
        transition: height .5s linear;
        margin-bottom: .5rem;
        background: white;
        border-radius: .5rem;
        padding: .75rem;
        position: relative;
        overflow: hidden;
    }
</style>