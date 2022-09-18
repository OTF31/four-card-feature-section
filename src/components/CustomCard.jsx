import { Card, Image, Text, VStack } from "native-base";

const CustomCard = ({ topColor, title, paragraph, icon }) => {
  return (
    <>
      <Card borderTopColor={topColor} borderTopWidth={3} w={300} h={200} px={6} shadow={7}>
        <VStack space={2}>
          <Text fontSize="lg" color={"VeryDarkBlue"} bold>
            {title}
          </Text>
          <Text fontSize="xs" color={"GrayishBlue"}>
            {paragraph}
          </Text>
          <Image
            mt={3}
            source={{ uri: icon }}
            resizeMode="contain"
            size={16}
            alt="icon"
            alignSelf={"flex-end"}
          />
        </VStack>
      </Card>
    </>
  );
};

export default CustomCard;
