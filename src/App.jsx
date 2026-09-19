import './App.css'
import Student from './Student'
import Product from './Product'
import Password from './Password'

function App() {

    return (
        <>
            <Student
                name="Sripallav"
                age={22}
                course="Java Full Stack"
                city="Hyderabad"
            />

            <Product
                name="Laptop"
                price={50000}
                brand="Dell"
            />

            <Product
                name="Mobile"
                price={60000}
                brand="iPhone"
            />

            <Product
                name="Tab"
                price={50000}
                brand="Lenovo"
            />

            <Password />
        </>
    );
}

export default App