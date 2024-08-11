import axios from "axios"

const GetAllGrades=() => axios.get('/api/grades')
const CreateNewStudent=(data:any)=>axios.post('/api/students',data)
const GetAllStudents = ()=>axios.get('/api/students')
const DeleteStudentRecord = (id:any) => axios.delete('/api/students?id='+id)
export default {
    GetAllGrades,
    CreateNewStudent,
    GetAllStudents,
    DeleteStudentRecord
}
