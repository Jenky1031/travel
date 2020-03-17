<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont iconsousuo"></span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			城市
			<span class="iconfont">&#xe62d;</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>	
@import '~@styles/variables.styl';
.header
	display flex
	height .86rem
	line-height .86rem
	background-color $bgColor
	color #fff
	.header-left
		text-align center
		width .64rem
		span
			font-size .4rem
	.header-input
		flex-grow 1
		background-color #fff
		border-radius .1rem
		height .64rem
		line-height .64rem
		margin-top .12rem
		margin-left .2rem
		padding-left .2rem
		color #ccc
	.header-right
		width 1.24rem
		text-align center
		span 	
			font-size .24rem
</style>
