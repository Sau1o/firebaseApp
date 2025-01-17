import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, Button, ActivityIndicator } from "react-native";

export default function Index() {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = () => {

  }

  const signIn = () => {

  }

  return (
    <View
      style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
        />
      <Text>Password</Text>
      <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
      {loading ?(
        <ActivityIndicator size={'small'} style={{margin:28}} />
      ) : (
        <>
          <Button onPress={signUp} title="Sign Up" />
          <Button onPress={signIn} title="Sign In" /> 
        </>
      )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input:{
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor:"#fff",
  }
})
