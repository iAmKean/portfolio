<template>
  <div class="login">
    <div class="login-container">
      <div class="login-title-image">
        <div class="title">{{ pageTitle }}</div>
        <div class="image">
          <el-image
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
      </div>
      <div class="form-inputs">
        <el-form
          :label-position="'top'"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="Username" prop="user">
            <el-input
              type="text"
              v-model="ruleForm.user"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()">Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueRouter from "vue-router";
const { isNavigationFailure, NavigationFailureType } = VueRouter;
import AOS from 'aos';

export default {
  name: "Login",
  components: {},
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the user"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        callback();
      }
    };
    return {
      pageTitle: "Login",
      ruleForm: {
        user: "",
        pass: ""
      },
      rules: {
        user: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      },
      isValid: false
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "Home" }).catch(failure => {
        if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
          console.log("Error attempting to the page");
        }
      });
    }
  },
  created() {
    AOS.init()
  }
};
</script>
