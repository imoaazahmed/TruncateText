import { Box, Heading, StackDivider, VStack } from "@chakra-ui/react";
import { TruncateText } from "./truncate-text";

function App() {
  return (
    <Box className="App">
      <Heading size="lg" textAlign="center" my="6" textDecoration="underline">
        Truncate Text
      </Heading>

      <VStack spacing="6" align="start" p="5" divider={<StackDivider />}>
        {/* Short text */}
        <VStack spacing="1" align="start">
          <Heading size="md">Short Text</Heading>
          <TruncateText text="lorem ibsum" ellipses="..." />
        </VStack>

        {/* Long text (Tooltip) */}
        <VStack spacing="1" align="start">
          <Heading size="md">Long Text (Tooltip)</Heading>
          <TruncateText
            text="Lorem ipsum dolor sit amets consectetur adipisicing elit. Nobis dignissimos, ea vitae quae dicta et corporis natus sed ipsum velit saepe unde nemo dolorem id voluptatibus, nostrum quam fugiat distinctio!"
            ellipses="..."
          />
        </VStack>

        {/* Long text (Show more button) */}
        <VStack spacing="1" align="start">
          <Heading size="md">Long Text (Show more)</Heading>
          <TruncateText
            text="Lorem ipsum dolor sit amets consectetur adipisicing elit. Nobis dignissimos, ea vitae quae dicta et corporis natus sed ipsum velit saepe unde nemo dolorem id voluptatibus, nostrum quam fugiat distinctio!"
            displayTextAs="showMore"
            ellipses="..."
          />
        </VStack>
      </VStack>
    </Box>
  );
}

export default App;
