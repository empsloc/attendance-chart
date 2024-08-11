"use client"
import { useEffect, useState } from "react"
import GlobalApi from "../_services/GlobalApi"

function GradeSelection() {
    const [grades,setGrades] = useState([])
    useEffect(()=>{
        GetAllGradesList()
    },[])

    const GetAllGradesList=()=>{
        GlobalApi.GetAllGrades().then(resp=>{
            setGrades(resp.data)
        })
    }
  return (
    <div>
        
        <select
                    className="p-3 border rounded-xl"
                  >
                    {grades.map((item: any, index: any) => (
                      <option key={index} value={item.grade}>
                        {item.grade}
                      </option>
                    ))}
                  </select>
    </div>
  )
}

export default GradeSelection