import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Menubar from '@/components/layout/Menubar';


export default function Home() {
  return (
    <>
      <div className='flex-row'>
        <header className='border'>
          <Navbar />
        </header>

        <div className="body flex">


        <aside className='flex-1/5 border'>
      <Menubar/>
        </aside>
        <main className='flex-4/5 border'>Hamro Menchhayayem</main>
        </div>

        <footer className='border'>
          <Footer />
        </footer>
      </div>
    </>
  );
}
