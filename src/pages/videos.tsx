import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';

export default function Videos() {
  const [count, setCount] = createSignal(0);

  return (
        <A href="/" class="flex flex-col text-[#696b7d] text-[40px] items-center pt-20">
          <img
            class="w-[70%] xl:w-[30%] m-auto"
            src="https://img.willow.tv/apps/imgs/wllw_n_icon_grr.svg"
            alt="Willow Logo"
          />
          Videos
        </A>
  );
}
