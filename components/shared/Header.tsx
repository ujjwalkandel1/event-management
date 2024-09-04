import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36"> 22 min</Link>
        </div>
    </header>
  )
}

export default Header