import { Box, Text, Heading, Center, VStack, Stack } from "native-base";

import CustomCard from "./components/CustomCard";
import supervisorIcon from "./assets/icon-supervisor.svg";
import teambuilderIcon from "./assets/icon-team-builder.svg";
import karmaIcon from "./assets/icon-karma.svg";
import calculatorIcon from "./assets/icon-calculator.svg";

const App = () => {
  return (
    <>
      <Box
        bg={"VeryLightGray"}
        minHeight={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        px={4}
        py={2}
      >
        <Center mb={6}>
          <Heading fontWeight={200} color={"VeryDarkBlue"}>
            Reliable, efficient delivery
          </Heading>
          <Heading color={"VeryDarkBlue"} mb={3}>
            Powered by Technology
          </Heading>
          <Text color={"GrayishBlue"} fontSize={"sm"} textAlign={"center"}>
            Our Artifical Intelligence powered tools use millions of project data points to ensure
            that your proyects is successful
          </Text>
        </Center>
        <Stack direction={{ base: "column", lg: "row" }} space={5} alignItems={"center"}>
          <CustomCard
            topColor={"Cyan"}
            title={"Supervisor"}
            paragraph={"Monitors activity to identify project roadblocks"}
            icon={supervisorIcon}
          />
          <VStack space={5}>
            <CustomCard
              topColor={"Red"}
              title={"Team Builder"}
              paragraph={"Scans our talent network to create the optimal team for your proyect"}
              icon={teambuilderIcon}
            />
            <CustomCard
              topColor={"Orange"}
              title={"Karma"}
              paragraph={"Regurlarly evaluates our talent to ensure quality"}
              icon={karmaIcon}
            />
          </VStack>
          <CustomCard
            topColor={"Blue"}
            title={"Calculator"}
            paragraph={"Uses data from past projects to provide better delivery estimates"}
            icon={calculatorIcon}
          />
        </Stack>
      </Box>
    </>
  );
};

export default App;
