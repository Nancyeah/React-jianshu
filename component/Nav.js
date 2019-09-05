import React from 'react';
import Search from './Search'

export default class Nav extends React.Component {
	componentDidMount() {
		document.addEventListener('mouseup', e => this.foldMenu(e));
	}
	unfoldMenu(e) {
		var fontMenu = this.refs.fontMenu;
		fontMenu.style.display = "block";
	}
	foldMenu(e) {
		var fontMenu = this.refs.fontMenu;
		fontMenu.style.display = "none";
	}
	render() {
		return (
			<ul className="navName">
				<li><img className="logo" src="../assets/logo.png" alt="Nav logo" /></li>
				<ul className="container">
					<li><a href="#"><span>首页</span></a></li>
					<li className="download-btn"><a href="#"><span>下载App</span></a></li>
					<li><Search></Search></li>
				</ul>
				<a className="btn writes" href="#">写文章</a>
				<a className="btn sign_up" href="#">注册</a>
				<a className="btn log_in" href="#">登录</a>
				<a className="tab beta-tab"><img className="beta" src="../assets/beta.png" alt="Nav beta" /></a>
				<a className="tab font-tab" href="#">
					<span className="iconfont ic-font" onClick={e => this.unfoldMenu(e)}>&#xe76a;</span>
					<div className="AaStyle" ref="fontMenu">
						<div className="inNight">
							<span className="iconfont">&#xe6a0;</span>
							<span>夜间模式</span>
							<div className="switchGroup night">
								<span className="switchGroup-btn">开</span>
								<span className="switchGroup-btn active">关</span>
							</div>
						</div>
						<hr />
						<div className="switchGroup fontChange">
							<span className="switchGroup-btn">宋体</span>
							<span className="switchGroup-btn active">黑体</span>
						</div>
						<div className="switchGroup">
							<span className="switchGroup-btn active">简</span>
							<span className="switchGroup-btn">繁</span>
						</div>
					</div>
				</a>
			</ul>
		)
	}
}