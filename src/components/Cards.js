import React, { useState  , useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import axios from 'axios';
import Slider from './Slider';






const Cards = () => {

  const [products, setProducts] = useState([]);



  
  useEffect(() => {
    axios.get("http://localhost:3000/Products")
      .then(response => setProducts(response.data))
  }, [])

  
  // console.log(data);

  
  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
   
    <div className='container mt-3'>
       <br/><br/><br/> 
      
       <Slider/>
      <div className="row d-flex justify-content-center align-items-center">
        {
          products.map((element) => {
            {console.log(element.id)}
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : {element.price}DH
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards