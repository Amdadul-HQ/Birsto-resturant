import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "./useAxiosCommon"
// import { useEffect, useState } from "react"

const useMenu = () => {
    const axiosCommon = useAxiosCommon()
    // const[menu,setMenu] = useState([])
    // const [loading,setLoading] = useState(true)
    // useEffect(()=> {
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])
    const {data:menu = [],isLoading:loading,refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async () => {
            const menuRes = await axiosCommon.get('/menu')
            // console.log(menuRes.data);
            return menuRes.data
        }
    })
    return [menu,loading,refetch]
}

export default useMenu