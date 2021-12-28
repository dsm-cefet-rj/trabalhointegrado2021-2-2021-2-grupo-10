import './CardConfig.css';
import Header from './payment/config-header';
import Config from './payment/config-page';

function App() {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <Header />
        <Config />
      </div>
    </div>
  );
}

export default App;