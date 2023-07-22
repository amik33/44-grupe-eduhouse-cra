import './App.css';
import { Aside } from './components/aside/Aside';
import { Main } from './components/main/Main';
import { Header } from './components/header/Header';



function App() {

  const users = [
    {
      id: 1,
      name: 'Petras',
      img: 'first.png',
    },
    {
      id: 2,
      name: 'Jonas',
      img: 'two.png',
    },
    {
      id: 3,
      name: 'Antanas',
      img: 'three.png',
    },
  ];

  const data = [
    {
      id: 1,
      img: 'first.png',
      stage: 'Learn App',
      tag: 'App Design',
      task: 'Home page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 2,
      img: 'two.png',
      stage: 'Learn Web',
      tag: 'Web Design',
      task: 'Responsive design',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 3,
      img: 'three.png',
      stage: 'Learn Typography',
      tag: 'Dashboard',
      task: '404 page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 4,
      img: 'first.png',
      stage: 'Update',
      tag: 'Upgrade to Pro',
      task: 'Basic style',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
  ];
  
   const mentors = [
    {
      userId: 1,
      name: 'mentors',
      username: 'Shine Smith',
      course: 'UI/UX Desinger',
      stats: '20 course',
      follower: '1200',
    },
    {
      userId: 2,
      name: 'mentors',
      username: 'Mikel',
      course: 'Marketer',
      stats: '25 course',
      follower: '1000',
    },
    {
      userId: 3,
      name: 'mentors',
      username: 'Tohid Golokar',
      course: 'Androied Developer',
      stats: '29 course',
      follower: '1900',
    },
    {
      userId: 4,
      name: 'mentors',
      username: 'Md Sakib',
      course: 'Frontend Developer',
      stats: '40 course',
      follower: '2900',
    },
  ];

  return (
    <div className="app">
      <Aside />
      <Header />
      <Main tasksData={data} usersData={users} mentorsData={mentors} />
    </div>
  );

 

}

export default App;
