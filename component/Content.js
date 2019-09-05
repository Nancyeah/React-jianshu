import React from 'react';
import Carousel from './Carousel'
import BackTop from './backTop'
import Article from './Article'

export default class Content extends React.Component {
	render() {
		const images = [
			{url: "../assets/doc_pic.png"},
			{url: "../assets/doc_pic.jpg"},
			{url: "../assets/pic.jpg"}
		]
		return (
			<div className="indexContainer">
				<div className="row">
					<div className="leftPart">
						<div className="split-line"></div>
						<div className="list-container">
							<Article></Article>
						</div>
					</div>
					<div className="rightPart">
						<Carousel width={400} height={400}>
							{images.map((image, index) => <img src={image.url} alt="" key={index} />)}
						</Carousel>
						<br />
						<div className="recommand">
							<div className="title">
								<span>推荐作者</span>
								<a className="page-change"><span className="iconfont">&#xe6e1;</span>换一批</a>
							</div>
							<ul>
								<li>
									<a href="#" className="avatar"><img src="../assets/doc_pic.jpg" /></a>
									<a href="#" className="follow"><span className="iconfont">&#xe608;关注</span></a>
									<a href="#" className="name">简书大学堂</a>
									<p>写了1506.3k字 · 34k喜欢</p>
								</li>
								<li>
									<a href="#" className="avatar"><img src="../assets/doc_pic.jpg" /></a>
									<a href="#" className="follow"><span className="iconfont">&#xe608;关注</span></a>
									<a href="#" className="name">徐林Grace</a>
									<p>写了675.2k字 · 6.2k喜欢</p>
								</li>
								<li>
									<a href="#" className="avatar"><img src="../assets/doc_pic.jpg" /></a>
									<a href="#" className="follow"><span className="iconfont">&#xe608;关注</span></a>
									<a href="#" className="name">无限猴子</a>
									<p>写了383.1k字 · 2k喜欢</p>
								</li>
								<li>
									<a href="#" className="avatar"><img src="../assets/doc_pic.jpg" /></a>
									<a href="#" className="follow"><span className="iconfont">&#xe608;关注</span></a>
									<a href="#" className="name">梅拾樱</a>
									<p>写了273.6k字 · 25.3k喜欢</p>
								</li>
								<li>
									<a href="#" className="avatar"><img src="../assets/doc_pic.jpg" /></a>
									<a href="#" className="follow"><span className="iconfont">&#xe608;关注</span></a>
									<a href="#" className="name">写写心情的溜溜妈</a>
									<p>写了672k字 · 28.9k喜欢</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<BackTop />
			</div>
		)
	}
}