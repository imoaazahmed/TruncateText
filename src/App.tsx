import { Box, Heading, VStack } from "@chakra-ui/react";
import { TruncateText } from "./truncate-text";

function App() {
  return (
    <Box className="App">
      <VStack spacing="2" align="start" p="5">
        {/* Short text */}
        <Heading>Short Text</Heading>
        <TruncateText text="lorem ibsum" ellipses="..." />

        {/* Long text (Tooltip) */}
        <Heading>Long Text (Tooltip)</Heading>
        <TruncateText
          text="Lorem ipsum dolor sit amets consectetur adipisicing elit. Nobis dignissimos, ea vitae quae dicta et corporis natus sed ipsum velit saepe unde nemo dolorem id voluptatibus, nostrum quam fugiat distinctio!"
          displayTextAs="tooltip"
          ellipses="..."
        />

        {/* Long text (Show more button) */}
        <Heading>Long Text (Show more)</Heading>
        <TruncateText
          text="Lorem ipsum dolor sit amets consectetur adipisicing elit. Nobis dignissimos, ea vitae quae dicta et corporis natus sed ipsum velit saepe unde nemo dolorem id voluptatibus, nostrum quam fugiat distinctio!"
          displayTextAs="showMore"
          ellipses="..."
        />
      </VStack>
    </Box>
  );
}

export default App;
