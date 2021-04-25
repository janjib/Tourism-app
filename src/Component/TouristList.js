import React,{useContext} from 'react'
import {Card,Button,Badge} from 'react-bootstrap/'
import { AppContext } from '../AppContext'
import {useHistory} from 'react-router-dom'


const TouristList = () => {

let history = useHistory()

const [TouristList,setTouristList,loading] = useContext(AppContext)


const handleDelete = (e)=>{
  setTouristList(TouristList.filter(item => {
    return item.id !== e.target.id
  }))
 }

 

    return (
     <> 
    {loading ? <h1 className="text-center my-5">Loading</h1> :  <div className='d-flex flex-wrap'>
     {TouristList.map(({id,name,info,image,price}) => {
       return (
         <div className="tourist-list" key={id}>
            <Card className="mx-2 my-2 tourist-list-card">
  <Card.Img variant="top" src={image} className="tourist-image img-fluid" />
  <Card.Body>
    <div className='d-flex justify-content-between badge-div'>
    <Card.Title>{name}</Card.Title>
    <Badge variant="success price-badge">${price}</Badge>
    </div>
    <Card.Text>
      {info} 
      
    </Card.Text>
    <Card.Text>
      ${price}
    </Card.Text>
    <Button variant="primary" onClick={() => history.push(`/detail/${id}`)}>Buy now !</Button>
    <Button variant="danger m-1" onClick={handleDelete} id={id}>Delete</Button>
  </Card.Body>
</Card>
        </div>
       )
     })}
      
        </div>}
   
        </>
    )
}

export default TouristList
