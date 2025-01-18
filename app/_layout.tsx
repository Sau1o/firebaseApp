import { Stack } from "expo-router";
import {useEffect, useState} from "react"
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user,setUser] = useState<FirebaseAuthTypes.User | null>();

  const onAuthStateChanged = (user:FirebaseAuthTypes.User | null) => {
    console.log('onAuthStateChanged',user)
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  },[])
  
  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  )
}
