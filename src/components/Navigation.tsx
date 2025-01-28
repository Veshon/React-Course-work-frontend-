import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/'>Dashboard</Link>
                        <Link to='/add'>Add Customer</Link>
                        <Link to='/delete'>Delete Customer</Link>
                        <Link to='/update'>Update Customer</Link>
                    </ul>
                </nav>

                <nav>
                    <ul>
                        <Link to='/'>Dashboard</Link>
                        <Link to='/addItem'>Add Item</Link>
                        <Link to='/deleteItem'>Delete Item</Link>
                        <Link to='/updateItem'>Update Item</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}