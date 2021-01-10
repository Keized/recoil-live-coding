import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import OperationsList from './component/OperationsList';
import { RecoilRoot } from 'recoil';
import OperationEditor from './component/OperationEditor';
import OperationDetails from './component/OperationDetails';

function App() {
    return (
        <div id="App" className="py-4 min-vh-100" style={{'background': '#F1F1FA'}}>
            <RecoilRoot>
                <div className="container">
                    <div className="row mb-4">
                        <OperationsList />
                        <OperationDetails />
                    </div>
                    <div className="row mb-4">
                        <OperationEditor />
                    </div>
                </div>
            </RecoilRoot>
        </div>
    );
}

export default App;
