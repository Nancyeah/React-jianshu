import React from 'react';

export default class Search extends React.Component {
	componentDidMount() {
		document.addEventListener('mouseup', e => this.backStyle(e));
	}
	changeStyle(e) {
		var ic_search = this.refs.ic_search;
		var search_input = this.refs.search_input;
		var search_tips_box = this.refs.search_tips_box;
		search_input.style.width = '160px';
		ic_search.style.color = '#fff';
		ic_search.style.background = '#8a8a8a';
		ic_search.style.borderRadius = '20px';
		ic_search.style.left = '203px';
		search_tips_box.style.visibility = 'visible';
		search_tips_box.style.opacity = "1";
	}
	backStyle(e) {
		var ic_search = this.refs.ic_search;
		var search_input = this.refs.search_input;
		var search_tips_box = this.refs.search_tips_box;
		search_input.style.width = '98px';
		ic_search.style.color = '#969696';
		ic_search.style.background = '#eee';
		ic_search.style.borderRadius = '20px';
		ic_search.style.left = '141px';
		search_tips_box.style.visibility = 'hidden';
	}
	render() {
		return (
			<div className="search">
				<input className="search-input" placeholder='搜索' ref="search_input" onClick={e => this.changeStyle(e)}></input>
				<a className="ic-search" ref="ic_search"><span className="iconfont">&#xe638;</span></a>
				<div className="search-tips-box" ref="search_tips_box">
					<div className="search-tips">
						<div className="search-header">
							<span>热门搜索</span>
							<a><span className="iconfont">&#xe6e1;&nbsp;</span><span>换一批</span></a>
						</div>
						<div className="search-wrap" >
							<ul>
								<li><a href="#">区块链</a></li>
								<li><a href="#">小程序</a></li>
								<li><a href="#">vue</a></li>
								<li><a href="#">毕业</a></li>
								<li><a href="#">PHP</a></li>
								<li><a href="#">故事</a></li>
								<li><a href="#">flutter</a></li>
								<li><a href="#">理财</a></li>
								<li><a href="#">美食</a></li>
								<li><a href="#">投稿</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}