import { TicketContextProvider } from '@contexts';
import { Default } from '@pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <>
      <TicketContextProvider>
        <GlobalStyles />
        <ToastContainer />
        <Default />
      </TicketContextProvider>
    </>
  );
}

export default App;
