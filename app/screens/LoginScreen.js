// import React, { useState } from 'react';
// import { View, StyleSheet, Image, Text } from 'react-native';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton'

// import { Formik } from 'formik'
// import * as Yup from 'yup'
// import ErrorMessage from '../components/ErrorMessage';
// import AppForm from '../components/AppForm';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().email().label('Email'),
//     password: Yup.string().required().min(4).label('Password')
// })

// function LoginScreen(props) {

//     // const [email, setEmail] = useState()
//     // const [password, setPassword] = useState()

//     return (
//         <View style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require('../assets/logo-red.png')} />
//             <AppForm
//                 initialValues={{ email: '', password: '' }}
//                 onSubmit={values => console.log(values)}
//                 validationSchema={validationSchema}
//             >
//                 {() => { handleChange, setFieldTouched, touched }}
//                 <AppTextInput
//                     onChangeText={handleChange('email')}
//                     placeholder='email'
//                     onBlur={() => setFieldTouched('email')}
//                     autoCorrect={false}
//                     keyboardType='email-address'
//                     textContentType='emailAddress'
//                     icon='email'
//                     autoCapitalize='none'
//                 />
//                 <ErrorMessage error={errors.email} visible={touched.email} />
//                 <AppTextInput
//                     onChangeText={handleChange('password')}
//                     autoCapitalize='none'
//                     onBlur={() => setFieldTouched('password')}
//                     autoCorrect={false}
//                     icon='lock'
//                     placeholder='Password'
//                     textContentType='password'
//                     secureTextEntry={true}
//                 />
//                 <ErrorMessage error={errors.password} visible={touched.password} />
//                 <AppButton
//                     title='Login'
//                     onPress={handleSubmit} />
//             </AppForm>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 15
//     },
//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50
//     }
// });

// export default LoginScreen;