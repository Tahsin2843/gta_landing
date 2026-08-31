import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import './index.css'
gsap.registerPlugin(ScrollTrigger)


export default function App() {
  return(
    <main>
        <div>
            <h1 className="text-pink flex-center">Welcome to the World of GTA !</h1>
        </div>
    </main>
  )
}
