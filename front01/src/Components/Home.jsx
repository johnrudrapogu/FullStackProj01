import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios';
import Product from './Product';


export default function Home() {
    let [ data, setData] = useState([])
    const fetchData = async () => {
        try{
            const response = await axios.get('https://reqres.in/api/unknown');
            setData(response.data.data);
        }catch(error){
            console.log(error);
            }
    };

    useEffect(()=>{
        fetchData();
    })

    return (
        <div>
            {
                data.map((ele,index)=>{
                return <Product  name={ele.name} year={ele.year} color={ele.color} pantone_value={ele.pantone_value}/>
            })
        }
        </div>
    )

}
