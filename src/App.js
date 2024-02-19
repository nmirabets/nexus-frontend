import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import './App.css';
import MainLayout from './layouts/MainLayout.js';

import Dashboard from './pages/Dashboard.js';
import Sessions from './pages/Sessions.js';
import People from './pages/People.js';
import Activities from './pages/Activities.js';
import Connectors from './pages/Connectors.js';
import Space from './pages/Space.js';
import User from './pages/User.js';


const user = {
  name: 'Tom Cook',
  email: '',
  imageUrl:
    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Sessions', href: '/sessions', icon: UsersIcon, current: false },
  { name: 'People', href: '/people', icon: UsersIcon, current: false },
  { name: 'Activities', href: '/activities', icon: CalendarIcon, current: false },
  { name: 'Connectors', href: '/connectors', icon: DocumentDuplicateIcon, current: false },
  { name: 'User', href: '/user', icon: DocumentDuplicateIcon, current: false },
]
const spaces = [
  { id: 1, name: 'Restaurant', href: '/space/restaurant', initial: 'R', current: true },
  { id: 2, name: 'Factory', href: '/space/factory', initial: 'F', current: false },
  { id: 3, name: 'Supermarket', href: '/space/supermarket', initial: 'S', current: false },
]

function App() {
  return (
    <Router>
      <MainLayout user={user} navigation={navigation} spaces={spaces}>
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sessions" element={<Sessions />} />
              <Route path="/people" element={<People />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/connectors" element={<Connectors />} />
              <Route path="/space/:space_id" element={<Space />} />
              <Route path="/user" element={<User />} />
              <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
