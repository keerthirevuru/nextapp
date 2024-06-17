import Navbar from './(pages)/Navbar/page';
import Heropage from './(pages)/Heropage/page';
//import Dashboard from './(pages)/Dashboard/page';
import Footer from './(pages)/Footer/page';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heropage/>
      <Footer/>
      {/*<Link href="/Siginformpage">Sign in</Link>
      <Link href="/Signuppage">Sign up</Link>*/}
    </div>
  );
};

export default Home;
