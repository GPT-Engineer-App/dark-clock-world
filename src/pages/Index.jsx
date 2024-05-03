// World Clock Page Component using Chakra UI for a modern dark-themed GUI
import { Box, Container, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const Index = () => {
  const [timeZones, setTimeZones] = useState([
    { name: "New York", zone: "America/New_York" },
    { name: "London", zone: "Europe/London" },
    { name: "Tokyo", zone: "Asia/Tokyo" },
    { name: "Sydney", zone: "Australia/Sydney" },
    { name: "Moscow", zone: "Europe/Moscow" },
  ]);

  const [times, setTimes] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimes = {};
      timeZones.forEach((tz) => {
        const time = new Date().toLocaleTimeString("en-US", { timeZone: tz.zone });
        newTimes[tz.name] = time;
      });
      setTimes(newTimes);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeZones]);

  const bg = useColorModeValue("gray.800", "gray.900");
  const color = useColorModeValue("white", "gray.200");

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color}>
          <Heading fontSize="xl" mb={4} display="flex" alignItems="center">
            <FaGlobe style={{ marginRight: "8px" }} /> World Clock
          </Heading>
          {timeZones.map((tz) => (
            <Box key={tz.name} p={3} shadow="sm" borderWidth="1px" rounded="md" bg="gray.700" color="white">
              <Text fontWeight="bold">{tz.name}</Text>
              <Text fontSize="xl">{times[tz.name]}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
