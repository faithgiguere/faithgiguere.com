import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner from "./images/usgs.jpg";
import profile_photo from "./images/profile_picture.png";
import about_photo from "./images/washington_monument.webp";
import plane from "./images/plane.jpg";
import alignment from "./images/image_alignment.jpg";
import hybrid from "./images/hybrid_images.jpg";
import autostereogram from "./images/autostereogram.jpg";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import {
  ChakraProvider,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Center,
  Box,
  VStack,
  HStack,
  Link,
  Flex,
} from "@chakra-ui/react";

const projects = [
  {
    name: "Go/No-Go Decision Support Tool",
    description:
      "Supporting general aviation pilots in training in making an informed decision on whether conditions are safe to proceed with a flight (go) or if it is better to delay or cancel (no-go) based on a variety of factors.",
    background: plane,
  },
  {
    name: "Image Alignment",
    description:
      "Using images from the Prokudin-Gorskii digitized photo collection, this project consists of taking three color channel images and aligning them to create a single RGB color image.",
    background: alignment,
  },
  {
    name: "Hybrid Images",
    description:
      "Hybrid images are static images that change in interpretation as a function of the viewing distance.",
    background: hybrid,
  },
  {
    name: "Autosterogram Generator",
    description: "Generating autostereograms from depth maps.",
    background: autostereogram,
  },
];

const experiences = [
  {
    name: "Software Engineer",
    description: "ADNET Systems, Inc.",
    location: "NASA Goddard Space Flight Center, Greenbelt, MD",
    date: "July 2019 - Present",
  },
  {
    name: "Software Developer Intern",
    description: "DSFederal",
    location: "Rockville, MD",
    date: "May - June 2019",
  },
  {
    name: "B.S. in Computer Science",
    description: "George Washington University",
    location: "Washington, DC",
    date: "May 2019",
  },
  {
    name: "Student Technician",
    description:
      "The George Washington University Division of Information Technology",
    location: "Washington, DC",
    date: "December 2015 - June 2019",
  },
  {
    name: "Instructor",
    description: "Code4Life",
    location: "Washington, DC",
    date: "February - May 2017",
  },
];

function App() {
  return (
    <ChakraProvider>
      <Center h={"100vh"} w={"100%"} bgImg={banner} bgSize={"cover"}>
        <VStack
          px={"12"}
          m={"10"}
          bg={"#f5f5f5"}
          opacity={"0.9"}
          borderRadius={"lg"}
          height={"60vh"}
        >
          <Image
            src={profile_photo}
            alt="Profile"
            h={"50%"}
            p={"3vh"}
            borderRadius={"50%"}
            opacity={"1"}
          />
          <Text fontSize={"5xl"}>Faith Mayer</Text>
          <nav>
            <Link href="#about">About</Link>
            <Link href="#experience" px={"2"}>
              Experience
            </Link>
            <Link href="#projects">Projects</Link>
          </nav>
          <HStack>
            <Link href="https://www.linkedin.com/in/faith-mayer/" isExternal>
              <BsLinkedin size={"25"} />
            </Link>
            <Link href="https://github.com/faithmayer" isExternal>
              <BsGithub size={"25"} px={"3"} />
            </Link>
            <Link href="mailto:faithnmayer@gmail.com" isExternal>
              <MdEmail size={"30"} />
            </Link>
          </HStack>
        </VStack>
      </Center>

      <div className="about">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="elevated"
          marginY={"30"}
          bg={"#f5f5f5"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={about_photo}
            alt="Washington Monument"
          />

          <Stack>
            <CardBody>
              <Text id="about" fontSize={"4xl"}>
                About Me
              </Text>

              <Text py="2">
                I am a software engineer based in Washington, DC currently
                working at NASA's Goddard Earth Sciences Data and Information
                Services Center{" "}
                <a href="https://disc.gsfc.nasa.gov">(GES DISC)</a> located at
                Goddard Space Flight Center. I graduated from{" "}
                <a href="https://gwu.edu">George Washington University</a> with
                a B.S. in Computer Science. Outside of work, I enjoy taking
                flying lessons and working towards earning my private pilot
                license. I also love hiking, boxing, reading across a variety of
                genres, and studying chess.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </div>
      <Center>
        <Text id="experience" fontSize={"4xl"} py={"6"}>
          Experience
        </Text>
      </Center>
      <VerticalTimeline lineColor="black">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f5f5f5" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={experience.date}
            iconStyle={{ background: "#40689f", color: "#fff" }}
          >
            <Text className="vertical-timeline-element-title">
              {experience.name}
            </Text>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.description}
            </h4>
            <p>{experience.location}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <Center>
        <Text id="projects" fontSize={"4xl"} py="20">
          Projects
        </Text>
      </Center>

      <Box mx={"10%"} mb={"10%"} boxShadow={"lg"} borderRadius={"md"}>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {projects.map((project) => (
            <SwiperSlide>
              <HStack bg={"#f5f5f5"} h={"100%"}>
                <Box flex={"2"}>
                  <Image src={project.background} borderLeftRadius={"lg"} />
                </Box>
                <Box
                  flex={"1"}
                  height={"45vh"}
                  p={"4"}
                  bg={"#f5f5f5"}
                >
                  <Text fontSize={"4xl"}>{project.name}</Text>
                  <Text pw={"3"} pt={"4"}>
                    {project.description}
                  </Text>
                </Box>
              </HStack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </ChakraProvider>
  );
}

export default App;
