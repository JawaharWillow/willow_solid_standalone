import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';

const Header = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const handleTVProviderToggle = () => {
    const el = document.getElementById('wlw-header-tve');
    if (el) el.classList.toggle('hidden');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen());
  };

  return (
    <header class="container m-auto text-white">
      <nav class="flex justify-between items-center p-4">
        {/* Logo */}
        <A href="/" class="">
          <img
            class="w-40"
            src="https://img.willow.tv/apps/wlw-nw-lgo.svg"
            alt="Willow Logo"
          />
        </A>

        {/* Hamburger for Mobile */}
        <button
          class="lg:hidden flex items-center text-white"
          onClick={toggleMenu}
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul class="hidden lg:flex justify-between gap-2">
          <li class="py-2 px-4">
            <A href="/" class="no-underline hover:underline">Home</A>
          </li>
          <li class="py-2 px-4">
            <A href="/videos" class="no-underline hover:underline">Videos</A>
          </li>
          <li class="py-2 px-4">
            <A href="/fixtures.html" class="no-underline hover:underline" target='_blank'>Fixtures</A>
          </li>
          <li class="py-2 px-4">
            <A href="/results" class="no-underline hover:underline">Results</A>
          </li>
          <li class="py-2 px-4">
            <A href="/tvchannel" class="no-underline hover:underline">TV Channel</A>
          </li>
          <li class="py-2 px-4 relative">
            <a
              href="#"
              class="no-underline hover:underline"
              onClick={handleTVProviderToggle}
              id="wlw-header-tve-toggle"
            >
              TV Provider
            </a>
          </li>
          <li class="py-2 px-4">
            <a
              href="#email_verify_mdl"
              data-bs-toggle="modal"
              class="no-underline hover:underline"
            >
              Verify Your Email
            </a>
          </li>
        </ul>

        {/* User Dropdown (Desktop only) */}
        <ul class="hidden md:flex">
          <li class="py-2 px-4 relative group">
            <A href="/login" class="flex items-center gap-2 no-underline hover:underline">
              <img
                src="https://img.willow.tv/apps/wlw-lgt-ico_r1.svg"
                alt="Willow Login Icon"
                class="w-5 h-5"
              />
              <span>User</span>
            </A>
            <div class="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-md z-10">
              <ul class="dpdown_men text-gray-800">
                <li>
                  <A href="/myprofile" class="block px-4 py-2 hover:bg-gray-100 no-underline">
                    Profile
                  </A>
                </li>
                <li>
                  <A href="/logout" class="block px-4 py-2 hover:bg-gray-100 no-underline">
                    Logout
                  </A>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div class={`md:hidden ${menuOpen() ? 'block' : 'hidden'} px-4 pb-20 absolute w-[100%] pt-[10%] pl-[10%] bg-[#1e202df7]`}>
        <ul class="flex flex-col gap-2">
          <li><A href="/" class="no-underline hover:underline block py-2">Home</A></li>
          <li><A href="/videos" class="no-underline hover:underline block py-2">Videos</A></li>
          <li><A href="/fixtures.html" class="no-underline hover:underline block py-2">Fixtures</A></li>
          <li><A href="/results" class="no-underline hover:underline block py-2">Results</A></li>
          <li><A href="/tvchannel" class="no-underline hover:underline block py-2">TV Channel</A></li>
          <li>
            <a
              href="#"
              onClick={handleTVProviderToggle}
              class="no-underline hover:underline block py-2"
            >
              TV Provider
            </a>
          </li>
          <li>
            <a
              href="#email_verify_mdl"
              data-bs-toggle="modal"
              class="no-underline hover:underline block py-2"
            >
              Verify Your Email
            </a>
          </li>
          <li><A href="/myprofile" class="no-underline hover:underline block py-2">Profile</A></li>
          <li><A href="/logout" class="no-underline hover:underline block py-2">Logout</A></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
