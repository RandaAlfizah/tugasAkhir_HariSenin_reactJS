import React from "react";
import RootLayouts from "../../layouts/RootLayouts";

export default function login() {
  return (
    <RootLayouts>
      <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5">
          <div class="sm:w-auto px-2">
            <h2 class="font-bold text-2xl text-center mt-8">Login </h2>
            <p class="text-sm mt-4 bg-blue-200 rounded-xl px-4 py-6 text-center">
              Akses dan kelola instance dari akun Odoo ini.
            </p>

            <form action="" class="flex flex-col">
              <p class="mt-8">Email</p>
              <input
                class="p-2 rounded-xl border"
                type="text"
                name="email"
                placeholder="email"
              />
              <div class="relative">
                <p class="mt-4 w-full">Password</p>
                <input
                  class="p-2 rounded-xl w-full border"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <button class="mt-4 bg-gray-500 rounded-md text-white py-2 hover:bg-gray-800">
                Login
              </button>
            </form>

            <div class="mt-2 grid grid-cols-2 items-center text-xs mb-8">
              <a href="#">Tidak punya akun?</a>
              <a href="#" class="text-right">
                Atur Ulang Kata Sandi
              </a>
            </div>
          </div>
        </div>
      </section>
    </RootLayouts>
  );
}
