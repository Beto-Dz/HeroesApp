import { AuthContextProvider } from "./auth/context/AuthContext"
import { AppRouter } from "./router/AppRouter"

export const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}
