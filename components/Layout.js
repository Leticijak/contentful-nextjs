import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <a>
            <h1>
              <span>Just Add</span>
              <span>Pictures</span>
            </h1>
            <h2>Let's GO!!!</h2>
          </a>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Pictures :)</p>
      </footer>
    </div>
  )
}
