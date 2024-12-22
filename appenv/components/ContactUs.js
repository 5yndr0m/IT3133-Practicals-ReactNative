import { StyleSheet, View } from 'react-native';
import { Text, Divider, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function ContactUs() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleInputChange = (value, fieldName) => {
    setUserData(prevState => ({
      ...prevState,
      [fieldName]: value,
    }))
  };
  
  return (
    <>
      <View style={styles.header}>
        <Text variant="headlineLarge" style={{ textAlign: 'center' }}>Contact Us</Text>
        <Divider />
      </View>
      <View style={styles.body}>
        <Text variant="bodyMedium" style={styles.instruction}>Please fill out the form below to contact us.</Text>
        <TextInput 
          label="Name" 
          mode="outlined" 
          value={userData.name} 
          onChangeText={(value) => handleInputChange(value, 'name')}
          style={styles.input} 
        />
        <TextInput 
          label="Email" 
          mode="outlined" 
          keyboardType="email-address" 
          value={userData.email} 
          onChangeText={(value) => handleInputChange(value, 'email')}
          style={styles.input} 
        />
        <TextInput 
          label="Phone" 
          mode="outlined" 
          keyboardType="phone-pad" 
          value={userData.phone} 
          onChangeText={(value) => handleInputChange(value, 'phone')}
          style={styles.input} 
        />
        <TextInput 
          label="Message" 
          mode="outlined" 
          multiline 
          numberOfLines={5} 
          value={userData.message} 
          onChangeText={(value) => handleInputChange(value, 'message')}
          style={styles.input} 
        />
        <Text>Name : { userData.name }</Text>
        <Text>Email : { userData.email  }</Text>
        <Text>Phone : { userData.phone }</Text>
        <Text>Message : { userData.message }</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ textAlign: 'center' }}>MyApp © 2024</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    width: '100%',
  },
  body: {
    flex: 6,
    width: '100%',
    padding: 5,
  },
  footer: {
    flex: 2,
    width: '100%',
    padding: 5,
  },
  instruction: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white',
  }
});