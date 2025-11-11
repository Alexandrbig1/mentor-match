import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import { HomeContainer } from "./Home.styled";

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Stats />
    </HomeContainer>
  );
}
