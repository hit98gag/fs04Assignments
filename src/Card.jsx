import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <>
        <div className='MainContainer'>
            <div className='image'> <img src='https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?b=1&s=170667a&w=0&k=20&c=XHgfBiyCmq395nlgKrVVvxLdOrvttXzR7ZUdLibhzaU='/> </div>
            <div className='name'> 
                 <div className='Name'>

                     <h3>Anmol Yadav</h3>
                    </div>
            <div className='about'>
                
                  <p> I'm drinking a cup of coffee every day</p>
            </div>
             </div>
             
            <div className='post'>
                <div className='one'> 
                
                <div className='one.one'>
                <p>172</p>  <h4>Post</h4></div>

                </div>

                <div  className='two'>
                
                <div className='two.two'>
                 <p>47</p>  <h4>Followers</h4> </div>

                </div>
                <div className='three'>
                
                <div className='three.three'>

                <p>20</p> <h4>Following</h4> </div>
                </div>




            </div>
            <div className='follow'>
                <div className='follower but'> FOLLOW</div>
                <div className='message but'> MESSAGE</div>

            </div>



        </div>
    </>
  )
}

export default Card