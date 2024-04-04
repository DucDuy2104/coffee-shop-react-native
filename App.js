import { NavigationContainer } from "@react-navigation/native"
import MainBottomNav from "./appnavigation/MainBottomNav"
import NavItemToDetail from "./appnavigation/NavItemToDetail"
import { AppProvider } from "./global/AppContext"


const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <NavItemToDetail />
      </NavigationContainer>
    </AppProvider>
  )
}

export default App