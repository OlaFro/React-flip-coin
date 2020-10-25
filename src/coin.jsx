import React, { Component } from 'react'

export default class Coin extends Component {
    render() {
        return (
            <div>
                {this.props.side === 1 
                ? <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/608px-2017-D_Roosevelt_dime_obverse_transparent.png" alt=""/>
                : <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png/220px-2017-D_Roosevelt_dime_reverse_transparent.png" alt=""/> }
            </div>
        )
    }
}
