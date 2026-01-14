import Menubar from '@/components/layout/Menubar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <header>
          <Navbar />
        </header>

        <div className="body flex-1 flex">
          <aside className="flex-1/5 ">
            <Menubar />
          </aside>
          <main className="flex-4/5 ">Hamro Menchhayayem</main>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
