import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import PerfilScreen from "./screens/PerfilScreen"
import SplashScreen from "./screens/SplashScreen"

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="MBTNav" component={MBTNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const MBT = createMaterialBottomTabNavigator();
function MBTNavigation() {
    return (
        <MBT.Navigator>
            <MBT.Screen name="HomeScreen" component={HomeScreen} />
            <MBT.Screen name="Perfil" component={PerfilScreen} />
        </MBT.Navigator>
    );
}