const Header = () => {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
          <div className="container">
            <h1 className="title">Cute Dog Images</h1>
          </div>
      </div>
    </header>
  )
}

interface ProsWithUrl {
  url: string
}

const Image = (props: ProsWithUrl) => {
  const { url } = props
  return (
    <div className="card">
      <div className="card-image">
        <figure>
          
            <img src={url} alt="cure dog image" />
        </figure>
      </div>
    </div>
  )
}

const Gallery = () => {
  const nums = [1,2,3,4,5,6,7,8]
  return (
    <div className="column is-vcentered is-multiline">
      <div className="column is-3">
          {nums.map((i) => {
            return <Image url={`https://images.dog.ceo/breeds/shiba/shiba-${i}.jpg`}/>    
          })}
      </div>
    </div>
  )
}

const Main = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
        <div className="content has-text-centered">
          <p>Dog images are retrieved from Dog API</p>
          <p>
            <a href="https://dog.ceo/dog-api/about">Donate</a>
          </p>
        </div>
    </footer> 
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App