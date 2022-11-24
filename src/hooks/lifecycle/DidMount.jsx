import React, { Component, useEffect } from 'react';

import class DidMount extends Component {

    componentDidMount(){
        console.log('')
    }

    render() {
        return (
            <div>
            <h1>DidMount</h1>
                
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        conole.log('')
    
    }, []);

    return (
        <div>
             <h1>DidMount</h1>
        </div>
    );
}

export default DidMount;
