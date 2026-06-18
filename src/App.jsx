import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { useCustomCursor } from './hooks/useCustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Preloader from './components/Preloader'
import AnimatedRoutes from './components/AnimatedRoutes'

function AppShell() {
  useCustomCursor()

  return (
    <div className="min-h-screen flex flex-col">
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  )
}
