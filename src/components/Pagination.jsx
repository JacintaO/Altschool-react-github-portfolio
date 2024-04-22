import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1)); // Ensure currentPage doesn't go below 1
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      onPageChange(1); // Reset back to page 1 if on the last page and next button is clicked
    } else {
      onPageChange(currentPage + 1); // Otherwise, go to the next page
    }
  };

  return (
    <Flex justify="center" mt={4}>
      <Button
        mr={2}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        colorScheme="blue"
      >
        {'<'}
      </Button>
      <Button
        key={currentPage}
        onClick={() => onPageChange(currentPage)}
        variant="solid"
        colorScheme="blue"
      >
        {currentPage}
      </Button>
      <Button
        ml={2}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        colorScheme="blue"
      >
        {'>'}
      </Button>
    </Flex>
  );
};

export default Pagination;
