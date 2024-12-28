<script lang="ts">
import { onMount } from 'svelte';

  import '../styles/app.scss';
  import { countryCode } from '../utils/store';

  onMount(() => {
    const storedCountryCode = sessionStorage.getItem('countryCode');
    if (storedCountryCode) {
      $countryCode = storedCountryCode;
    } else {
      const lang = window.navigator.language;
      $countryCode = lang === 'ja' ? 'JP' : 'EN';
    }
  })
</script>

<header>
  <div></div>
  <div>
    <div class="menu"></div>
    <select
      name="language"
      bind:value={$countryCode}
      on:change={() => {
        sessionStorage.setItem('countryCode', $countryCode);
      }}
    >
      <option value="JP">JP</option>
      <option value="EN">EN</option>
    </select>
  </div>
</header>

<main>
  <slot />
</main>

<footer>@ 2021 Kota Yatagai</footer>

<style lang="scss">
  @import '../styles/variable.scss';
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
  main {
    margin: 0 auto;
    width: 85%;
    max-width: 1500px;
  }
  footer {
    width: 100%;
    text-align: center;
    height: 50px;
  }
</style>
