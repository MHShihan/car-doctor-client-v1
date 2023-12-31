import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-white mt-10 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className=" w-1/2 absolute right-5 -bottom-20 border-8 border-white rounded-lg "
          />
        </div>
        <div className="lg:w-1/2 space-y-4 mt-20 md:mt-4">
          <h3 className="text-3xl text-[#FF3811] font-bold">About Us</h3>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            We are qualified <br />
            & of experienc <br />
            in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-secondary bg-[#FF3811] border-[#FF3811] text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
