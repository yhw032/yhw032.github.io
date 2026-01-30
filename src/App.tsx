import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Fixed ThemeToggle in bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-black text-brand tracking-tight">
              Hello World
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Welcome to my portfolio
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen bg-section-alt flex items-center justify-center">
          <h2 className="text-4xl font-bold">My Projects</h2>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">About Me</h2>
        </section>

        <section id="contact" className="min-h-screen bg-section-alt flex items-center justify-center">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
        </section>
      </main>

      <footer className="py-10 text-center text-slate-500 border-t border-slate-200 dark:border-slate-800">
        © 2026 My Portfolio
      </footer>
    </div>
  )
}

export default App
