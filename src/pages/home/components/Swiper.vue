<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of imgList" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: "HomeSwiper",
	data() {
		return {
			swiperOption: {
                pagination: ".swiper-pagination",
                loop: true
			},
			imgList: [
				{
					id: '0001',
					imgUrl:
						"//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
				},
				{
					id: '0002',
					imgUrl:
						"//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"
				}
			]
		};
	}
};
</script>

<style lang="stylus" scoped>
/deep/.swiper-pagination-bullet-active
        background-color #fff
.wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30.5%
    background-color #eee
    .swiper-img
        width 100%
</style>
