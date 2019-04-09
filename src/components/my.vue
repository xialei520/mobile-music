<template>
  <div class="hello">
		<group>
			<x-input title="账号" v-model="account"></x-input>
			<x-input title="密码" v-model="password"></x-input>

		</group>
		<x-button type="primary" @click.native='submit'>确定</x-button>
  </div>
</template>

<script>
import { XInput, XButton, Group } from 'vux'
export default {
  name: 'my',
  data () {
    return {
      account: '',
			password: ''
    }
  },
  components: {
    XInput,
		XButton,
		Group
  },
	methods:{
		submit(){
			this.$ajax.post( 'http://localhost:80',
				this.$qs.stringify({
					account: this.account,
					password: this.password
				})
			)
			.then((res) => {
				console.log(res)
			})
			.catch((res)=> {
				console.log(res)

			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
