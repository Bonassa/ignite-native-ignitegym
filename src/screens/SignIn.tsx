import { VStack, Image, Text, Center, Heading } from 'native-base';

import {useNavigation} from '@react-navigation/native';
import {AuthNavigatorRoutesProps} from '@routes/auth.routes';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn(){
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp');
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
          Acesse sua conta
        </Heading>

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
          title='Acessar'
        />
      </Center>

      <Center flex={1}>
        <Text color='gray.100' fontSize='sm' mb={3} fontFamily='body'>
          Ainda não tem acesso?
        </Text>
        <Button 
          title='Criar conta'
          variant='outline'
          onPress={handleNewAccount}
        />
      </Center>
    </VStack>
  );
}