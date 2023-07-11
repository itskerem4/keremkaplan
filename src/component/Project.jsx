import data from '../db'
function Project(){
  return (
    <>
        <section className="project">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="project">
                    <div className="project-title">
                        <h1>Project</h1>
                    </div>
                    <div className="project-content">
                        <div className="row"> 
                                {data.project.map((project)=>{
                                    return (
                                    <div className="col-md-3 mt-2">
                                    <div className="project-item" >
                                <div className="project-item-img" >
                                <img src={project.image} className="img-thumbnail projectimage"/>
                                 </div>
                                 <div className="project-item-title">
                                        <h3>{project.title}</h3>
                                </div>
                                <div className="project-item-content">
                                        <p>{project.body}</p>
                                    </div>
                                    <div className="project-item-btn link">
                                        <a href={project.link} >Read More</a>
                                    </div>
                                    </div>
                                    </div>
                                    )})}
                                </div>
                        
        </div>
    </div>
</div>
</div>
</div>
</section>
    </>
  )
}

export default Project;