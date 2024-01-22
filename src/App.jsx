import LinkButton from './components/Elements/LinkButton'

function App() {
  return (
    <div className="h-screen flex justify-center items-center group">
      <div>
        <h1 className="text-4xl font-bold group-hover:animate-pulse">Welcome Nikko</h1>
        <div className="flex gap-4 mt-3">
          <LinkButton to="/login">Login</LinkButton>
          <LinkButton to="/register">Register</LinkButton>
        </div>
      </div>
    </div>
  )
}

export default App
