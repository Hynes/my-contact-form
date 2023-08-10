import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { Button } from './components/button/button';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name={'name'} className="Name" />
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" className="Email" />
                <Label htmlFor="message">Message</Label>
                <Input id="message" name="message" className="Message" />
                <Button>SUBMIT FORM</Button>
            </form>
        </div>
    );
}

export default App;
