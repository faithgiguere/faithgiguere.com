import React from "react";

import {
  OrderedList,
  ListItem,
  Text,
  Box,
  Center,
  Image,
  Table,
  Tr,
  Td,
  Th,
  Container,
} from "@chakra-ui/react";

const HybridImages = () => {
  return (
    <Box m="5%">
      <Center>
        <Text fontSize={"5xl"}>Hybrid Images</Text>
      </Center>
      <Text fontSize={"3xl"}>Overview</Text>
      <Text>
        The goal of this project was to create hybrid images using the approach
        described in the SIGGRAPH 2006 paper by Oliva, Torralba, and Schyns.
        Hybrid images are static images that change in interpretation as a
        function of the viewing distance. High frequency tends to dominate
        perception when it is available, but, at a distance, only the low
        frequency (smooth) part of the signal can be seen. Blending the high
        frequency portion of one image with the low-frequency portion of
        another, results in a hybrid image that leads to different
        interpretations at different distances.
      </Text>
      <Text fontSize={"3xl"}>Process</Text>
      <OrderedList>
        <ListItem fontWeight="semibold">Picking Images</ListItem>
        <Text>
          The first step is to find two images that will look good as a hybrid
          image. A good way to do this is to find images that share features,
          such as eyes, that can be used to align the images. One image will
          need to be designated as the high-pass image, the image that will be
          most visible when the picture is large/ viewed up close. The other
          will be designated as the low-pass image, the image that will be
          visible when the image is very small/viewed from far away.
        </Text>
        <ListItem fontWeight="semibold">
          Convert Low-Pass Image to Greyscale
        </ListItem>
        <Text>
          The designated low-pass image is converted to greyscale before any
          filtering takes place. This helps the color in the high-pass image
          show its colors well when viewing up close without mashing with the
          designated low-pass's colors.
        </Text>
        <ListItem fontWeight="semibold">
          Pre-filtering 2D Fourier Transforms
        </ListItem>
        <Text>
          The log magnitudes of the Fourier transforms of the designated
          low-pass (in greyscale) and high-pass images are calculated and
          plotted.
        </Text>
        <ListItem fontWeight="semibold">Choose Alignment Points</ListItem>
        <Text>
          Two points are chosen on each image to be used to align and scale the
          images appropriately. For instance, if each picture contained a set of
          eyes, the eyes on each image would be a possible good pick to align
          and scale on.
        </Text>
        <ListItem fontWeight="semibold">Filtering</ListItem>
        <Text>
          Each image is passed through their designated filters. The designated
          low-pass image is passed through a standard 2D Gaussian filter. The
          designated high-pass image is passed the impulse filter minus the
          Gaussian filter. The cutoff-frequency for each filter was tuned for
          each set of images processed, since it is a good point of calibration
          to maximize the hybrid effect.
        </Text>
        <ListItem fontWeight="semibold">
          Filtered Images 2D Fourier Transforms
        </ListItem>
        <Text>
          The log magnitudes of the Fourier transforms of the low-pass and
          high-pass filtered images are calculated and plotted.
        </Text>
        <ListItem fontWeight="semibold">Create Hybrid Image</ListItem>
        <Text>
          The two filtered images are averaged together to create the hybrid
          image.
        </Text>
        <ListItem fontWeight="semibold">Hybrid Image Cropping</ListItem>
        <Text>
          The raw hybrid image is cropped to get the core hybrid features only,
          and cut out the often choppy and overlapped borders.
        </Text>
        <ListItem fontWeight="semibold">Hybrid Image Pyramid</ListItem>
        <Text>
          A few levels of a Gaussian pyramid of the final cropped hybrid image
          are generated so that the effect of the high-pass intense viewpoint
          can be seen changing to the low-pass intense viewpoint.
        </Text>
      </OrderedList>
      <Container maxHeight="100px">
        <Text fontSize={"3xl"}>Example 1: Macaroni and Me</Text>
        <Table>
          <Tr>
            <Th>Stage</Th>
            <Th>Images</Th>
          </Tr>
          <Tr>
            <Td>Original Images</Td>
            <Td>
              <Image
                htmlHeight="100px"
                src="../images/projects/computer_vision/hybrid_images/matcho/low_pass.jpg"
              />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/high_pass.jpg" />
            </Td>
          </Tr>
          <Tr>
            <Td>Convert Low-Pass Image to Greyscale</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/low_pass_greyscale.jpg" />
            </Td>
          </Tr>
          <Tr>
            <Td>Pre-filtering 2D Fourier Transform</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/low_pass_pre_filter_fourier.png" />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/high_pass_pre_filter_fourier.png" />
            </Td>
          </Tr>
          <Tr>
            <Td>Filtering</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/low_pass_filtered.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/high_pass_filtered.jpg" />
            </Td>
          </Tr>
          <Tr>
            <Td>Filtered Images 2D Fourier Transform</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/low_pass_filtered_fourier.png" />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/high_pass_filtered_fourier.png" />
            </Td>
          </Tr>
          <Tr>
            <Td>Hybrid Image, Pre-cropping</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/uncropped_hybrid_fourier.png" />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/uncropped_hybrid.png" />
            </Td>
          </Tr>
          <Tr>
            <Td>Cropped Hybrid Image with Pyramid</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/full_hybrid.png" />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/2_hybrid_pyramid.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/3_hybrid_pyramid.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/4_hybrid_pyramid.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/matcho/5_hybrid_pyramid.jpg" />
            </Td>
          </Tr>
        </Table>

        <Text fontSize={"3xl"}>Example 2: Chicken and the Egg</Text>

        <Table>
          <Tr>
            <Th>Stage</Th>
            <Th>Images</Th>
          </Tr>
          <Tr>
            <Td>Original Images</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/low_pass.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/high_pass.jpg" />
            </Td>
          </Tr>
          <Tr>
            <Td>Convert Low-Pass Image to Greyscale</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/low_pass_greyscale.jpg" />
            </Td>
          </Tr>
          <Tr>
            <Td>Pre-filtering 2D Fourier Transform</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/low_pass_pre_filter_fourier.png" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/high_pass_pre_filter_fourier.png" />
            </Td>
          </Tr>
          <Tr>
            <Td>Filtering</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/low_pass_filtered.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/high_pass_filtered.jpg" />
            </Td>
          </Tr>
          <Tr>
            <Td>Filtered Images 2D Fourier Transform</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/low_pass_filtered_fourier.png" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/high_pass_filtered_fourier.png" />
            </Td>
          </Tr>
          <Tr>
            <Td>Hybrid Image, Pre-cropping</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/uncropped_hybrid_fourier.png" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/uncropped_hybrid.png" />
            </Td>
          </Tr>
          <Tr>
            <Td>Cropped Hybrid Image with Pyramid</Td>
            <Td>
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/full_hybrid.png" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/2_hybrid_pyramid.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/3_hybrid_pyramid.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/4_hybrid_pyramid.jpg" />
              <Image src="../images/projects/computer_vision/hybrid_images/chicken/5_hybrid_pyramid.jpg" />
            </Td>
          </Tr>
        </Table>
      </Container>
    </Box>
  );
};

export default HybridImages;
