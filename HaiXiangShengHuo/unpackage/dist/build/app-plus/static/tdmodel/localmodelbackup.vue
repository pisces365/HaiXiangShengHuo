<template>
	<view>
		<web-view src="http://112.124.35.32:8081/#/"></web-view>
		<!-- <web-view src="https://ithanmang.gitee.io/threejs/home/201807/20180703/02-raycasterDemo.html"></web-view> -->
		<!-- <view class="three" style="width: 100%; height: 100%;"></view> -->
	</view>
</template>

<script>
	// import * as THREE from 'three'
	// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
	// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

	export default {
		mounted() {
			// this.initThree()
		},
		methods: {
			initThree() {
				const scene = new THREE.Scene()
				scene.background = new THREE.Color('#eee')
				scene.fog = new THREE.Fog('#eee', 20, 100)

				const canvas = document.getElementByClass('three')
				const renderer = new THREE.WebGLRenderer({
					antialias: true
				})
				renderer.shadowMap.enabled = true
				const element = document.getElementByClass('three')
				element.appendChild(renderer.domElement); // body元素中插入canvas对象

				const camera = new THREE.PerspectiveCamera(
					20,
					window.innerWidth / window.innerHeight,
					0.1,
					1000
				)
				camera.position.z = -10
				camera.position.y = 10
				camera.position.x = 10

				const gltfLoader = new GLTFLoader()
				gltfLoader.load('https://gitee.com/yang-jiening/three-dmodel/raw/master/houseonly.glb', (gltf) => {
					let model = gltf.scene
					// 遍历模型每部分
					model.traverse((o) => {
						if (o.isMesh) {
							o.castShadow = true
							o.receiveShadow = true
						}
					})
					scene.add(model)
				})

				const gltfLoader2 = new GLTFLoader()
				gltfLoader2.load('https://gitee.com/yang-jiening/three-dmodel/raw/master/housedooronly.glb', (gltf) => {
					let model = gltf.scene
					// 遍历模型每部分
					model.traverse((o) => {
						if (o.isMesh) {
							o.castShadow = true
							o.receiveShadow = true
						}
					})
					scene.add(model)
				})

				const gltfLoader3 = new GLTFLoader()
				gltfLoader3.load('https://gitee.com/yang-jiening/three-dmodel/raw/master/housejiajv1zip.glb',
					(gltf) => {
						let model = gltf.scene
						// 遍历模型每部分
						model.traverse((o) => {
							if (o.isMesh) {
								o.castShadow = true
								o.receiveShadow = true
							}
						})
						scene.add(model)
					})


				const gltfLoader4 = new GLTFLoader()
				gltfLoader4.load('https://gitee.com/yang-jiening/three-dmodel/raw/master/housejiajv2zip.glb',
					(gltf) => {
						let model = gltf.scene
						// 遍历模型每部分
						model.traverse((o) => {
							if (o.isMesh) {
								o.castShadow = true
								o.receiveShadow = true
							}
						})
						scene.add(model)
					})

				const gltfLoader5 = new GLTFLoader()
				gltfLoader5.load('https://gitee.com/yang-jiening/three-dmodel/raw/master/housejiajv3zip.glb',
					(gltf) => {
						let model = gltf.scene
						// 遍历模型每部分
						model.traverse((o) => {
							if (o.isMesh) {
								o.castShadow = true
								o.receiveShadow = true
							}
						})
						scene.add(model)
					})

				const gltfLoader6 = new GLTFLoader()
				gltfLoader6.load('https://gitee.com/yang-jiening/three-dmodel/raw/master/housejiajv4zip.glb',
					(gltf) => {
						let model = gltf.scene
						// 遍历模型每部分
						model.traverse((o) => {
							if (o.isMesh) {
								o.castShadow = true
								o.receiveShadow = true
							}
						})
						scene.add(model)
					})

				const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
				hemLight.position.set(0, 48, 0)
				scene.add(hemLight)

				const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
				//光源等位置
				dirLight.position.set(-4, 8, -5)
				//可以产生阴影
				dirLight.castShadow = true
				dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
				scene.add(dirLight)

				let floorGeometry = new THREE.PlaneGeometry(8000, 8000)
				let floorMaterial = new THREE.MeshPhongMaterial({
					color: 0x857ebb,
					shininess: 0,
				})

				let floor = new THREE.Mesh(floorGeometry, floorMaterial)
				floor.rotation.x = -0.5 * Math.PI
				floor.receiveShadow = true
				floor.position.y = -0.001
				scene.add(floor)

				const controls = new OrbitControls(camera, renderer.domElement)
				controls.enableDamping = true

				function animate() {
					controls.update()
					renderer.render(scene, camera)
					requestAnimationFrame(animate)

					if (resizeRendererToDisplaySize(renderer)) {
						const canvas = renderer.domElement
						camera.aspect = canvas.clientWidth / canvas.clientHeight
						camera.updateProjectionMatrix()
					}
				}
				animate()

				function resizeRendererToDisplaySize(renderer) {
					const canvas = renderer.domElement
					var width = window.innerWidth
					var height = window.innerHeight
					var canvasPixelWidth = canvas.width / window.devicePixelRatio
					var canvasPixelHeight = canvas.height / window.devicePixelRatio

					const needResize =
						canvasPixelWidth !== width || canvasPixelHeight !== height
					if (needResize) {
						renderer.setSize(width, height, false)
					}
					return needResize
				}
			},
		},
	}
</script>

<style scoped>
	#three {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
	}
</style>
