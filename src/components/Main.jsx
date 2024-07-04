import {Route,Routes } from 'react-router-dom';
import App from '../App';

export default function Main() {
  return (
    <>
        <Routes>
            <Route path='/info' element={<App/>}/>
        </Routes>
    </>
  )
}