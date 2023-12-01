'use client' 

import { Box, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

// Component for displaying an error message when a user doesn't have permission
export default function Error() {
  return (
    <Box textAlign="center" py={10} px={6}>
      {/* Warning icon */}
      <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />

      {/* Heading for the error message */}
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Looks like you don't have the permission to access this page
      </Heading>

      {/* Subtext with additional information */}
      <Text color={'gray.500'}>
        This webpage can only be accessed by people with admin rights, so please go back to the dashboard.
      </Text>
    </Box>
  );
}
