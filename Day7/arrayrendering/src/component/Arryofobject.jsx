

const Arryofobject = () => {
  const students=[
    {Name:"Thara",Age:21,Course:"Java",Email:"thara@gmail.com"},
    {Name:"Sri",Age:20,Course:"Mern",Email:"sri@gmail.com"},
    {Name:"Shree",Age:22,Course:"Sql",Email:"shree@gmail.com"},
    {Name:"Sree",Age:24,Course:"React",Email:"sree@gmail.com"},
    {Name:"Thara",Age:23,Course:"Python",Email:"thara@gmail.com"},
  
    

  ]
  return (
    <>
    <div>
      <h1 className="justify-center item-center flex">ARRAY OF OBJECT</h1>
    <h1 className="bg-gray-400 justify-center item-center flex">AVAILABLE COURSES </h1>
    </div>
    <div className="bg-red-400 flex justify-between item-center h-70 flex-wrap gap-10 p-3">
      {
        students.map((e,i)=>(
        <div key={i} className="bg-white p-3 w-50 h-50 rounded-3xl">
          
          <h2>{e.Name}</h2>
          <p>{e.Age}</p>
          <p>{e.Course}</p>
          <p>{e.Email}</p>
          <button className="bg-yellow-400 text-white w-40 p-1 text-center rounded-2xl">Click Course</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Arryofobject
