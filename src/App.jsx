import { GlobalProvider } from './contexts/GlobalContext';
import Main from './components/Main';

export default function App() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  )
}