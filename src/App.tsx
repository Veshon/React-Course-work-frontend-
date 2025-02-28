import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard";
import {AddCustomer} from "./pages/AddCustomer";
import {UpdateCustomer} from "./pages/UpdateCustomer";
import {DeleteCustomer} from "./pages/DeleteCustomer";
import {RootLayout} from "./components/RootLayout";
import {store} from "./store/store";
import {Provider} from "react-redux";
import {DeleteItem} from "./pages/item/DeleteItem.tsx";
import {AddItem} from "./pages/item/AddItem.tsx";
import {UpdateItem} from "./pages/item/UpdateItem.tsx";
import {AddEmployee} from "./pages/employee/AddEmployee.tsx";
import {DeleteEmployee} from "./pages/employee/DeleteEmployee.tsx";
import {UpdateEmployee} from "./pages/employee/UpdateEmployee.tsx";
function App() {

  const routes = createBrowserRouter([
    {
      path: '',
      element : <RootLayout/>,
      children : [
        { path : '', element : <Dashboard/>},
        { path : '/add', element : <AddCustomer/>},
        { path : '/delete', element : <DeleteCustomer/>},
        { path : '/update', element : <UpdateCustomer/>},

        { path : '/addItem', element : <AddItem/>},
        { path : '/deleteItem', element : <DeleteItem/>},
        { path : '/updateItem', element : <UpdateItem/>},

        { path : '/addEmployee', element : <AddEmployee/>},
        { path : '/deleteEmployee', element : <DeleteEmployee/>},
        { path : '/updateEmployee', element : <UpdateEmployee/>}
      ]
    },
  ])

  return (
      <>
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </>
  );
}

export default App
