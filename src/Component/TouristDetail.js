import React,{useState,useContext,useEffect} from 'react'
import {Button,Badge} from 'react-bootstrap/'
import {useHistory,useParams} from 'react-router-dom'
import { AppContext } from '../AppContext'

const TouristDetail = () => {
    
    const [TouristList] = useContext(AppContext)

    let history = useHistory()

    const {id} = useParams()
    console.log(id)

    const [detailDisplay,setDetailDisplay] = useState([])

    const displayDetail = () => {
      TouristList.map(item => {
          if( item.id === id){
           setDetailDisplay(item)
          }
      })
    }

    useEffect(()=>{
     displayDetail()
    },[])

    

    return (
        <div className='my-5'>
            <h2 className="text-center my-5">{detailDisplay.name}</h2>
            <div className="row detail-row">
                <div className="col">
                    <img className='detail-image mx-auto d-block ' src={detailDisplay.image} alt=""/>
                </div>
                <div className="col my-auto d-flex flex-column align-items-center">
                  <p className="my-3 text-center">{detailDisplay.info}</p>
                 <Badge variant="success text-center mx-auto price-badge-2">${detailDisplay.price}</Badge>
                </div>
                
            </div>
            <div className="detail-button">
                 <Button className='mx-auto d-block my-5 text-center' variant='primary' onClick={()=> history.push('/')}>Go back</Button>
                </div>
        </div>
    )
}

export default TouristDetail
