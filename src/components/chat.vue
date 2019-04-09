<template>
  <div class="hello">
	{{msg}}
	<!-- <view class="uni-list">
		<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
			<view class="uni-list-cell-navigate uni-navigate-right">
				{{item.value}}
			</view>
		</view>
	</view> -->
  </div>
</template>
<script>
export default {
  name: 'chat',
  data () {
    return {
      msg: 'chat'
    }
  },
  components: {
    
  }, 
  mounted(){
	  console.log(io)
	  var socket = io('http://localhost');
	  socket.emit('on', {
		  private: '啦啦啦'
	  })
	  socket.on('on', data => {
		  console.log(data)
	  })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
