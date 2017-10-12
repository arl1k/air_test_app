import React from 'react';


class PropertyRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = { items: this.props.items }
    }

    render(){
        return (
            <div className="propRow">
                {
                    props.items.map(function(item){
                        
                    })
                }
            </div>
        )
    }
}

export default PropertyRow;