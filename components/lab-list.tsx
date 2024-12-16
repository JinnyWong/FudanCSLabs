import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

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
          <Image
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
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="http://fudan-disc.com">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub />}>
              <Link href="https://github.com/FudanDISC">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://cscw.fudan.edu.cn/">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/FudanCISL">GitHub</Link>
            </Button>
          </div>
        </div>  

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://fvl.fudan.edu.cn/main.htm">Website</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://fudanselab.github.io/">Website 1</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="http://www.se.fudan.edu.cn/">Website 2</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="#">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://sites.google.com/site/zhusiyucs">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/fudan-generative-vision">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://secsys.fudan.edu.cn/main.htm">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/seclab-fudan">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-blockchain.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "contain" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Blockchain & Information Security Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan Blockchain & Information Security Lab research focuses on cryptography, smart contracts & protocols, blockchain explorer, confidential computing, and etc.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/BlockchainLabFudan">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://fdmas.github.io/">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/fdmas">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
            <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://fudanmv.github.io/">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/FudanMV">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://artisan-lab.github.io/">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/Artisan-Lab">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/FudanVI">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://soaringlab.top/">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/SOARingLab">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
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
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://nlp.fudan.edu.cn/">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/FudanNLP">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-zhang.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Zhang Vision Group</h3>
            <p className="mt-2 text-gray-500">
            Fudan Zhang Vision Group is led by professor Li Zhang, under the School of Data Science at Fudan University. Their research interests cover the broad area of machine learning and artificial intelligence, with special emphasis on building intelligent systems for autonomous driving and generalist embodied agent.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://fudan-zvg.github.io">Website</Link>
            </Button>
            <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/fudan-zvg">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/shanghai-keylab.png"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Shanghai Key Lab of Intelligent Information Processing</h3>
            <p className="mt-2 text-gray-500">
            The Shanghai Key Lab of Intelligent Information Processing focuses on intelligent information processing, with the main task of improving the deep semantic understanding and adaptive autonomous decision-making ability of machines facing the complex real world. Topics include NLP and LLMs, Video Intelligent Computing, Cross-Media Intelligent Computing, Intelligent Networks and Intelligent Systems, Intelligence in Science (AI4S), Intelligence Theory and Frontier Crossover, and carries out the application and transformation of the results in the key fields of Robotics, Intelligent Medical Care, Intelligent Culture and Tourism, and Basic Science.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://iipl.fudan.edu.cn/main.htm">Website</Link>
          </Button>
          </div>
        </div>


        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-zmic.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan ZMIC Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan ZMIC Lab is a research group led by Prof. Xiahai Zhuang at School of Data Science, Fudan University. The lab aims at joining forces to research and translate AI algorithms for applications, including computer vision, clinical diagnosis and therapy. Their research mainly involves medical image analysis, image processing, machine learning and computer vision.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://zmiclab.github.io/index.html">Website</Link>
          </Button>
          <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://github.com/ZMICLab">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-roi.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Lab of Robotics Oriented Intelligence</h3>
            <p className="mt-2 text-gray-500">
            Fudan ROI Lab focuses on researching computational vision, knowledge graphs and robotics oriented intelligence.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://www.fudanroilab.com/">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-ed.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Embedded Deep Learning and Visual Analysis Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan ED Lab focuses on research in lightweight deep learning study, multimodal deep learning research, embedded deep learning, visual computing and content analysis of images & videos.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://eetchen.github.io/research/">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-csr.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Code Security Research Lab</h3>
            <p className="mt-2 text-gray-500">
            Fudan CSR Lab focuses on computer system security, covering vulnerability analysis, operating system security, web security, and mobile security. My group is dedicated to delivering effective and reliable security analysis and defense approaches and addressing the evolving challenges in the computer security world.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://yang-guangliang.github.io/">Website</Link>
          </Button>
          <Button color="default" variant="flat" startContent={<FaGithub/>}>
              <Link href="https://gitee.com/fudan-csr">GitHub</Link>
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-vis.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Visualization Research Group</h3>
            <p className="mt-2 text-gray-500">
            Fudan VIS Lab focuses on general visualization and visual analytics techniques as well as human-centered artificial intelligence. Topics include large-language model-driven visual analytics, explainable AI, digital twin and storytelling techniques. Their research applications include FinTech, social network visual analytics, autonomous driving, security visual analytics and digital humanity.
            </p>  
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://fduvis.net/">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-jeffhong.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">L. Jeff Hong Research Group</h3>
            <p className="mt-2 text-gray-500">
              L.Jeff Hong's research group focuses on the areas of operations research, data science, and financial engineering and risk management. Interests include: Stochastic simulation and stochastic optimization, Data analytics, machine learning and business applications, Financial analytics and financial risk management and Large-scale supply chain modeling and optimization.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://jeffhonglab.github.io/">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-yes.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan YesLab</h3>
            <p className="mt-2 text-gray-500">
              The Fudan YesLab led by Professor Guangnan Ye, conducts research in areas such as FinTech, embodied intelligence, computer vision, natural language processing, AI-driven drug discovery, and related fields.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="http://124.221.93.6/home">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-dsg.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan DSG Lab</h3>
            <p className="mt-2 text-gray-500">
              The Fudan Laboratory for Data Security and Governance does research in data security and privacy computing, and has constructed software platforms in secure multi-party learning frameworks and platforms, crypto-asset ecological regulation and innovative technologies, and user password security. 
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://dsg.fudan.edu.cn/">Website</Link>
          </Button>
          <Button color="default" variant="flat" startContent={<FaGithub/>}>
            <Link href="https://github.com/FudanMPL">GitHub</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-lamt.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan LAMT</h3>
            <p className="mt-2 text-gray-500">
              The Fudan University Laboratory of Audio and Music Technology (LAMT) research topics include music AI (information retrieval and generation), computer audition, speech information processing, and audio information security.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://faculty.fudan.edu.cn/weilics/zh_CN/zdylm/644067/list/index.htm">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-vip.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan VIP Lab</h3>
            <p className="mt-2 text-gray-500">
              The Video and Image Processor (VIP) Laboratory for Fudan University research focuses on video, image, artificial intelligence, hardware architecture and SoC chip design research. They created the first domestic open source chip website (www.openasic.org), premiered H.264, H.265 video coding chip IP cores; developed the world's first billion-pixel video array camera, and integrated edge-side AI processing algorithms to realize ultra-vision and ultra-wide-area video. VIP Lab is dedicated to the research and technology promotion of violent computing and hardware chip architecture for cutting-edge image/video/AI technology.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="http://viplab.fudan.edu.cn/">Website</Link>
          </Button>
          <Button color="default" variant="flat" startContent={<FaGithub/>}>
            <Link href="https://github.com/openasic-org">GitHub</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-can.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan CAN Lab</h3>
            <p className="mt-2 text-gray-500">
              The Fudan Adaptive Networks and Control (CAN) Lab is led by Professor Xiang Li, their main research topics include temporal networks, social network mining, epidemic dynamics, ECG analysis and synchronization and coordination of complex networking systems. 
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://can.fudan.edu.cn/">Website</Link>
          </Button>
          </div>
        </div>
        
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-dspt.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan DSPT Lab</h3>
            <p className="mt-2 text-gray-500">
            Based on the theoretical foundation of signal processing and statistical learning, the Fudan DSPT lab conducts academic research in wireless communications and networks, image processing and machine vision, and explores innovative engineering practices on platforms such as electronic systems, sensor networks, multi-rotor vehicles and unmanned systems.  

            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://dspt.fudan.edu.cn/">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-bz.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan BZ Lab</h3>
            <p className="mt-2 text-gray-500">
            The Fudan BZ Lab is a team of researchers and industry practitioners focusing on cloud computing and mobile computing. In particular, they work on new tools, platforms, and concepts towards solving software performance, security, usability, and reliability issues.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="http://y-droid.com/yz/">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-medianet.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Multimedia and Mobile Networking Group</h3>
            <p className="mt-2 text-gray-500">
            The Fudan Multimedia and Mobile Networking (MediaNET) group is an active research group focusing on theory and system for distributed AI. In particular, they are working on foundation model training (scheduling/parallelism/xCCL/RDMA/operation) and inference systems. Their research also includes the performance evaluation, control, and economic analysis of computer networks.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://medianet.azurewebsites.net">Website</Link>
          </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6 space-y-4">
          <Image
            src="/labs/fudan-datanet.PNG"
            alt="Project Thumbnail"
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105 rounded-xl"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-xl font-semibold">Fudan Big Data and Networking Group</h3>
            <p className="mt-2 text-gray-500">
              The Fudan Big Data and Networking (DataNET) group led by Professor Yang Chen  engages in research of big data and networking, online social networks, the Internet, mobile cloud computing and other related fields.
            </p>
          </div>

          <div className="flex items-center justify-center text-center space-x-10">
          <Button color="default" variant="flat" startContent={<CiGlobe/>}>
              <Link href="https://fudan-datanet.mysxl.cn/">Website</Link>
          </Button>
          <Button color="default" variant="flat" startContent={<FaGithub/>}>
            <Link href="https://github.com/easy-graph/Easy-Graph">GitHub</Link>
          </Button>
          </div>
        </div>

      </div>
    </>
  );
}
