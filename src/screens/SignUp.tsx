import { VStack, Image, Text, Center, Heading } from 'native-base';

import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos'),
  password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref('password'), null], 'As senhas não conferem')
})

export function SignUp(){
  const navigation = useNavigation();
  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleGoBack(){
    navigation.goBack();
  }

  function handleSubmitForm({ name, email, password, password_confirm }: FormDataProps){
    console.log(name, email, password, password_confirm);
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

        <Controller 
          name='name'
          control={control}
          render={({ field: {onChange, value} }) => (
            <Input 
              placeholder='Nome'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller 
          name='email'
          control={control}
          render={({ field: {onChange, value} }) => (
            <Input 
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller 
          name='password'
          control={control}
          render={({ field: {onChange, value} }) => (
            <Input 
              placeholder='Senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller 
          name='password_confirm'
          control={control}
          render={({ field: {onChange, value} }) => (
            <Input 
              placeholder='Confirme sua senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSubmitForm)}
              returnKeyType="send"
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />

        <Button 
          title='Criar e acessar'
          onPress={handleSubmit(handleSubmitForm)}
        />
      </Center>

      <Center pt={28}>
        <Button 
          title='Voltar para o login'
          variant='outline'
          onPress={handleGoBack}
        />
      </Center>
    </VStack>
  );
}