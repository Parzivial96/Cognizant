// 'use client' - I assume this is part of your code comments

import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Props definition for the GetResultForm component
interface GetResultFormProps {
  heading: string; // Define the type for heading
  description: string; // Define the type for description
}

// GetResultForm component
const GetResultForm: React.FC<GetResultFormProps> = ({ heading, description }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      rounded="lg"
      bg={useColorModeValue('gray.120', 'gray.800')}
      boxShadow="lg"
      p={8}
    >
      {/* Heading for the form */}
      <Heading fontSize="4xl" marginBottom="15px">
        {heading}
      </Heading>

      {/* Description of the form */}
      <Text fontSize="lg" color="gray.600" marginBottom="15px">
        {description}
      </Text>

      {/* Form fields */}
      <Stack spacing={4} mt={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="exam" marginBottom="15px">
          <FormLabel>Exam Number</FormLabel>
          <Input type="text" />
        </FormControl>

        {/* Button to submit the form */}
        <Button
          bg="green.400"
          color="white"
          rounded="full"
          _hover={{
            bg: 'green.500',
          }}
        >
          Get Result
        </Button>
      </Stack>
    </Flex>
  );
};

export default GetResultForm;
