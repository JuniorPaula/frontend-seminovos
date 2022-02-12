import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/cars/add">Adicionar carro</Link>
    </>
  );
};

export default Dashboard;
