import {
  BrowserRouter as Router,
  Outlet,
  useRoutes,
  Link,
} from 'react-router-dom'
import Carousel from './components/Carousel/template'
import Bar from './components/Bar'
export const routetList = [
  {
    path: '/',
    element: <Bar />,
  },
  {
    path: '/Carousel',
    element: <Carousel />,
  },
]
const GetRoutes = () => useRoutes(routetList)

export default () => {
  return (
    <Router>
      <div style={{ background: 'white' }}>
        {routetList.map((item) => (
          <Link to={item.path} key={item.path}>
            {item.path}
          </Link>
        ))}
      </div>
      <GetRoutes />
    </Router>
  )
}
