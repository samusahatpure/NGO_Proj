import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/akshay.png",
      text:"CO-FOUNDER",
      title: "AKSHAY K. KALAMKAR",
    },
    {
      id: 2,
      image: "/pranav.png",
      text:"CO-FOUNDER",
      title: "PRANAV R. SONTAKKE ",
    },
    {
      id: 3,
      image: "/shrikant.png",
      text:"CO-FOUNDER",
      title: "SHRIKANT G. HARNE",
    },
  ];

  const advisor = [
    {
      id: 1,
      image: "/a.png",
      title: "DR. SHRIKANT KALAMKAR",
      text:<h4>Director,

      Agro-Economic Research Centre,
      
      Sardar Patel University,
      
      Gujrat
      
      ​</h4>,
    },
    {
      id: 2,
      image: "/b.png",
      title: "DR. MANISHA JAPE (KHARDENVIS)",
      text:<h4>An esteemed Assistant Professor with over 20 years of experience in teaching Engineering students, bringing both academic rigor and real-world insights to her classroom.</h4>,
    },
    {
      id: 3,
      image: "/c.png",
      title: "MR. SANTOSH DIMBLE",
      text:<div>A dedicated social worker in Pune who has been working for the welfare of the blind and underpriviledged</div>,
    },
    {
      id: 3,
      image: "/d.png",
      title: "MR. VAIJNATH IPPAR",
      text:<div>A distinguished Teacher, recipient of the 'Krantijyoti Savitribai Fule State Teacher Award' from the Govt of Maharashtra</div>,
    },
    {
      id: 3,
      image: "/e.png",
      title: "MR. Rushikesh Gaddamwar",
      text:<div>An MBA holder from IIM and a B.Tech Degree. currently working as Wealth Manager at a prominent banking organisation , passionate about changing the social status of underprivileged via education.</div>,
    },
  ];

  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEET OUR TEAM</h2>
            <p>
  Our team of co-founders consists of passionate and visionary leaders committed to improving the lives of underprivileged and rural people . With diverse backgrounds in education, social work, and community development, they bring a unique blend of expertise and dedication to our mission. Working selflessly, their genuine interest and unwavering commitment drive our initiatives forward, making a tangible difference in the lives of the those we serve.
            </p>
          </div>

          

          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h4>{element.text}</h4>
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="heading_section">
          <h2 className="heading">OUR TEAM OF ADVISORS</h2>
          <p>Our team of advisors comprises dedicated professionals with extensive experience in education and social field. They bring a wealth of knowledge and compassion, working tirelessly to create impactful programs in their respective domains. Their guidance ensures our initiatives are both effective and sustainable, fostering a brighter future for these communities.</p>
          </div>
          
          <div className="members_container">
            {advisor.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <h4>{element.text}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Members;
