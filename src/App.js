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

import {
  ChakraProvider,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Center,
  Box,
  VStack,
  Link,
} from "@chakra-ui/react";

const projects = [
  {
    name: "Test 1",
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  },
  {
    name: "Test 2",
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  },
  {
    name: "Test 3",
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  },
  {
    name: "Test 4",
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  },
];

const experiences = [
  {
    name: "Test1",
    description: "description1",
    location: "Greenbelt, MD",
    background: "",
    date: "test",
  },
  {
    name: "Test2",
    description: "description2",
    location: "Greenbelt, MD",
    background: "",
    date: "test",
  },
  {
    name: "Test3",
    description: "description3",
    location: "Greenbelt, MD",
    background: "",
    date: "test",
  },
  {
    name: "Test4",
    description: "description4",
    location: "Greenbelt, MD",
    background: "",
    date: "test",
  },
  {
    name: "Test5",
    description: "description5",
    location: "Greenbelt, MD",
    background: "",
    date: "test",
  },
];

function App() {
  return (
    <ChakraProvider>
      <Center h={"100vh"} w={"100%"} bgImg={banner} bgSize={"cover"}>
        <VStack
          px={"12"}
          m={"10"}
          bg={"gray.300"}
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
        </VStack>
      </Center>

      <div className="about">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="elevated"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={about_photo}
            alt="Washington Monument"
          />

          <Stack>
            <CardBody>
              <Text id="about" fontSize={"3xl"}>
                About Me
              </Text>

              <Text py="2">
                I am a software engineer based in Washington, DC currently
                working at NASA's Goddard Earth Sciences Data and Information
                Services Center{" "}
                <a href="https://disc.gsfc.nasa.gov" target="_blank">
                  (GES DISC)
                </a>{" "}
                located at Goddard Space Flight Center. I graduated from{" "}
                <a href="https://gwu.edu" target="_blank">
                  George Washington University
                </a>{" "}
                with a B.S. in Computer Science. Outside of work, I enjoy taking
                flying lessons and working towards earning my private pilot
                license. I am also an avid hiker and enjoy studying and playing
                chess.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </div>

      <Text id="experience" fontSize={"3xl"} px="20">
        Experience
      </Text>
      <VerticalTimeline lineColor="black">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#416aa0", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "#f5c988", color: "#fff" }}
          >
            <Text className="vertical-timeline-element-title">
              {experience.name}
            </Text>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.location}
            </h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <Box m={"10%"}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {projects.map((project) => (
            <SwiperSlide>
              <Box
                p={"10"}
                border={"1px"}
                borderColor={"gray.200"}
                borderRadius={"md"}
                boxShadow={"lg"}
              >
                <Text>{project.name}</Text>
                <Text>{project.description}</Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </ChakraProvider>
  );
}

export default App;
