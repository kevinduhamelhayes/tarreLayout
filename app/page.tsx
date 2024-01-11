import { Features } from "@/components/Features";
import {Navbar} from "@/components/Navbar";
import Overview from "@/components/Overview";
import { About } from "@/components/About";
import Plans from "@/components/Plans";
import { Practice } from "@/components/Practice";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="px-3 lg:px-10 ">
      <Navbar />
      <Overview />
      <Features />
      <About />
      <Practice />
      <Plans />
      <Footer />

    </main>
  )
}
