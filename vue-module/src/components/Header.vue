<template>
  <div style="font-size: 12px;line-height: 60px; display: flex">
    <div style="flex: 1;">
      <span :class="myCollapseBtnClass" style="cursor: pointer;font-size: 18px" @click="myCollapse"></span>
      <el-breadcrumb separator="/" style="display: inline-block;margin-left: 10px;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-dropdown style="width: 100px; cursor: pointer">
      <div>
        <img :src="user.avatarUrl" alt=""
             style="width: 30px; border-radius: 50%; position: relative; top:10px; right: 5px">
        <span>{{ user.nackname }}</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
      </div>
      <el-dropdown-menu slot="dropdown" style="width: 100px; text-align: center">
        <el-dropdown-item style="font-size: 14px; padding: 5px 0">
          <router-link to="/person" style="text-decoration: none;">个人信息</router-link>
        </el-dropdown-item>
        <el-dropdown-item style="font-size: 14px; padding: 5px 0">
          <span style="text-decoration: none" @click="logout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    collapseBtnClass: String,
    sideWidth: Number,
    logoTextShow: Boolean,
    collapse: Function
  },
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      myCollapseBtnClass: this.collapseBtnClass,
      mySideWidth: this.sideWidth,
      myLogoTextShow: this.logoTextShow
    }
  },
  methods: {
    myCollapse() {  // 点击收缩按钮触发
      this.collapse()
    },
    logout() {
      this.$router.push("/login")
      localStorage.removeItem("user")
      this.$message.success("退出成功")
    }
  }
}
</script>

<style scoped>

</style>