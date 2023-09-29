import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <>
      <div class="relative min-h-screen md:flex " data-dev-hint="container">
        <input type="checkbox" id="menu-open" class="hidden" />

        <label
          for="menu-open"
          class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
          data-dev-hint="floating action button"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <header
          class="bg-gray-600 text-gray-100 flex justify-between md:hidden"
          data-dev-hint="mobile menu bar"
        >
          {/* <a
            href="#"
            class="block p-4 text-white font-bold whitespace-nowrap truncate"
          >
            EventHub
          </a> */}
          <NavLink
            to="/"
            className="block p-4 text-white font-bold whitespace-nowrap truncate">
            EventHub
          </NavLink>

          <label
            for="menu-open"
            id="mobile-menu-button"
            class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
          >
            <svg
              id="menu-open-icon"
              class="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              class="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>

        <aside
          id="sidebar"
          class="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 fixed inset-y-0 left-0 transform md:fixed md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            class="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <NavLink
              to="/"
              className="text-white flex items-center space-x-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 flex-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span class="text-2xl font-extrabold whitespace-nowrap truncate">
                EventHub
              </span>
            </NavLink>


            <nav data-dev-hint="main navigation">
              <NavLink
                to="/"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                Home
              </NavLink>
              <NavLink
                to="About"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                About
              </NavLink>

            </nav>
          </div>
        </aside>

        <main id="content" class="flex-1 md:ml-[30%] lg:ml-[20%] p-12">
          <div class="max-w-7xl">
            <div class="sm:px-0">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RootLayout;
