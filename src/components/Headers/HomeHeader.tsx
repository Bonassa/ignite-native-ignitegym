import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Text, VStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from '@components/UserPhoto';

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={30} pb={4} px={8} alignItems="center">
      <UserPhoto 
        source={{ uri: 'https://github.com/Bonassa.png' }}
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">
          Renan Bonassa
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}