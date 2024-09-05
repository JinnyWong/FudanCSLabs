"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@nextui-org/modal";

export default function SubmissionForm() {
  // Modal state 
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  // Formspree
  const [state, handleSubmit] = useForm("xzzpwvad");
    // if (state.succeeded) {
    //   return <p>Thank you for your submission!</p>;
    // }

  // Submission Form UI
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
            <form onSubmit={handleSubmit} className="space-y-4 mb-4">
              <h2 className="my-4 font-semibold">Your Personal Details</h2>
              <Input
                isClearable
                size="md"
                type="text"
                label="Name"
                name="Name"
                placeholder="Enter your name"
                description="Leave this blank if you would like to contribute anonymously."
              />
              <Input
                isClearable
                size="md"
                type="email"
                label="Email"
                name="Email"
                placeholder="Enter your email"
              />
              <h2 className="my-4 font-semibold">Lab Details</h2>
              <Input
                isClearable
                isRequired
                size="md"
                type="text"
                label="Lab Name"
                name="Lab Name"
                placeholder="Enter the lab name"
              />

              <Textarea
                isRequired
                label="Lab Description"
                name="Lab Description"
                placeholder="Enter the lab description"
                className="max-w-xl"
              />

              <Input
                isClearable
                size="md"
                type="url"
                label="Lab Website"
                name="Lab Website"
                placeholder="Enter the lab website link"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">
                      https://
                    </span>
                  </div>
                }
              />

              <Input
                isClearable
                size="md"
                type="url"
                label="Lab GitHub"
                name="Lab Github"
                placeholder="Enter the lab GitHub link"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">
                      https://
                    </span>
                  </div>
                }
              />
              <CardFooter className="flex justify-center pt-6">
                <Button
                  className="w-full sm:w-auto bg-black text-white"
                  type="submit"
                  onPress={onOpen}
                  disabled={state.submitting}
                >
                  Submit Lab
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Successfully submitted the lab! 
                        </ModalHeader>
                        <ModalBody>
                          <p className="my-4">
                            Thank you for your contribution :) This will greatly help with the Fudan CS Labs project. We will review your submission and update it to the website later.
                          </p>
                        </ModalBody>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </CardFooter>
            </form>
          </CardBody>
        </Card>
      </main>
      <Footer />
    </>
  );
}
