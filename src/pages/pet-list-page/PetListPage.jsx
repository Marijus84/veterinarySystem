import { useEffect, useState } from "react";
import { fetchPets } from "../../api/v1";
import { useNavigate } from "react-router-dom";

const PetListPage = () => {
  const [petList, setPetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const fetchPetList = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchPets();
      setPetList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPetList();
  }, []);

  return <h1>{isLoading && "Is loading"}</h1>;
  //! on button click event navigate(`/healthLogs/${pet.id}`)
};

export default PetListPage;
