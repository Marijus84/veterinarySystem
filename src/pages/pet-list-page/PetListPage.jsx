import { useEffect, useState } from "react";
import { fetchPets } from "../../api/v1";
import { useNavigate } from "react-router-dom";
import { StyledCardActions, StyledCardContainer } from "./PetListPage.styled";
import { Button, Card, CardContent, Typography } from "@mui/material";

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

  const card = (petData) => {
    return (
      <>
        <CardContent>
          <Typography variant="h4"> {petData.name}</Typography>
          <Typography paragraph={true}>
            {new Date(petData.dob).toISOString().substring(0, 10)}
          </Typography>
          <Typography paragraph={true}>{petData.client_email}</Typography>
        </CardContent>
        <StyledCardActions>
          <Button
            variant="contained"
            onClick={() => navigate(`/healthLogs/${petData.id}`)}
          >
            View log
          </Button>
          <Button
            variant="outlined"
            onClick={() => console.log("view log clicked")}
          >
            Delete
          </Button>
        </StyledCardActions>
      </>
    );
  };

  return (
    <StyledCardContainer>
      {!isLoading ? (
        petList.map((pet) => (
          <Card key={pet.id} variant="outlined">
            {card(pet)}
          </Card>
        ))
      ) : (
        <Typography>Loading in progress</Typography>
      )}
    </StyledCardContainer>
  );
};

export default PetListPage;
