import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LabList from "@/components/lab-list";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <LabList />

      </main>
      <Footer />
    </>
  );
}
