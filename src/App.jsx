import './App.css';
import { Aside } from './components/aside/Aside';
import { Main } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


function App() {

  const users = [
    {
      id: 1,
      name: 'Petras',
      img: 'asd123.png',
    },
    {
      id: 2,
      name: 'Jonas',
      img: 'asd234.png',
    },
    {
      id: 3,
      name: 'Antanas',
      img: 'asd345.png',
    },
  ];

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
      task: 'Basic style',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
  ];

  return (
    <div className="app">
      <Aside />
      <Main tasksData={data} usersData={users} />
      <Header usersData={users} tasksData={data} />
      <Footer />
    </div>
  );

}

export default App;
