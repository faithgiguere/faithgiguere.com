import React from "react";

import { Text, Image, Table, Center, Tr, Td, Th, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";


const TextWithSpace = styled(Text)`
  margin-bottom: 15px
`

const ImageAlignment = () => {
  return (
    <Box
      m="5%"
    >
      <Center>
        <Text fontSize={"5xl"}>Image Alignment and Color Compositing</Text>
      </Center>
      <Text fontSize={"3xl"}>Overview</Text>
      <TextWithSpace>
        Using images from the Prokudin-Gorskii digitized photo collection, this
        project consists of taking three color channel images and aligning them
        to create a single RGB color image. Both single-scale and multi-scale
        aligning algorithms were implemented.
      </TextWithSpace>
      <Text fontSize={"3xl"}>Algorithms</Text>
      <TextWithSpace>
        Using images from the Prokudin-Gorskii digitized photo collection, this
        project consists of taking three color channel images and aligning them
        to create a single RGB color image. Both single-scale and multi-scale
        aligning algorithms were implemented.
      </TextWithSpace>

      <Text fontSize={"xl"}>Single-Scale:</Text>
      <TextWithSpace>
        If the image is being aligned using the single-scale algorithm, +/- 15
        pixels is the range provided to the best_displacement function to check
        for the best alignment for both G to B and R to B. The range +/- 15 was
        selected for single scale displacement checking because the images are
        small enough (being under 500KB) that it is not too expensive to search
        that wide a range. The best_displacement function uses the get_interior
        function to trim the edges of the images 25% on each side so that the
        sections being compared are guaranteed to be image details, not black
        borders which will provide less valuable results. The function then
        calculates the sum of squared differences at each displacement in the
        range specified. The displacement that results in the lowest sum of
        squared differences is the best displacement.
      </TextWithSpace>

      <Text fontSize={"xl"}>Multi-Scale:</Text>
      <TextWithSpace>
        Since an exhaustive search becomes too expensive for higher resolution
        images, another method is needed for larger images. An image pyramid is
        used -- a set of the images of interest each scaled down by a factor of
        2 several times. Each full image (B, G, and R) is taken and blurred
        using a Gaussian filter, then shrunken by a factor of 2 by extracting
        every other pixel into a new image. In this case, 5 iterations of this
        process appeared to work the best. Many of the parameters were arrived
        at by using trial and error, accounting for factor such as processing
        time and chosen based on what seemed to provide the most accurate
        alignment on the majority of images in the collection. Next, the best
        displacement is found. Starting with the lowest resolution image, the
        best_displacement function is again used, this time checking a range of
        +/- i^2 + 5 (For clarity, with the lowest res image, i=5 and for the
        highest (full) res image, i=1). The best displacement is then applied to
        each of the higher resolution images and the process continues up the
        pyramid of images, until the best displacement of the full images for R
        into B and G into B are found.
      </TextWithSpace>
      <Text fontSize={"3xl"}>Results</Text>
      <TextWithSpace>
        Below are the results of applying the aligning algorithm to image
        samples from the digitized Prokudin-Gorskii collection. The first image
        of each group of three is the original BGR image, the second is the
        crude overlay, and the third is after alignment.
      </TextWithSpace>

      <Table>
        <Tr>
          <Th>Single-Scale Original</Th>
          <Th>Overlayed</Th>
          <Th>Processed</Th>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/31421v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/31421v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/31421v.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/00125v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/00125v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/00125v.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/01522v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/01522v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/01522v.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/00804v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/00804v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/00804v.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/01164v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/01164v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/01164v.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/01269v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/01269v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/01269v.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/01728v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/01728v.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/01728v.jpg" />
          </Td>
        </Tr>
      </Table>

      <Table>
        <Tr>
          <Th>Multi-Scale Original</Th>
          <Th>Overlayed</Th>
          <Th>Processed</Th>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/00458u.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/00458u.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/00458u.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/01007a.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/01007a.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/01007a.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/01047u.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/01047u.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/01047u.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/raw/01725u.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/01725u.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/01725u.jpg" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            /
            <Image src="/images/projects/computer_vision/image_alignment/raw/01861a.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/overlayed/01861a.jpg" />
          </Td>
          <Td>
            <Image src="/images/projects/computer_vision/image_alignment/processed/01861a.jpg" />
          </Td>
        </Tr>
      </Table>
    </Box>
  );
};

export default ImageAlignment;
