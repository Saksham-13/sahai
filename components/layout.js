import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar'
export default function Layout({ children }) {
  return (
    <div className='flex flex-col '>
      <Navbar/>
      {/* <header className='bg-orange-100 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
          <Image
                width={50}
                height={50}
                alt={"sahai logo"}
                src={`/images/sahailogo.png`}
              />
          </Link>
          <span className='mx-auto'>Sahai</span>{' '}
        </div>
      </header> */}
      
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-orange-100 mt-8 py-4'>
        <div className='container mx-auto flex  justify-center'>
          &copy; Sahai
        </div>
      </footer>
    </div>
  );
}