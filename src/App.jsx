
import './App.css'
import { Button } from './components/ui/button'
import CreateOrder from './pages/cashier/CreateOrder'
import CustomerLookup from './pages/cashier/CustomerManagement/CustomerLookup'

function App() {
  
  return (
    <div className="min-h-screen">
      {/* <CreateOrder /> */}
      <CustomerLookup />
    </div>
  )
}

export default App
