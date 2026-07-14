import useGames from "../Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
      {!isLoading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={10}
          padding="10px"
        >
          {games.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
