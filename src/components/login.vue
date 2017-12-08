<style lang="scss" scoped>
  .login{
    width: 100%;
    background: url("../assets/loginbackground.jpg");
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-size: 100%;
    .login-div{
      width: 420px;
      height: 520px;
      position: absolute;
      left: 50%;
      margin-left: -210px;
      top:50%;
      margin-top: -260px;
      background: #FFFFFF;
      box-shadow: 0 3px 4px 0 rgba(0,0,0,0.19);
      border-radius: 3px;
      .content-row{
        width: 320px;
        height: 520px;
        margin:  0 auto;
        overflow: hidden;
        /*border: 1px solid #CCC;*/
        position: relative;
        .content-move{
          width: 640px;
          height: 520px;
          position: absolute;
          left: 0;
          top:0;
          .login-content{
            width: 320px;
            height: 520px;
            float: left;
            .loginTime{
              font-size: 24px;
              color: #606068;
              text-align: center;
              margin-top: 66px;
            }
            .loginImport{
              width: 300px;
              margin: 0 auto;
              margin-top: 61px;
              position: relative;
              input{
                width: 99%;
                height: 40px;
                border: 1px solid #F2EFEF;
                border-radius: 3px;
                padding-left: 10px;
                font-size: 12px;
                color: #CCD0D8;
              }
              span{
                font-size: 12px;
                color: #1C87F5;
                font-weight: 600;
                cursor: pointer;
              }
              .s1{
                position: absolute;
                left: 8px;
                top: 50px;
              }
              .s2{
                position: absolute;
                right: 0;
                top: 50px;
              }
            }
            .enterBtn{
              width: 100px;
              height: 38px;
              line-height: 38px;
              color: white;
              background: #1C87F5;
              border-radius: 3px;
              box-shadow: 1px 3px 15px 0px #1C87F5;
              margin: 0 auto;
              cursor: pointer;
            }
            .loginRemark{
              font-size: 12px;
              color: #B4B8BF;
              text-align: center;
              margin-top: 20px;
            }
          }
          .login-content2{
            width: 320px;
            height: 520px;
            margin:  0 auto;
            float: left;
            .enroll-row{
              width: 300px;
              margin: 0 auto;
              margin-top: 50px;
              p{
                font-size: 14px;
                color: #606068;
              }
              input{
                width: 99%;
                height: 40px;
                border: 1px solid #F2EFEF;
                border-radius: 3px;
                padding-left: 10px;
                font-size: 12px;
                color: #CCD0D8;
              }
            }
            .cont2-btns{
              margin-top: 53px;
              .btn2{
                border: 1px solid #1C87F5;
                border-radius: 3px;
                color: #1C87F5;
                width: 100px;
                height: 38px;
              }
            }
          }
        }
      }

    }
  }

  .fade-enter-active, .fade-leave-active{
    transition: all .4s ;
    transform: translateX(-100px);
    opacity: 0;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translateX(-100px);
  }

</style>
<template>
  <div class="login">
    <div class="login-div">
      <div class="content-row">
        <div class="content-move">
          <!--登录页-->
          <div  class="login-content" >
            <p class="loginTime">{{loginTime}}</p>
            <p><span style="color: #E9EEF5">一一</span> <span style="margin-left: 31px;margin-right: 31px">薪资单</span> <span style="color: #E9EEF5">一一</span></p>
            <div class="loginImport">
              <input type="password" placeholder="请输入查询密码" v-model="loginMsg">
              <span class="s1" v-on:click="toEnroll">修改密码</span>
              <span class="s2">重置密码</span>
            </div>
            <div style="margin-top: 120px">
             <div class="enterBtn" @click="login">登录</div>
              <!--<el-button :plain="true" @click="login">错误</el-button>-->

              <p class="loginRemark">留意周围环境，注意个人隐私</p>
            </div>
          </div>
          <!--注册-->
          <div  class="login-content2" >
            <div class="enroll-row">
            <p>请输入原密码</p>
            <div>
              <input v-model="oldPass" type="password" placeholder="密码长度6-8位数字和字母组合">
            </div>
          </div>
            <div class="enroll-row">
              <p>请输入新密码</p>
              <div>
                <input v-model="newPass" type="password" placeholder="密码长度6-8位数字和字母组合">
              </div>
            </div>
            <div class="enroll-row">
              <p>请再次输入新密码</p>
              <div>
                <input v-model="newPassAgain" type="password" placeholder="密码长度6-8位数字和字母组合">
              </div>
            </div>
            <div class="cont2-btns">
              <el-button type="primary" style="width: 100px;height: 38px">保存</el-button>
              <el-button @click="toLogin" class="btn2">取消</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginTime:'2017年11月',
      loginMsg:'',
      oldPass:'',
      newPass:'',
      newPassAgain:''
    }
  },
  methods:{
    toEnroll:function () {
      $('.content-move').animate({left:'-320px'},'normal','linear',function () {

      })
    },
    toLogin:function () {
      $('.content-move').animate({left:'0'},'normal','linear',function () {

      })
    },
    login:function () {
      if (this.loginMsg == ''){
          this.$message.error('请输入密码')
      }
    }
  },
  beforeCreate(){
      console.log(window.location.href)
  },
//  created(){
//      console.log('created')
//  },
//  beforeMount(){
//      console.log('beforeMount')
//  },
//  mounted(){
//      console.log('mounted')
//  },
//  beforeUpdate(){
//      console.log('beforeUpdate')
//  },
//  updated(){
//      conosle.log('updated')
//  },
//  activated(){
//      console.log('activated')
//  },
//  deactivated(){
//      console.log('deactivated')
//  },
//  beforeDestroy(){
//      console.log('beforeDsetroy')
//  },
//  destroyed(){
//      console.log('destroyed')
//  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

