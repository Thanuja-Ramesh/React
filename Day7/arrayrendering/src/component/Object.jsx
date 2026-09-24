const Object = () => {

  const student = {
    name: "Thara",
    age: 21,
    course: "JavaScript",
    city: "Chennai"
  };

  return (
    <>
    <h1 className="text-center justify-center flex">Object</h1>
    <div className="bg-orange-400 text-center justify-center">
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
    </div>
    </>
  );
};

export default Object;