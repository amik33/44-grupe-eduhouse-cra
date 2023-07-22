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
    {
      id: 4,
      name: 'Maryte',
      img: 'first.png',
    },
    {
      id: 5,
      name: 'Janina',
      img: 'two.png',
    },
    {
      id: 6,
      name: 'Antanina',
      img: 'three.png',
    },
  ];

  const data = [
    {
      id: 7,
      name:'stats',
      img: 'first.png',
      stage: 'Learn App',
      tag: 'App Design',
      task: 'Home page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 8,
      name:'stats',
      img: 'two.png',
      stage: 'Learn Web',
      tag: 'Web Design',
      task: 'Responsive design',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 9,
      name:'stats',
      img: 'three.png',
      stage: 'Learn Typography',
      tag: 'Dashboard',
      task: '404 page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 10,
      name:'stats',
      img: 'first.png',
      stage: 'Update',
      tag: 'Upgrade to Pro',
      task: 'Basic style',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 11,
      name:'stat',
      img: 'three.png',
      stage: 'Learn Typography',
      tag: 'Dashboard',
      task: '404 page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 12,
      name:'stat',
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
      Id: 13,
      img: 'Smith.png',
      icon: 'UI.png',
      name: 'mentors',
      username: 'Shine Smith',
      course: 'UI/UX Desinger',
      stats: '20 course',
      follower: '1200',
    },
    {
      Id: 14,
      name: 'mentors',
      img: 'Mikel.png',
      icon:'Marketing.png',
      username: 'Mikel',
      course: 'Marketer',
      stats: '25 course',
      follower: '1000',
    },
    {
      Id: 15,
      name: 'mentors',
      img: 'Tohid.png',
      icon:'Development.png',
      username: 'Tohid Golokar',
      course: 'Androied Developer',
      stats: '29 course',
      follower: '1900',
    },
    {
      Id: 16,
      name: 'mentors',
      img: 'Md.png',
      icon:'Development.png',
      username: 'Md Sakib',
      course: 'Frontend Developer',
      stats: '40 course',
      follower: '2900',
    },
    {
      Id: 17,
      name: 'pop',
      img: 'Md.png',
      icon:'Business.png',
      username: 'Md Sakib',
      course: 'Business',
      stats: '35 course',
      follower: '900',
    },
    
  ];

  const popular = [
    {
      Id: 18,
      name: 'popular',
      img: 'Md.png',
      icon:'Business.png',
      username: 'Md Sakib',
      categories: 'Business',
      stats: '35 course',
      follower: '900',
    },
    {
      Id: 19,
      img: 'Smith.png',
      icon: 'UI.png',
      name: 'popular',
      username: 'Shine Smith',
      categories: 'UI/UX Desing',
      stats: '56 course',
      follower: '1000',
    },
    {
      Id: 20,
      name: 'popular',
      img: 'Mikel.png',
      icon:'Marketing.png',
      username: 'Mikel',
      categories: 'Marketing',
      stats: '51 course',
      follower: '1300',
    },
    {
      Id: 21,
      name: 'popular',
      img: 'Tohid.png',
      icon:'Development.png',
      username: 'Tohid Golokar',
      categories: 'Development',
      stats: '19 course',
      follower: '1700',
    },
    {
      Id: 22,
      name: 'pop',
      img: 'Mikel.png',
      icon:'Marketing.png',
      username: 'Mikel',
      categories: 'Marketing',
      stats: '10 course',
      follower: '2100',
    },
    {
      Id: 23,
      name: 'pop',
      img: 'Tohid.png',
      icon:'Development.png',
      username: 'Tohid Golokar',
      categories: 'Development',
      stats: '11 course',
      follower: '2700',
    },
  ];

  return (
    <div className="app">
      <Aside />
      <Header />
      <Main tasksData={data} 
      usersData={users} 
      mentorsData={mentors}
      popularData={popular}/>
    </div>
  );

 

}

export default App;
