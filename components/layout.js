import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar'
export default function Layout({ children }) {
  return (
    <div className='flex flex-col '>
      <Navbar />
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
      <footer className='bg-orange-100  py-4'>

        <div className='container mx-auto flex  justify-center'>
          <span className="inline-flex">
           
            
            <a className="ml-4 text-gray-500" href='https://www.instagram.com/sahai_india/'>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"
                ></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          
          </span>
        </div>
        <div className='container mx-auto my-2 flex  justify-center'>
          &copy; Sahai
        </div>
      </footer>
    </div>
  );
}