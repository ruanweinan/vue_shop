<template>
  <div class="login">
    <div class="login-box">
      <!-- 图标 -->
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 表单控件 -->
      <div class="form-box">
        <!-- ref=form表单的实例 -->
        <el-form ref="form" :model="form" :rules="rules">
          <!-- 用户名 -->
          <el-form-item prop="name">
            <el-input v-model="form.name" prefix-icon="iconfont icon-icon_signal"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input v-model="form.password" type="password" prefix-icon="iconfont icon-mima"></el-input>
          </el-form-item>
          <!-- 操作 -->
          <el-form-item class="form-control">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="formReset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        name: '',
        password: ''
      },
      // 用户验证规则
      rules: {
        name: [
          { required: true, message: '请用户名', trigger: 'blur' },
          {
            min: 6,
            max: 16,
            message: '长度在 6 到 16 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输密码', trigger: 'blur' },
          {
            min: 6,
            max: 16,
            message: '长度在 6 到 16 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    formReset () {
      console.log(this.$refs)
      this.$refs.form.resetFields()
    },
    login () {
      // 登录之前的表单验证
      this.$refs.form.validate((valid) => {
        console.log(valid)
        if (valid) {
          this.Message.succues('成功')
        } else {
          this.Message({ type: 'error', message: '登录失败', showClose: true })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid whitesmoke;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 10px;
  background-color: white;
  img {
    width: 100%;
    border-radius: 50%;
    background-color: pink;
  }
}
.form-box {
  position: absolute;
  width: 100%;
  top: 130px;
  padding: 0 20px;
  box-sizing: border-box;
  .form-control {
    display: flex;
    justify-content: flex-end;
  }
}
.login {
  position: relative;
  height: 100%;
  width: 100%;
  .login-box {
    // display: none;
    position: absolute;
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: pink;
    border-radius: 10px;
  }
}
</style>
