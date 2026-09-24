
  const Arr=() =>{
  const Course=["JAVA","PYTHON","MERN","SQL","REACT"]
  return (
    <>
    <h1 className="flex justify-center items-center">ARRAY</h1>
   <div className="bg-red-400 text-white flex gap-3 justify-center items-center p-3 h-10">
   <h2>COURSE</h2>
   </div>
   <div className="flex justify-center items-center">
   
   <div className="bg-pink-300 w-50 text-black text-center p-2 rounded-3xl">
   
   
   {

    Course.map((Course,index)=>(
      <p key={index}>{Course}</p>
    ))
  }

   </div>
   </div>
    </>

  )
}
export default Arr

