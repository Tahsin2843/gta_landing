import './index.css'
import Final from './sections/Final'
import FirstVideo from './sections/FirstVideo'
import Hero from "./sections/Hero"
import Jason from './sections/Jason'
import Lucia from './sections/Lucia'
import Navbar from "./sections/Navbar"
import Outro from './sections/Outro'
import PostCard from './sections/PostCard'
import SecondVideo from './sections/SecondVideo'



export default function App() {
  return(
    <main>
        <Navbar />
        <Hero /> 
        <FirstVideo />
        <Jason />
        <SecondVideo />
        <Lucia />
        <PostCard />
        <Final />
        <Outro />
    </main>
  )
}
