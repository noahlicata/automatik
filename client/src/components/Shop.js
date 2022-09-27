import React, { useState } from "react";
import CarCard from "./CarCard";

function Shop({ cars, currentUser, loggedIn, setCars }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearOrder, setYearOrder] = useState(true);

  const displayedCars = cars.filter((car) => {
    return car.make.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const carsArr = displayedCars.map((car) => {
    return <CarCard key={car.id} car={car} />;
  });

  function onSortDesc(e, order, setOrder) {
    e.preventDefault();
    const sortedCategory = displayedCars.sort((a, b) => {
      return b.year - a.year;
    });
    console.log(sortedCategory);
    setOrder(!order);
    setCars([...sortedCategory]);
  }

  function onSortAsc(e, order, setOrder) {
    e.preventDefault();
    const sortedCategory = displayedCars.sort((a, b) => {
      return a.year - b.year;
    });
    console.log(sortedCategory);
    setOrder(!order);
    setCars([...sortedCategory]);
  }

  return (
    <div className="p-4">
      <form className="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-40 mb-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Makes, Models, Colors..."
            required=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      {/* sidebar */}

      <div className="flex justify-center">
        <aside class="w-64 mr-10" aria-label="Sidebar">
          <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <a href="/" class="flex items-center pl-2.5 mb-5">
              <img
                src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-car-3.png"
                class="mr-3 h-6 sm:h-7"
                alt="Flowbite Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                AutoMatik
              </span>
            </a>
            <ul class="space-y-2">
              <li>
                <a class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                  <span class="ml-3 font-semibold">Your Search</span>
                </a>
                <span class="ml-3 font-base text-xs text-blue-600">
                  {currentUser.email}
                </span>
              </li>

              <div>
                <div class="dropdown inline-block relative">
                  <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">Sort by:</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li class="">
                      <a
                        class="cursor-pointer rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={(e) => onSortDesc(e, yearOrder, setYearOrder)}
                      >
                        Year - Newest
                      </a>
                    </li>
                    <li class="">
                      <a
                        class="cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={(e) => onSortAsc(e, yearOrder, setYearOrder)}
                      >
                        Year - Oldest
                      </a>
                    </li>
                    <li class="">
                      <a
                        class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three is the magic number
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* check boxes */}

              <div class="flex items-center mb-4">
                <input
                  onClick={(e) => onSortDesc(e, yearOrder, setYearOrder)}
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  New
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  onClick={(e) => onSortAsc(e, yearOrder, setYearOrder)}
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Used
                </label>
              </div>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <span class="pl-2">Clear Filters</span>
                </a>
              </li>
              <li>
                <a
                  href="signin"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Save Search</span>
                </a>
              </li>
              {loggedIn ? null : (
                <li>
                  <a
                    href="/signin"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </aside>
        <div className="flex flex-col ml-10">{carsArr}</div>
      </div>
    </div>
  );
}

export default Shop;
