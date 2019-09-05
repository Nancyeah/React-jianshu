import React from 'react'

class ArticleList extends React.Component {
	constructor(props) {
		super(props);
	}
	// componentDidMount() {
	//     console.log(this.props.arr)
	// }
	render() {
		return (
			<ul className="note-list">
				{
					this.props.arr.map((item, index) => {
						return (
							<li key={index}>
								<a className="wrap-img" href=""><img src={item.imgInfo.src} alt={item.imgInfo.name} /></a>
								<div className="note-container">
									<a className="title" href="#"><h4>{item.title}</h4></a>
									<p className="abstract">{item.abstract}</p>
									<div className="meta">
										<span className="diamond-box"><span className="iconfont">&#xe63d;</span><span className="diamond">{item.metaInfo.diamond_count}</span></span>
										<a className="author" href="#"><span>{item.metaInfo.author}</span></a>
										<a className="command" href="#"><span className="iconfont">&#xe684;</span><span>{item.metaInfo.command}</span></a>
										<span className="iconfont">&#xe755;</span><span>{item.metaInfo.like_count}</span>
									</div>
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

export default ArticleList;