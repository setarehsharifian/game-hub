import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
import useGames from "../Hooks/useGames";
import { Platform } from "../Hooks/usePlatforms";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({gameQuery}:Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {!isLoading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={3}
          padding="10px"
        >
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
