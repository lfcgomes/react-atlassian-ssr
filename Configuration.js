import React, { Component } from 'react';
import Checkbox from '@atlaskit/checkbox';

class Configuration extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Checkbox
                    value="Basic checkbox"
                    label="Basic checkbox"
                    name="checkbox-basic"
                    style="color: red"
                />
            </div>
        );
    }
}

export default Configuration;