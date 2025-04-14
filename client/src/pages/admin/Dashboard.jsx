import { Contact, Grid } from "lucide-react"
import { useNavigate } from "react-router-dom"


const AdminDashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="flex w-full h-full gap-5">
      <div onClick={() => navigate('/admin/projects')} className="flex min-w-[200px] max-h-[200px] bg-gray-400 rounded-full items-center justify-center shadow-md hover:shadow-xl hover:bg-gray-300">
        <Grid className="w-16 h-16 text-white hover:text-black"/>
        <p className="text-white font-bold hover:text-black">Projects</p>
      </div>
      <div onClick={() => navigate('/admin/contacts')} className="flex min-w-[200px] max-h-[200px] bg-gray-400 rounded-full items-center justify-center shadow-md hover:shadow-xl hover:bg-gray-300">
        <Contact className="w-16 h-16 text-white hover:text-black" />
        <p className="text-white font-bold hover:text-black">Conatacts</p>
      </div>
    </div>
  )
}

export default AdminDashboard
