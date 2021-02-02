import './App.scss';
import OperationsList from './component/OperationsList';
import { RecoilRoot } from 'recoil';
import OperationEditor from './component/OperationEditor';

function App() {
    return (
        <div id="App" className="min-vh-100">
            <RecoilRoot>
                <main>
                    <div className="container p-3">
                        <h1>Gérance de sous</h1>
                        <hr/>
                        <div className="row">
                            <div className="col mb-4">
                                <OperationsList />
                            </div>
                            <div className="col mb-4">
                                <OperationEditor />
                            </div>
                        </div>
                    </div>
                </main>
            </RecoilRoot>
        </div>
    );
}

export default App;
