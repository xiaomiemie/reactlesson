var A = React.createClass({
        render:function () {
        	return <div>
        	this.props.children
        	</div>;
        }
    });
    	ReactDOM.render(
    	    <A/>,
    	    document.getElementById('example')
    	);