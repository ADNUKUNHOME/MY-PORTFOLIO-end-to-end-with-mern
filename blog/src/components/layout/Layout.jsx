import Header from "./Header"

const CommonLayout = ({children}) => {
  return (
    <div className="min-h-screen bg-black w-screen overflow-x-hidden">
      <Header/>
      {children}
    </div>
  )
}
 
export default CommonLayout
