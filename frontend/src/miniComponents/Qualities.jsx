import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/vision.png",
      title: "OUR VISION",
      description:
        "Our vision is to create a society where every marginalized, excluded individual and community is empowered through access to education, quality health care, sustainable livelihood opportunities. We believe that true development happens when every person, regardless of their background, has the opportunity to thrive and achieve their full potential.",
    },
    {
      id: 2,
      image: "/mission.png",
      title: "MISSION", 
      description:<div>At Anand Jyoti Foundation, our mission is to drive transformative change in the rural areas by focusing on three critical pillars:
      <br></br>
      <h3>Promote Quality Education:</h3> We are committed to fostering an environment where every child has access to superior educational opportunities.
      <h3>Enhance Healthcare Access:</h3> We endeavour to improve the health and well-being of our community through comprehensive healthcare initiatives.
      <br></br>
      <h3>Foster Sustainable Livelihoods:</h3> Our goal is to empower individuals with the skills and resources necessary for sustainable and dignified livelihoods. </div>,
    },
    {
      id: 3,
      image: "/approach.png",
      title: "APPROACH",
      description:
        "Our approach is deeply rooted in community engagement and participatory development. We believe that meaningful change comes from within the community, and thus, we work hand-in-hand with local leaders, schools, healthcare providers, and other stakeholders to identify the most pressing needs and co-create effective solutions. Our programs are designed to be inclusive, sustainable, and impactful, ensuring long-term benefits for the individuals and families we serve.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
