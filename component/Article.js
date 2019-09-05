import React from 'react'
import ArticleList from './ArticleList'

class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: [{
				title: "别以为看字就是读书，深阅读，才能撬动你的灵魂！",
				abstract: "文/俊英子 一月，我从一个二手平台买了一些书，当翻到《深阅读》的一刹那我就停下了，第一次见到透明的，类似磨砂的书皮！从外观上来看是我见过最有艺术...",
				metaInfo: {
					diamond_count: "287.2",
					author: "俊英子",
					command: "86",
					like_count: "561"
				},
				imgInfo: {
					src: "../assets/doc_pic.png",
					alt: "深阅读"
				}
			},
			{
				title: "win10 深度美化，win也可以很酷",
				abstract: "win系统的界面在不断更新中，UI也逐渐美化的很漂亮了，但对于一些人，总喜欢折腾，没错我就是。 我是从Ubuntu过来的，因为特殊要求，只能用w...",
				metaInfo: {
					diamond_count: "36.5",
					author: "弓长晓",
					command: "96",
					like_count: "596"
				},
				imgInfo: {
					src: "../assets/doc_pic.png",
					alt: "win10"
				}
			},
			{
				title: "咪蒙已死，但人性的弱点还在继续泛滥",
				abstract: "本文原创首发于我个人公众号 可可西里说 在咪蒙团队旗下公众号才华有限青年“精心炮制”的外表看似有些真实，实则为有意煽动大众情绪的虚假故事“一...",
				metaInfo: {
					diamond_count: "47.4",
					author: "可可西里之梦",
					command: "124",
					like_count: "199"
				},
				imgInfo: {
					src: "../assets/doc_pic.png",
					alt: "咪蒙"
				}
			}]
		}
	}
	render() {
		return (
			<ArticleList arr={this.state.arr}></ArticleList>
		)
	}
}

export default Article;