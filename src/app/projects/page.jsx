import React from "react";
// Component Animation
import AnimatedText from "../../../components/animated/AnimatedText";
import FeaturedProjects from "../../../components/Projects/FeaturedProjects";
// Images
import InvoiceApp from "../../../public/images/projects/countries.webp";
import Project from "../../../components/Projects/Project";

function ProjectsPage() {
  return (
    <>
      <title>Projects Page</title>
      <div className="w-full min-h-screen mb-16 container mx-auto">
        <div className="project-content-heading">
          <AnimatedText text="Imagination Trumps Knowledge !" />
        </div>
        {/* Container Projects */}
        <div className="project-container">
          {/* Col-1 */}
          <div className="col-1">
            <FeaturedProjects
              title={`Crypto Screener Application`}
              summary={`A Feature-rich Crypto Screener App useing React, Tailwind CSS, Context API, React Router And It Show detail regarding almost all the cryptocurrency, You can easily convert the price in your local currency`}
              link={`/`}
              github={`/`}
              type={`Featured Project`}
              img={InvoiceApp}
            />
          </div>
          {/* Col-2 */}
          <div className="col-2">
            <Project
              title={`Crypto Screener Application`}
              link={`/`}
              github={`/`}
              type={`Featured Project`}
              img={InvoiceApp}
            />
          </div>
          {/* Col-3 */}
          <div className="col-3">
            <Project
              title={`Crypto Screener Application`}
              link={`/`}
              github={`/`}
              type={`Featured Project`}
              img={InvoiceApp}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
