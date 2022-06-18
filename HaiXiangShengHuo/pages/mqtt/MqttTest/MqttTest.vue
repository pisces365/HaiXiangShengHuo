<template>
	<view>
		<view @click="init()" >test</view>
	</view>
</template>
<!-- <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>
<script>
  // 将在全局初始化一个 mqtt 变量
  console.log(mqtt)
</script> -->
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			init(){
				const mqtt = require('mqtt')
				const options = {
				  // Clean session
				  clean: true,
				  connectTimeout: 4000,
				  // Auth
				  clientId: 'uni-app',
				  username: 'admin',
				  password: 'public',
				}
				const client = mqtt.connect('mqtt://118.31.71.148:1883', options)
				client.on('connect', function() {
				  console.log('Connected')
				  client.subscribe('testTopic', function (err) {
				    if (!err) {
				      client.publish('testTopic', 'Hello mqtt')
				    }
				  })
				})
				
				client.on('message', function (topic, message) {
				  // message is Buffer
				  console.log(message.toString())
				  client.end()
				})
			}
		}
	}
</script>

<style>

</style>
