import './App.css'
import Counter from './Components/Counter.jsx';
import InputHandler from './Components/InputHandler.jsx';
import ToggleButton from './Components/ToggleButton.jsx';
import TextToggle from './Components/TextToggle.jsx';

function App() {
    return (<main>
        <section>
            <Counter/>
        </section>
        <section>
            <InputHandler/>
        </section>
        <section>
            <ToggleButton/>
        </section>
        <section>
            <TextToggle/>
        </section>
    </main>)
}


export default App