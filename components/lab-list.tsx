import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function LabList() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <h1 className="text-3xl font-semibold m-2">
          Fudan CS Labs
        </h1>
        <p className="text-gray-400 font-medium m-2">
          A collection of computer science related labs at Fudan University.
        </p>
      </div>

      <div className="container grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-2 lg:p-8 xl:gap-12">
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-disc.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">
              Fudan Data Science and Social Computing Lab
            </h3>
            <p className="mt-2 text-gray-500">
              Fudan Data Intelligence and Social Computing (Fudan DISC) Lab aims
              to develop novel natural language processing and machine learning
              models and algorithms, and explores applications of human-computer
              collaboration and interaction in real environments.
            </p>
          </div>
          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="http://fudan-disc.com">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/FudanDISC">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-cisl.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan CIS Lab</h3>
            <p className="mt-2 text-gray-500">
              Fudan CISL research topics include human-centered cooperative
              computing, Computer Supported Cooperative Work(CSCW) & social
              computing, human computer interaction, human-centered AGI
              algorithms and systems, such as wearable-interactive AGI and AI
              computing systems.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://cscw.fudan.edu.cn/">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/FudanCISL">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-fusion.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "contain" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Fusion Lab</h3>
            <p className="mt-2 text-gray-500">
            The Generative Vision Lab of Fudan University (Fusion Lab) is led by Professor Siyu Zhu. Its research interests mainly focus on generative model for video and 3D.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://sites.google.com/site/zhusiyucs">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/fudan-generative-vision">GitHub</Link>
            </Button>
          </div>
        </div>  

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-fvl.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Vision and Learning Lab</h3>
            <p className="mt-2 text-gray-500">
            The Fudan Vision and Learning (FVL) Laboratory was founded by Professor Yu-Gang Jiang to push the frontiers of computer vision and machine learning research and translate breakthroughs into real-world impact. Our mission is to equip machines with the ability to learn, perceive, and reason as humans by extracting rich knowledge from massive amounts of data, such as images, videos and languages.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://fvl.fudan.edu.cn/main.htm">Website</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-codewisdom.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Software Engineering Lab</h3>
            <p className="mt-2 text-gray-500">
            The Fudan Fudan Software Engineering (CodeWisdom) Lab focuses on the synergy between Software Engineering (SE) and Artificial Intelligence (AI) in two different directions: AI4SE and SE4AI. Their intelligent software engineering group is interested in tackling real-world software development problems (e.g., code generation, testing and debugging) via the synergy between program analysis and artificial intelligence.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://fudanselab.github.io/">Website 1</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="http://www.se.fudan.edu.cn/">Website 2</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="#">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-secsys.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan System Software & Security Lab </h3>
            <p className="mt-2 text-gray-500">
            Fudan System Software & Security Lab research mainly focues on cybersecurity, including mobile application security, malware detection and applied AI security.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://secsys.fudan.edu.cn/main.htm">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/seclab-fudan">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-blockchain.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Blockchain & Information Security Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan Blockchain & Information Security Lab research focuses on cryptography, smart contracts & protocols, blockchain explorer, confidential computing, and etc.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://github.com/BlockchainLabFudan">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-mas.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "contain" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Multimedia & Artifical Intelligence Security Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan Multimedia & Artificial Intelligence Lab research focuses on multimedia and artificial intelligence security, including topics of information hiding, multimedia forensics, artificial intelligence and multimedia applications.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://fdmas.github.io/">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/fdmas">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-mv.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Machine Vision Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan Machine Vision Lab under the Shanghai Key Lab of Intelligent Information Processing, research focuses on using cameras, sensors, computing power, and machine vision techniques to understand images and enable machines to complete industrial tasks.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://fudanmv.github.io/">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/FudanMV">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-vi.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "contain" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Visual Intelligence Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan Visual Intelligence Lab Visual Intelligence does research in the integration of visual information processing with intelligence in image and graphics research. 
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat">
              <Link href="https://github.com/FudanVI">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-artisan.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Artisan Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan Artificial Intelligence for Software Analysis and System Reliability (Artisan) Lab research focuses on program analysis, software testing, and other software reliability techniques, as well as their applications to improving the dependability of cloud computing, mobile computing, and artificial intelligence systems.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat">
              <Link href="https://artisan-lab.github.io/">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/Artisan-Lab">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-soaring.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan SOARing Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan SOARing Lab research focuses on web & service computing.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat">
              <Link href="https://soaringlab.top/">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/SOARingLab">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <img
            src="/labs/fudan-nlp.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Natural Language Processing Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan Natural Language Processing Lab research focuses on natural language processing, neural networks, Q&A systems, context retrieval, and etc. 
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat">
              <Link href="https://nlp.fudan.edu.cn/">Website</Link>
            </Button>
            <Button color="default" variant="flat">
              <Link href="https://github.com/FudanNLP">GitHub</Link>
            </Button>
          </div>
        </div>


      </div>
    </>
  );
}
