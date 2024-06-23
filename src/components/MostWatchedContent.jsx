import React, { useState } from 'react';
import { Box, Heading, Text, Select, Spinner, VStack } from '@chakra-ui/react';

const MostWatchedContent = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ type: 'all', genre: 'all' });
  const [sorting, setSorting] = useState('views');
  const [genres, setGenres] = useState(['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']);
  const [weeklySummary, setWeeklySummary] = useState(null);

  return (
    <Box p={4}>
      <Heading mb={4}>Most Watched Content</Heading>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text>Filter by Type:</Text>
          <Select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
            <option value="all">All</option>
            <option value="movies">Movies</option>
            <option value="shows">TV Shows</option>
          </Select>
        </Box>
        <Box>
          <Text>Filter by Genre:</Text>
          <Select value={filters.genre} onChange={(e) => setFilters({ ...filters, genre: e.target.value })}>
            <option value="all">All</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </Select>
        </Box>
        <Box>
          <Text>Sort by:</Text>
          <Select value={sorting} onChange={(e) => setSorting(e.target.value)}>
            <option value="views">Most Views</option>
            <option value="rating">Highest Rating</option>
            <option value="date">Newest</option>
          </Select>
        </Box>
      </VStack>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Box mt={4}>
          {content.length > 0 ? (
            content.map((item) => (
              <Box key={item.id} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
                <Heading size="md">{item.title}</Heading>
                <Text>{item.description}</Text>
              </Box>
            ))
          ) : (
            <Text>No content available</Text>
          )}
        </Box>
      )}
      {weeklySummary && (
        <Box mt={8} p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="lg">Weekly Summary</Heading>
          <Text>{weeklySummary}</Text>
        </Box>
      )}
    </Box>
  );
};

export default MostWatchedContent;