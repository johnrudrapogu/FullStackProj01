import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios';


// export default function Home() {
//     let [ data, setData] = useState([])
//     const fetchData = async () => {
//         try{
//             const response = await axios.get('https://reqres.in/api/unknown');
//             setData(response.data.data);
//         }catch(error){
//             console.log(error);
//             }
//     };

//     useEffect(()=>{
//         fetchData();
//     },[])

//     //return (<>{JSON.stringify(data)}</>)

//     return 
//     (
//         <>
//         <ol>
//             {data.map(item => (
//                 <li key={item.id} style={{ color: item.color }} > {item.name} </li>
//             ))}
//         </ol>
//         </>
//     );
// }

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get('https://reqres.in/api/unknown')
        .then(response => {
            setData(response.data.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <>
            <ol>
                {data.map(item => (
                    <li key={item.id} style={{ color: item.color }}>
                        {item.name}
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Home;