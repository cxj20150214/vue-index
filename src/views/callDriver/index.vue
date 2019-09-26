<template>
    <div>
        <div class="callbox">
            <div class="callbox_txt">
                <p class="tit">当前您附近有超过<span>15</span>位司机</p>
                <p class="tit1">为您服务</p>
            </div>
            <div class="callBorder"></div>
            <div class="callbox_input">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'callDriver',
}
</script>
<style lang="less" scoped>
    .callbox_txt{
        .tit{
            font-size: 42px;
            margin-top: 60px;
            font-weight: 700;
            span{
                font-size: 52px;
                color: #ff732d;
            }
        }
        .tit1{
            width:300px;
            text-align: center;
            margin:0px auto;
            font-size: 38px;
            font-weight: 600;
            margin-top: 20px;
            position: relative;
            margin-bottom: 80px;
            &::before{
                position: absolute;
                content: '';
                width:40px;
                height: 5px;
                background-color: #ff2a40;
                left:0px;
                top:25px;
                border-radius: 15px;
            }
             &::after{
                position: absolute;
                content: '';
                width:40px;
                height: 5px;
                background-color: #ff2a40;
                right:0px;
                top:25px;
                border-radius: 15px;
            }
        }
    }
    .callBorder{
        width:100%;
        height:10px;
        background-color: #f7f7f7;
    }
    .callbox_input{
        width:90%;
        margin:50px auto 0px;
    }
</style>