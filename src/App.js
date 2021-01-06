import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import OperationsList from './component/OperationsList';
import { RecoilRoot } from 'recoil';
import OperationEditor from './component/OperationEditor';

function App() {
  return (
    <div id="App" className="container">
        <RecoilRoot>
            <div className="row mt-4">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Operations
                        </div>
                        <OperationsList />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Add Operation
                        </div>
                        <OperationEditor />
                    </div>
                </div>
            </div>
        </RecoilRoot>
    </div>
  );
}

export default App;
