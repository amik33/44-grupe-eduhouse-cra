import './App.css';
import { Aside } from './components/aside/Aside';
import { Main } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


function App() {
  const data = [
    {
      id: 1,
      stage: 'Learn App',
      tag: 'App Design',
      task: 'Home page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 2,
      stage: 'Learn Web',
      tag: 'Web Design',
      task: 'Responsive design',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 3,
      stage: 'Learn Typography',
      tag: 'Dashboard',
      task: '404 page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 4,
      stage: 'Update',
      tag: 'Upgrade to Pro',
      task: 'Basic style file',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
  ];

  return (
    <div className="app">
      <Aside />
      <Main data={data} />
      <Header />
      <Footer />
    </div>
  );

}

export default App;
