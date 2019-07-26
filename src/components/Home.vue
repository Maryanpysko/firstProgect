<template>
  <div class="futer">
			<h2 class="collection-title">Image Collection<small>Visual Quality</small></h2>
			<div class="collections">
				<div class="collection-item-outer">
					<div class="collection-item">
						<img src="image/Lol.jpg"alt="List picture" width="300" height>
						<div class="collections-text">
							<h3>List Element Itemc</h3>
							<p>Images</p>
							<button>Read More...</button>
						</div>
					</div>
				</div>
				<div class="collection-item-outer">
					<div class="collection-item">
						<img src="src\image\Lol.jpg" alt="List picture" width="300" height>
						<div class="collections-text">
							<h3>List Element Itemc</h3>
							<p>Images</p>
							<button>Read More...</button>
						</div>
					</div>
				</div>
				<div class="collection-item-outer">
					<div class="collection-item">
						<img src="src\image\Lol.jpg" alt="List picture" width="300" height>
						<div class="collections-text">
							<h3>List Element Itemc</h3>
							<p>Images</p>
							<button>Read More...</button>
						</div>
					</div>
				</div>
			</div>
  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.collections {
	overflow: auto;
}

.collection-item-outer {
	display: inline-block;
	float: left;
	padding-left: 5px;
	padding-right: 5px;
	width: 33.33%;
	box-sizing: border-box;
}
.collections > div:first-child {
	padding-left: 0;
	padding-right: 10px;
}
.collections > div:last-child {
	padding-right: 0;
	padding-left: 10px;
}
.collection-item {
	border: 1px solid #959595;
}
.collection-item img,
.collection-item video {
	width: 100%;
}
.collection-text {
	padding: 0 20px 20px 20px;
}
.collection-text h3 {
	color: yellowgreen;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.collection-text p {
	height: 80px;
	overflow: hidden;
}
.collection-text button {
	padding: 10px;
	border: 1px solid transparent;
	border-radius: 5px;
	outline: none;
}

</style>



