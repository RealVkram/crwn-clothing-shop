import React, {Component} from 'react'
import  {sections}  from './directory.data'
import MenuItem from '../menu-item/menu-item.components'

import './directory.styles.scss'


class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections
        }
    }

    render() {
        const { sections } = this.state
        
        return (
            <div className="directory-menu">
                {
                    sections.map(({title, id, imageUrl, size}) => (
                        <MenuItem key={id} imageUrl={imageUrl} title={title.toUpperCase()} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory