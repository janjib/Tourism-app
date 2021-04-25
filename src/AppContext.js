import React,{useState,createContext,useEffect} from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const ListProvider = props => {
    const [TouristList,setTouristList] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect( async ()=>{
     const response = await axios.get('https://course-api.com/react-tours-project')
     setTouristList(response.data)
     setLoading(false)
    },[])

    return (
     <AppContext.Provider value={[TouristList,setTouristList,loading]}>
      {props.children}
     </AppContext.Provider>
    )
}