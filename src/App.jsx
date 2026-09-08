import './index.css'
import FirstVideo from './sections/FirstVideo'
import Hero from "./sections/Hero"
import Jason from './sections/Jason'
import Navbar from "./sections/Navbar"
import SecondVideo from './sections/SecondVideo'



export default function App() {
  return(
    <main>
        <Navbar />
        {/* <Hero /> */}
        <FirstVideo />
        <Jason />
        <SecondVideo />
    </main>
  )
}
