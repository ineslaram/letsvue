<template>
  <div>
    <div class="relative py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <nav
        class="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-10" src="/images/letsvue.svg" />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
            >Recursos</a
          >

          <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
            >Contacto</a
          >

          <!-- <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
            >Marketplace</a
          >

          <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
            >Company</a
          >

          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >Log in</a
          > -->
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nabvar',
}
</script>

<style lang="scss" scoped></style>
