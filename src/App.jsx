import { GlobalProvider } from "./contexts/GlobalContext";
import MoviesList from "./components/MovieList";

export default function App() {
  return (
    <GlobalProvider>
      <h1>Movie App</h1>
      <MoviesList />
    </GlobalProvider>
  )
}