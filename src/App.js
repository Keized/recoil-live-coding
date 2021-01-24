import './App.scss';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <RecoilRoot>
            <div id="App" className="min-vh-100">
                <main>
                    <div className="container p-3">
                        <h1>My bank manager</h1>
                        <hr/>
                        <div className="row p-3">
                        </div>
                        <div className="row p-3">
                        </div>
                        <div className="row p-3">
                        </div>
                    </div>
                </main>
            </div>
        </RecoilRoot>
    );
}

export default App;
