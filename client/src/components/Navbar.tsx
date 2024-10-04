import { Icon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Altametrics</span>
          <img className="h-8 w-auto" src="public/altametrics.png" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          <a href="/invoices" className="text-secondary font-semibold hover:text-mid-blue">
            Invoices
          </a>
          <a href="/login" className="text-secondary font-semibold hover:text-mid-blue">
            <PersonIcon className="h-6 w-6" />
          </a>
        </nav>
        
        {/* Toggle Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          type="button"
          className="lg:hidden -m-2.5 rounded-md p-2.5 text-secondary"
        >
          {navbarOpen ? <CloseIcon /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-gray-600 opacity-50" onClick={() => setNavbarOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Altametrics</span>
                <img
                  className="h-8 w-auto"
                  src="public/altametrics.png"
                  alt="Logo"
                />
              </a>
              <button
                onClick={() => setNavbarOpen(false)}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/invoices"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Invoices
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar
