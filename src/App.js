import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <div
          style={{
            borderBottom: "solid 1px"
          }}>
          <div 
            style={{
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <h1>NegócioFechado</h1>
            <nav>
              <Link to="/">Home</Link> . {' '}
              <Link to="/">Perfil</Link> . {' '}
              <Link to="/pagamento">Carteira</Link>
            </nav>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '90%'
          }}>
          Conteúdo
        </div>
      </div>
    </div>
  );
}

export default App;