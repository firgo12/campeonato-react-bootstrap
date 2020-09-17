import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                        <div>  
                         <div class='container-fluid' >  
                          <div className="row title" >   
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel>  
                         <Carousel.Item style={{'height':"400px"}} >  
                         <img style={{'height':"400px"}}  
                         className="d-block w-100"  
                        src={'https://pbs.twimg.com/media/ERyfqbMUwAUuCqv.jpg'}  />  
                           <Carousel.Caption>  
                             <h3>Red </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"400px"}}>  
                                 <img style={{'height':"400px"}}  
                                   className="d-block w-100"  
                                    src={'https://memestatic.fjcdn.com/large/pictures/ea/44/ea447b_7565997.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3>Blue</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"400px"}}>  
                                       <img style={{'height':"400px"}}  
                                        className="d-block w-100"  
                                         src={'https://pm1.narvii.com/7483/1a73d76f7724cb1a16b02f5b5323d0a7c256f006r1-2048-1152v2_hq.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3>Green</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
export default BootstrapCarousel  
