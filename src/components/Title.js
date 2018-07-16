import React, {Component} from 'react'
import PropTypes from 'prop-types'

//Stateless function
function Title(props) {
    return  <h1>
                {props.label}
            </h1>
}

//Component class
// class Title extends Component
// {
//     render()
//     {
//         return  <h1>
//                     {this.prop   s.label}
//                 </h1>
//     }
// }

Title.propTypes = {
    label: PropTypes.string.isRequired
}
export default Title