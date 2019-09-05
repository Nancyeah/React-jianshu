import React from 'react';

var timer = null;
var isTop = true;

export default class backTop extends React.Component {
	componentDidMount() {
		//获取可视区域的高度
		var clientHeight = document.documentElement.clientHeight;
		var slide_btn = this.refs.slide_btn;
		window.onscroll = function () {
			//获取滚动条的滚动高度
			var osTop = document.body.scrollTop || document.documentElement.scrollTop;

			if (osTop >= clientHeight) {
				slide_btn.style.display = "block";
			} else {
				slide_btn.style.display = "none";
			}
			if (!isTop) {
				clearInterval(timer);
			}
			isTop = false;
		}
	}

	runTop(e) {
		//设置一个定时器
		timer = setInterval(function () {
			var osTop = document.body.scrollTop || document.documentElement.scrollTop;
			var speed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
			isTop = true;
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 30)
	}

	render() {
		return (
			<div className="slideBtn" ref="slide_btn">
				<a className="btn" onClick={(e) => this.runTop(e)} title="返回顶部" >
					<span className="iconfont">&#xe776;</span>
				</a>
			</div>
		)
	}
}