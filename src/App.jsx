import './App.css'
import Header from './components/Header'
import DisplayContext from './components/DisplayContext'
import Controls from './components/Controls'
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/PrivacyMessage';

function App() {
  const toggle = useSelector((store) => store.toggle);
  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center wrapper">
        <div className="py-5">
          <Header />
          <div className="col-lg-6 mx-auto">
            {toggle ? <PrivacyMessage/> : <DisplayContext />}
            <Controls />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
