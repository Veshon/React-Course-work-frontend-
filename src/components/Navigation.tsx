import {Link} from "react-router";
import '../assets/style.css'

export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <div>
                            <Link to='/' className="nav-link">Dashboard</Link>
                            <Link to='/add' className="nav-link">Customer</Link>
                            {/*going to add customer page*/}
                            <Link to='/addItem' className="nav-link">Item</Link>
                        </div>
                        <br></br>
                        <br></br>
                        <Link to='/add'>Add Customer &nbsp;</Link>
                        <Link to='/delete'>Delete Customer &nbsp;</Link>
                        <Link to='/update'>Update Customer &nbsp;</Link>
                    </ul>
                </nav>

                <nav>
                    <ul>
                        <Link to='/addItem'>Add Item &nbsp;</Link>
                        <Link to='/deleteItem'>Delete Item &nbsp;</Link>
                        <Link to='/updateItem'>Update Item &nbsp;</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}