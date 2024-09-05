import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function SubmissionPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <h1 className="text-3xl font-semibold m-2">
            Submit a Lab
        </h1>
        <p className="text-gray-400 font-medium m-2">
          Include another lab into the collection.
        </p>
      </div>
      </main>
      <Footer />
    </>
  );
}
