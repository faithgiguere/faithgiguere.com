import React from "react";

import { Text, Image, Center, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const TextWithSpace = styled(Text)`
  margin-bottom: 15px
`

const ImageWithSpace = styled(Image)`
margin-bottom: 50px
`

const AutostereogramGenerator = () => {
  return (
    <Box
    m="5%"
  >
      <Center>
        <Text fontSize={"5xl"}>Autostereogram Generator</Text>
      </Center>
      <Text fontSize={"3xl"}>Overview</Text>
      <TextWithSpace>
        The goal of this project was to generate autostereograms from depth
        maps. An autostereogram creates a 3D-looking picture in a 2D image when
        viewed correctly. One popular technique for viewing stereograms is to
        start with the image close to your face and focus your eyes on looking
        past the image, so it appears blurry. Then slowly move the image further
        away, keeping your eyes focused past it, and the 3D picture should be
        visible.
      </TextWithSpace>
      <Text fontSize={"3xl"}>Algorithm</Text>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/algorithm.png" />
      <Text fontSize={"3xl"}>Example 1: Shark</Text>
      <Text fontSize={"2xl"}>Depth Map</Text>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/shark/depth_map.png" />
      <Text fontSize={"2xl"}>Autostereogram 1</Text>
      <TextWithSpace>
        The following uses colors generated with random G and B elements, but a
        static full R element.
      </TextWithSpace>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/shark/red.png" />
      <Text fontSize={"2xl"}>Autostereogram 2</Text>
      <TextWithSpace>
        The following uses colors generated with random R and G elements, but a
        static full B element.
      </TextWithSpace>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/shark/blue.png" />
      <Text fontSize={"2xl"}>Autostereogram 3</Text>
      <TextWithSpace>
        The following uses colors generated with random R, G, and B elements.
      </TextWithSpace>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/shark/multi.png" />

      <Text fontSize={"2xl"}>Autostereogram 4</Text>
      <TextWithSpace>
        The following uses colors generated with random equal R, G, and B
        elements (greyscale).
      </TextWithSpace>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/shark/greyscale.png" />

      <Text fontSize={"3xl"}>Example 2: Penny</Text>
      <Text fontSize={"2xl"}>Depth Map</Text>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/penny/depth_map.jpg" />

      <Text fontSize={"2xl"}>Autostereogram</Text>
      <TextWithSpace>
        The following uses colors generated with random G and B elements, but a
        static full R element.
      </TextWithSpace>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/penny/autostereogram.jpg" />

      <Text fontSize={"3xl"}>Example 3: Ring</Text>
      <Text fontSize={"2xl"}>Depth Map</Text>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/ring/depth_map.jpg" />

      <Text fontSize={"2xl"}>Autostereogram</Text>
      <TextWithSpace>
        The following uses colors generated with random G and B elements, but a
        static full R element.
      </TextWithSpace>
      <ImageWithSpace src="../images/projects/computer_vision/autostereograms/ring/autostereogram.jpg" />
    </Box>
  );
};
export default AutostereogramGenerator;
