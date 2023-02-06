import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => {
        return (
          <Link key={career.id} to="/">
            <p>{career.title}</p>
            <p>Based on {career.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Careers;

export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json();
};
