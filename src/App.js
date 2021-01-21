import './App.scss';
import OperationsList from './component/OperationsList';
import { RecoilRoot } from 'recoil';
import OperationEditor from './component/OperationEditor';
import OperationDetails from './component/OperationDetails';

function App() {
    return (
        <div id="App" className="min-vh-100">
            <RecoilRoot>
                <main>
                    <div className="container p-3">
                            <h1>Gérance de sous</h1>
                        <hr/>
                        <div className="row mb-4">
                            <OperationsList />
                        </div>
                        <div className="row mb-4">
                            <OperationDetails />
                            <OperationEditor />
                        </div>
                    </div>
                </main>
            </RecoilRoot>
        </div>
    );
}

export default App;
