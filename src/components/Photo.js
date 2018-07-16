import React, {Component} from 'react'
import PropTypes from 'prop-types'

//Stateless function
function Photo(props) {
    const post = props.post;
    return  <figure className='figure'>
                <img className='photo' src={post.imageLink} alt={post.description}/>
                <figurecaption><p>{post.description}</p></figurecaption>
                    <div className='button-container'>
                        <button className='remove-button' onClick={() => {
                            props.onRemovePost(
                                post);
                        }}>
                        Remove
                        </button>
                    </div>
            </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePost: PropTypes.func.isRequired
}

//Component class
// class Photo extends Component
// {
//     render()
//     {
//         const post = this.props.post;
//         return  <figure className='figure'>
//                     <img className='photo' src={post.imageLink} alt={post.description}/>
//                     <figurecaption><p>{post.description}</p></figurecaption>
//                     <div className='button-container'>
//                         <button className='remove-button'>Remove</button>
//                     </div>
//                 </figure>
//     }
// }

export default Photo