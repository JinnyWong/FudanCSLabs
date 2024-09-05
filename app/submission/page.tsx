import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useForm } from 'react-hook-form';

export default function SubmissionPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <Card className="p-6">
          <CardHeader className="mb-2">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-xl font-semibold">Submit a Lab</h1>
              <p className="text-gray-400">
                Help us improve by adding another lab into the collection.
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <form className="space-y-4 mb-4">
              <h2 className="my-4 font-semibold">Your Personal Details</h2>
              <Input
                isClearable
                size="md"
                type="text"
                label="Name"
                placeholder="Enter your name"
                description="Leave this blank if you will like to contribute anonymously."
              />
              <Input
                isClearable
                size="md"
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
            </form>
            <form className="space-y-4 mb-4">
              <h2 className="my-4 font-semibold">Lab Details</h2>
              <Input
                isClearable
                isRequired
                size="md"
                type="text"
                label="Lab Name"
                placeholder="Enter the lab name"
              />
              <Textarea
                isRequired
                label="Lab Description"
                placeholder="Enter the lab description"
                className="max-w-xl"
              />
              <Input
                isClearable
                size="md"
                type="url"
                label="Lab Website"
                placeholder="Enter the lab website link"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">https://</span>
                  </div>
                }
              />
              <Input
                isClearable
                size="md"
                type="url"
                label="Lab GitHub"
                placeholder="Enter the lab GitHub link"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">https://</span>
                  </div>
                }
              />
            </form>
          </CardBody>
          <CardFooter className="flex justify-center pt-6">
            <Button className="w-full sm:w-auto bg-black text-white">Submit Lab</Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </>
  );
}
