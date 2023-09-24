import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Link as RouterLink } from "react-router-dom";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import {
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
} from "@chakra-ui/react";

const experiences = [
  {
    name: "Software Engineer",
    description: "NASA Goddard Space Flight Center",
    location: "Greenbelt, MD",
    date: "July 2019 - Present",
    logo: "/images/logos/goddard.png",
  },
  {
    name: "Software Development Intern",
    description: "DSFederal",
    location: "Rockville, MD",
    date: "May - June 2019",
    logo: "/images/logos/dsfederal.jpg",
  },
  {
    name: "B.S. in Computer Science",
    description: "George Washington University",
    location: "Washington, DC",
    date: "May 2019",
    logo: "/images/logos/gwu.png",
  },
  {
    name: "Student Technician",
    description:
      "The George Washington University Division of Information Technology",
    location: "Washington, DC",
    date: "December 2015 - June 2019",
    logo: "/images/logos/gwu_it.jpg",
  },
  {
    name: "Instructor",
    description: "Code4Life",
    location: "Washington, DC",
    date: "February - May 2017",
    logo: "/images/logos/code4life.png",
  },
];

const projects = [
  {
    name: "Go/No-Go Decision Support Tool",
    description:
      "Supporting general aviation pilots in making an informed decision on whether conditions are safe to proceed with a flight (go) or if it is better to delay or cancel (no-go) based on a variety of factors.",
    background: "/images/plane.jpg",
    url: "https://github.com/faithmayer/Go-NoGoDecision"
  },
  {
    name: "Image Alignment",
    description:
      "Using images from the Prokudin-Gorskii digitized photo collection, this project consists of taking three color channel images and aligning them to create a single RGB color image.",
    background: "/images/image_alignment.jpg",
    path: "/projects/imagealignment"
  },
  {
    name: "Hybrid Images",
    description:
      "Blending the high frequency portion of one image with the low-frequency portion of another, resulting in a hybrid image that leads to different interpretations at different distances.",
    background: "/images/hybrid_images.jpg",
    path: "/projects/hybridimages"
  },
  {
    name: "Autosterogram Generator",
    description: "Generating autostereograms from depth maps.",
    background: "/images/autostereogram.jpg",
    path: "/projects/autostereogram"
  },
];

const Home = () => {
  return (
    <>
      <Center h={"100vh"} w={"100%"} bgImg={"/images/usgs.jpg"} bgSize={"cover"}>
        <VStack
          px={"12"}
          m={"10"}
          bg={"#f5f5f5"}
          opacity={"0.9"}
          borderRadius={"lg"}
          height={"60vh"}
        >
          <Image
            src={"/images/profile_picture.png"}
            alt="Profile"
            h={"55%"}
            p={"2vh"}
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
            src={"/images/washington_monument.webp"}
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
                <Link
                  href="https://disc.gsfc.nasa.gov"
                  color={"blue"}
                  isExternal
                >
                  (GES DISC){" "}
                </Link>
                located at Goddard Space Flight Center. I graduated from{" "}
                <Link href="https://www.gwu.edu" color={"blue"} isExternal>
                  George Washington University{" "}
                </Link>
                with a B.S. in Computer Science. Outside of work, I am taking
                flying lessons and working towards earning my private pilot
                license. I also enjoy hiking, boxing, reading across a variety
                of genres, and studying chess.
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
            <HStack>
              <Image
                src={experience.logo}
                h={"20vh"}
                borderRadius={"100%"}
                p={"2"}
              />
              <Box mb={"12px"}>
                <Text className="vertical-timeline-element-title">
                  {experience.name}
                </Text>

                <h4 className="vertical-timeline-element-subtitle">
                  {experience.description}
                </h4>
                <p>{experience.location}</p>
              </Box>
            </HStack>
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
                <Box flex={"1"} height={"45vh"} p={"4"} bg={"#f5f5f5"}>
                  {
                    project.url ? <Link href={project.url} target="_blank">
                      <Text fontSize={"4xl"}>{project.name}</Text>
                    </Link> : <RouterLink to={{ pathname: project.path }} target="_blank">
                    <Text fontSize={"4xl"} _hover={{
                      textDecoration: "underline"
                    }}>{project.name}</Text>
                  </RouterLink>
                  }
                  <Text pw={"3"} pt={"4"}>
                    {project.description}
                  </Text>
                </Box>
              </HStack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <VStack bg={"#fff"} p={5}>
        <Text fontSize={"sm"}>
          Photo from USGS on{" "}
          <Link href={"https://unsplash.com/photos/jePzo7RYzac"} isExternal>
            Unsplash
          </Link>
        </Text>
        <Center>
          <Text fontSize={"sm"}>© 2023 Faith Mayer</Text>
        </Center>
      </VStack>
    </>
  );
}

export default Home;
