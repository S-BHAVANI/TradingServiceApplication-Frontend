import React, { Component } from 'react' 
import Carousel from 'react-bootstrap/Carousel' 
export default class Slider extends Component {  

 render() {  
    return (  
    <div>  
    <div class='flex' >   
      </div>  
      <div className='container-fluid' >  
      <Carousel interval={1200} keyboard={false} pauseOnHover={true}>  
      <Carousel.Item style={{'height':"100%"}}  >  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://www.hlb.com.my/content/dam/hlb/my/images/Priority/Products/HLeBroking/Foreign-Trading/foreign_trading_product_banner_en.jpg'} alt="banner1"  />  
      <Carousel.Caption>   
      </Carousel.Caption>  
      </Carousel.Item  >  
      <Carousel.Item style={{'height':"100%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOky516IwFZNriGlYfG58NUsGY056K8fAAgw&usqp=CAU'}   alt="banner2" />  
      <Carousel.Caption>  
      </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item style={{'height':"50%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://www.pcsinvestments.net/en/wp-content/uploads/sites/2/2015/08/banner-5.jpg'} alt="banner3"  />  
      <Carousel.Caption>  
      </Carousel.Caption>  
      </Carousel.Item>
      <Carousel.Item style={{'height':"100%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100 "  
      src={'https://guidetotrade.com/wp-content/uploads/2019/08/banner-6-3.jpg'}   alt="banner4"/>  
      <Carousel.Caption>   
      </Carousel.Caption>  
      </Carousel.Item>  
       </Carousel>  
       </div>  
       </div>  
    )  
    }  
}