import React from 'react';
import ReactDom from 'react-dom';

import '../style/index.less';
import Nav from '../component/Nav';
import Content from '../component/Content';

class APP extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Content />
			</div>
		)
	}
}

ReactDom.render(<APP />, document.getElementById('content'));
