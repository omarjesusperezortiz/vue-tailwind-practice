<template>
<div class="antialiased text-gray-900 px-6">
      <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
        <div class="py-8">
          <h1 class="text-4xl font-bold">Contact Us</h1>
          <p class="mt-2 text-lg text-gray-600">
            An opinionated form reset designed to make form elements easy to style with utility
            classes.
          </p>
        </div>

        <div class="py-12">
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder=""
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  type="email"
                  class="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input
                  type="date"
                  class="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="
                    block
                    w-full
                    mt-0
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea
                  class="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  rows="2"
                ></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="
                          border-gray-300 border-2
                          text-black
                          focus:border-gray-300 focus:ring-black
                        "
                      />
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

</template>
<script setup>
</script>
<style scoped>
</style>