import Container from 'react-bootstrap/Container'
import DataTable from './components/DataTable'

function App() {
  return (
    <Container>
      <header>
        <h1 className="text-center">Files Information</h1>
      </header>
      <main className='pt-2'>
        <DataTable />
      </main>
    </Container>

  );
}

export default App;
