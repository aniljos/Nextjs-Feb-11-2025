import Link from "next/link"

export function AppBar(){
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Next.js</Link>

          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

    )
}