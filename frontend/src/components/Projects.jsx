import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  // const projects=[
  //     {
  //         id:1,
  //         title:"Project Sehat",
  //         image: "/sehat.png"
  //     },
  //     {
  //         id:2,
  //         title:"Project Jivika",
  //         image:"/jivika.png"
  //     },
  //     {
  //         id:3,
  //         title:"Project Padhai",
  //         image:"/padhai.png"
  //     },
  // ];
  //   return (
  //     <>
  //         <div className='projects'>
  //             <h2 className='proj-title'>Projects</h2>

  //             <div className='contain'>
  //                     {
  //                         projects.map((element)=>{
  //                             return (
  //                                 <div className='card' key={element.id}>

  //                                     <div className='conte'>
  //                                         <p className='title' onClick={<ProjDetail/>}>{element.title} </p>
  //                                     </div>

  //                                     <div className='img-wrap'>
  //                                             <img src={element.image} onClick={<ProjDetail/>}/>
  //                                     </div>

  //                                 </div>
  //                             )
  //                         })
  //                     }
  //             </div>
  //         </div>
  //     </>
  //   )

  return (
    <>
      <div className="projects">
        <div className="box">
          <Link to="/proj-sehat">
            <p className="proj-title">Project Sehat</p>
            <img className="img-wrap" src="/sehat.png" alt="Project Sehat" />
          </Link>
        </div>

        <div className="box">
          <Link to="/proj-jivika">
            <p className="proj-title">Project Jivika</p>
            <img className="img-wrap" src="/jivika.png" alt="Project Jivika" />
          </Link>
        </div>

        <div className="box">
          <Link to="/proj-padhai">
            <p className="proj-title">Project Padhai</p>
            <img className="img-wrap" src="/padhai.png" alt="Project Padhai" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
