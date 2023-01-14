import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import {useNavigation} from '@react-navigation/native';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp(){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <VStack flex={1} px={5}>
      <Image 
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Hora de Treinar"
        resizeMode='contain'
        position='absolute'
      />

      <Center my={45}>
        <LogoSvg />
        <Text color='gray.100' fontSize='sm'>
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading color='gray.100' fontSize='xl' fontFamily='heading' mb={6}>
          Crie sua conta
        </Heading>

        <Input 
          placeholder='Nome'
        />

        <Input 
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Input 
          placeholder='Senha'
          secureTextEntry
        />

        <Button 
          title='Criar e acessar'
        />
      </Center>

      <Center flex={1}>
        <Button 
          title='Voltar para o login'
          variant='outline'
          onPress={handleGoBack}
        />
      </Center>
    </VStack>
  );
}