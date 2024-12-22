import { StyleSheet, View } from 'react-native';
import { Text, Divider, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  
  return (
    <>
      <View style={styles.header}>
        <Text variant="headlineLarge" style={{ textAlign: 'center' }}>Contact Us</Text>
        <Divider />
      </View>
      <View style={styles.body}>
        <Text variant="bodyMedium">Please fill out the form below to contact us.</Text>
        <TextInput label="Name" mode="outlined" name="name" value={userData.name} onChange={handleInputChange} />
        <TextInput label="Email" mode="outlined" keyboardType="email-address" name="email" value={userData.email} onChange={handleInputChange} />
        <TextInput label="Phone" mode="outlined" keyboardType="phone-pad" name="phone" value={userData.phone} onChange={handleInputChange} />
        <TextInput label="Message" mode="outlined" multiline numberOfLines={5} name="message" value={userData.message} onChange={handleInputChange} />
        <Text>{ name }</Text>
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
  }
});