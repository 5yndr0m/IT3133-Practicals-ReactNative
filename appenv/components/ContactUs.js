import { StyleSheet, View } from 'react-native';
import { Text, Divider, Button, TextInput } from 'react-native-paper';
// import { useState } from 'react';

export default function ContactUs() {
  // const [email, setEmail] = useState('');
  return (
    <>
      <View style={styles.header}>
        <Text variant="headlineLarge" style={{ textAlign: 'center' }}>Contact Us</Text>
        <Divider />
      </View>
      <View style={styles.body}>
        <Text variant="bodyMedium">Please fill out the form below to contact us.</Text>
        <TextInput label="Name" mode="outlined" />
        <TextInput label="Email" mode="outlined" keyboardType="email-address" />
        <TextInput label="Phone" mode="outlined" keyboardType="phone-pad" />
        <TextInput label="Message" mode="outlined" multiline numberOfLines={5} />
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