import './index.css';
import store from './lib/store';

import {Provider} from 'react-redux';
import {HomePage} from './pages/HomePage';

function App() {
    return (
        <Provider store={store}>
            <HomePage/>
        </Provider>
    );
}

export default App;
