import { useParams } from "react-router-dom";

const HealthLogPage = () => {
  const { id } = useParams();

  return <h1>Health log page for id: {id}</h1>;
};

export default HealthLogPage;
