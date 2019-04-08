<template>
  <div id="app">
    <router-view/>
		<!-- <group>
			<cell is-link title="Simple" link="/component/tabbar-simple"></cell>
			<cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
		</group> -->
		<tabbar>
		   <tabbar-item link="/components/index">
		      <img slot="icon" src="./assets/demo/img_address.png">
		      <span slot="label">音乐</span>
		    </tabbar-item >
		    <tabbar-item show-dot link="/components/chat">
		      <img slot="icon" src="./assets/demo/img_address.png">
		      <span slot="label">聊天</span>
		    </tabbar-item>
		    <tabbar-item selected link="/components/address">
		      <img slot="icon" src="./assets/demo/img_address.png">
		      <span slot="label">通讯录</span>
		    </tabbar-item>
		    <tabbar-item badge="2" link="/components/my">
		      <img slot="icon" src="./assets/demo/img_address.png">
		      <span slot="label">我的</span>
		    </tabbar-item>
		</tabbar>
  </div>
</template>

<script>
 import { Cell, Group, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'App',
	components: {
		Tabbar,
		TabbarItem,
		Group,
    Cell
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
