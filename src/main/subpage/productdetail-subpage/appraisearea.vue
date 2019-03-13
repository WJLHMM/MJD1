<template>	
<div class="appraiseareawrapper">
	<div class="appraisetitle">
		<p class="left">
			<span class="appraisename">评价</span>
			<span class="goodappaise">好评 99%</span>
		</p>
		<p class="right">
			<span class="totalappaise">共 126万+ 条</span>
			<span class="mui-icon mui-icon-arrowright"></span>
		</p>
	</div>
	<ul class="appraiseareagrade">
		<li class="goodappaise">好评（121万+）</li>
		<li class="middleappaise">中评（3300+）</li>
		<li class="badappaise">差评（3600+）</li>
		<li class="group">有圈(4.4万+)</li>
	</ul>
	<div class="appraisearea">
		<div class="userinfo">
			<p class="username">
				<span >小红同志的太阳山</span>
				<span class="mui-icon mui-icon-star-filled"></span>
				<span class="mui-icon mui-icon-star-filled"></span>
				<span class="mui-icon mui-icon-star-filled"></span>
				<span class="mui-icon mui-icon-star-filled"></span>
				<span class="mui-icon mui-icon-star-filled"></span>
			</p>
			<p class="appraisedate">2019-01-21</p>
		</div>
		<div class="appraisecontent">
			用了三个星期，来说说感受：首先是送货速度快，晚上下单，第二天就到了，京东自营就是快。第二个是包装，这个只能给三分了，看着很简陋，拿起来摇晃，只听到里面东西在响，这也太简陋了。再说说外观，之前已经买了一台荣耀play给儿子用，对这个刘海屏也有所了解，感觉那个刘海不怎么喜欢，全面屏总体外观比以前用的6X要好看多了，（老婆还在用另一台6X）但就是屏幕太长，大拇指够不到顶部，也不好抓，后面必须得粘一个指环扣，不然单手真的不好拿。再说说这个处理器和反应速度，真的是一分钱一分货，我不玩游戏，但是打开某些软件或文件总体来说就是卡，慢，半天还在转圈圈，在~空间里同时上传三个视频到说说，直接就不动了，关闭软件重新打开时那些视频只能重新再上传了，不能接续，这个处理器只能说凑合着吧，跟荣耀play的970还是有很大差距。再说说这个网络，感觉比之前我用的6❌还差，进到卫生间里就没有WiFi和移动网络了，而且也不能自动切换WiFi信号，我以前用的华为荣耀手机都没这种情况。再说说拍照，这个优点就是夜拍了，夜间用AI模式拍出来的照片很清晰，这个我很喜欢，缺点就是慢，要拿好久才能拍出来，而且我发现一个问题就是拍~
		</div>
	</div>
</div>
</template>

<script>
	
export default {


}
</script>

<style scoped lang="less">
.appraiseareawrapper {
	width:100%;
	border-bottom:1px solid #e8e8ed;
	padding-bottom: 10px;
	.appraisetitle {
		width:100%;
		height:46px;
		border-bottom:1px solid #e8e8ed;
		padding:0 10px;
		display: flex;
		justify-content: space-between; 
		align-items: center;
		.left {
			font-weight: 400;
			span:nth-child(1){
				font-size: 16px;
				color:#333;
			};
			span:nth-child(2){
				font-size: 12px;
				color:#e4393c;;
			};
		}
		.right {
			font-size:12px;
			font-weight: 400;
		}
	}
	.appraiseareagrade {
		width:100%;
		height:46px;
		display: flex; 
		justify-content: space-around; 
		align-items: center;
		font-size: 12px;
		padding:0 10px;
		li {
			background: #fdf0f0;
			height:26px;
			text-align: center;
			line-height: 26px;
		}
	}
	.appraisearea {
		width: 100%; 
		display:flex;
		flex-direction: column; 
		align-items: center; 
		justify-content: space-between;
		padding:0 10px;
		.userinfo {
			width:100%;
			height:20px;
			display: flex; 
			justify-content: space-between; 
			align-items: center;
			margin-bottom:6px;
			span {
				font-size: 12px; 
				color:#ff9600;
				height: 100%;
				line-height: 100%;
			}
			span:nth-child(1){
				display: inline-block;
				color:#999;
				width: 40px; 
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis; 
			};

			.appraisedate {
				color:#999;
				font-size: 12px;
			}
		}
		.appraisecontent {
			width: 100%; 
			height:45px;
			line-height: 15px;
			color:#999;
			font-size: 14px;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			text-overflow: -o-ellipsis-lastline; 
		}
	}

}
</style>