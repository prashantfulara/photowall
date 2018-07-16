import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'

//Stateless function
function PhotoWall(props) {
    return  <div className='photo-grid'>
                {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePost={props.onRemovePost}/>)}
            </div>
}

//Component class
// class PhotoWall extends Component
// {
//     render()
//     {
//         return <div className='photo-grid'>
//             {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//         </div>
//     }
// }

export default PhotoWall