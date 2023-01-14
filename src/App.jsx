import AppRouters from './router/AppRouter'
import { store } from './redux/store/store'
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <AppRouters/>
        </Provider>
    )
}

export default App
