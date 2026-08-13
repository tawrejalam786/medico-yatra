import mbbsCourse from "@/data/courses/mbbs.json";

const TestJsonPage = () =>{
    console.log(mbbsCourse);
    return (

        <>
          <div className="p-10 mt-20">
 
              <h1 className="text-2xl font-bold"> 
                  JSON Test
              </h1>

              <p>
                {mbbsCourse.course.name}
              </p>
              <p>
                {mbbsCourse.course.slug}
              </p>
             
          </div>
        </>

    );
}

export default TestJsonPage;