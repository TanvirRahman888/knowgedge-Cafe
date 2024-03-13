import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <div className='container mx-auto mt-10 px-4'>
      
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row gap-5 mt-5'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>

      </div>
    </div>
  )
}

export default App
