import Link from 'next/link'
import Button from '../components/Button'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p>
    <Button>Click Me</Button>
  </Layout>
)

export default IndexPage
