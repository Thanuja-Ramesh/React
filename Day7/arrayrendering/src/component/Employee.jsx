

const Employee = () => {
  const staff=[
    {Id:0001,Name:"Himasri",Department:"Pharmacy",Salary:80000},
    {Id:0002,Name:"Thanuja",Department:"IT",Salary:70000},
    {Id:0003,Name:"Thara",Department:"Non-IT",Salary:40000},
    {Id:0004,Name:"Sri",Department:"Admin",Salary:50000},
    
  
    

  ]
  return (
    <>
    
    <div className="bg-blue-400 flex justify-between item-center h-70 flex-wrap gap-10 p-3">
      {
        staff.map((e,i)=>(
        <div key={i} className="bg-white p-3 justify-center items-center w-50 h-50 rounded-3xl">
          
          <h2>{e.Id}</h2>
          <p>{e.Name}</p>
          <p>{e.Department}</p>
          <p>{e.Salary}</p>
          
        </div>
      ))}
    </div>
    </>
  )
}

export default Employee
