import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Poppers`
    }
    ,[title])
}

export default useTitle;