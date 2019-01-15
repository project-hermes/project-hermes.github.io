<template>
  <main>
    <section
      id="hero"
      class="hero-background h-screen bg-no-repeat bg-cover bg-center p-8 flex flex-col items-center">
      <div class="w-full">
        <img
          src="~/assets/img/Line.svg"
          class="float-left w-24">
        <div class="float-right flex flex-row self-center">
          <button
            class="bg-transparent text-white font-semibold py-2 px-4 mr-2 border border-transparent hover:border-white rounded"
            onclick="location.href='https://app.project-hermes.com/'">
            Log In
          </button>
          <button
            class="bg-transparent hover:bg-white text-white hover:text-black font-semibold py-2 px-4 border border-white rounded"
            onclick="location.href='https://app.project-hermes.com/'">
            Sign Up
          </button>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center flex-col">
        <img
          src="~/assets/img/PH_Logo Full.png"
          class="w-4/5 xl:w-2/5 md:w-3/5">
        <p class="transform-up text-white font-semibold text-lg md:text-xl xl:text-2xl md:w-2/3 lg:w-1/3 mt-4 md:mt-0 text-center">
          Nunc ullamcorper odio quam. Nam quis consectetur turpis. Duis porta est ut arcu placerat lacinia.
        </p>
      </div>
      <div class="w-full flex flex-col md:flex-row justify-between">
        <img src="~/assets/img/cousteau_divers_logo.svg">
        <img src="~/assets/img/calypso-diving-society-logo.svg">
      </div>
    </section>
    <section
      id="sponsors"
      class="h-48 bg-grey-lighter flex flex-col justify-around items-center">
      <p class="text-black font-semibold text-xl">Our Sponsors</p>
      <div class="w-full flex flex-col md:flex-row md:justify-around md:items-center">
        <div>
          <h1>logo placeholder</h1>
          <!-- <img
            src="~/assets/img/logo.png"
            class="p-2"> -->
        </div>
        <div>
          <h1>logo placeholder</h1>
          <!-- <img
            src="~/assets/img/logo.png"
            class="p-2"> -->
        </div>
      </div>
    </section>
    <section
      id="about"
      class="sm:flex">
      <div class="flex-1">
        <img
          src="~/assets/img/photo_fish_with_line.png"
          class="object-contain">
      </div>
      <div class="flex-1 flex justify-center items-center flex-col p-4 sm:p-2 md:p-0">
        <p class="text-blue-dark text-2xl md:text-3xl lg:text-4xl">What is Project Hermes?</p>
        <p class="text-black text-md md:text-lg lg:text-xl w-3/5 my-12 text-center">
          Nunc ullamcorper odio quam. Nam quis consectetur turpis. Duis porta est ut arcu placerat lacinia. Nam auctor sapien eu fermentum pellentesque.
        </p>
        <img
          src="~/assets/img/PH_line_blue.png"
          class="w-12 lg:w-24">
      </div>
    </section>
    <section id="how">
      <p class="text-blue-dark text-4xl p-16">How it works</p>

      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row items-center">
          <img
            src="~/assets/img/how_step_1.svg"
            class="w-3/5">
          <div class="w-2/5">
            <div class="uppercase font-bold tracking-wide">Step One</div>
            <div class="text-3xl font-bold my-8">Get Sensor Ready</div>
            <div class="font-bold text-xl">Register Sensors</div>
            <div class="mt-4">
              When you unbox your sensor it will need to know who is using it.
              Go into the Hermes App and register the sensor.
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row items-center">
          <img
            src="~/assets/img/how_step_1.svg"
            class="w-3/5">
          <div class="w-2/5">
            <div class="uppercase font-bold tracking-wide">Step Two</div>
            <div class="text-3xl font-bold my-8">Get Sensor Ready</div>
            <div class="font-bold text-xl">Register Sensors</div>
            <div class="mt-4">
              When you unbox your sensor it will need to know who is using it.
              Go into the Hermes App and register the sensor.
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row items-center">
          <img
            src="~/assets/img/how_step_1.svg"
            class="w-3/5">
          <div class="w-2/5">
            <div class="uppercase font-bold tracking-wide">Step Three</div>
            <div class="text-3xl font-bold my-8">Get Sensor Ready</div>
            <div class="font-bold text-xl">Register Sensors</div>
            <div class="mt-4">
              When you unbox your sensor it will need to know who is using it.
              Go into the Hermes App and register the sensor.
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section
      id="get_started"
      class="h-screen bg-black flex">
      <div class="flex-1">
        <img
          src="~/assets/img/photo_jellyfish.png"
          class="h-screen object-contain">
      </div>
      <div class="flex-1">
        <p class="text-3xl font-bold text-white">Get Started</p>
        <p class="text-yellow-light">Divers</p>
        <p class="text-white">Asd asdasd sada dasdqw eqw easf.</p>
      </div>
    </section> -->

    <!-- <section
      id="who"
      class="h-64">
      <p class="text-blue-dark font-bold text-3xl p-4">Who we are</p>
    </section> -->

    <!-- <section
      id="quote"
      class="h-96 quote-background bg-no-repeat bg-cover bg-center"/> -->

    <!-- <section
      id="how"
      class="h-96" /> -->

    <section
      id="hack"
      class="h-screen-2/3 hack-background bg-no-repeat bg-cover bg-center flex flex-col items-center justify-around">
      <div class="flex-3">
        <p class="my-24 mx-32 text-4xl text-yellow font-semibold">Let's Hack the Ocean</p>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <button
            class="m-2 w-64 bg-yellow text-black uppercase whitespace-no-wrap text-sm font-bold py-5 rounded-full"
          >
            Request a Sensor
          </button>
          <button
            class="m-2 w-64 bg-white text-blue uppercase whitespace-no-wrap text-sm font-bold py-5 rounded-full"
            onclick="location.href='https://app.project-hermes.com/'">
            Go to the App
          </button>
        </div>
      </div>
      <div class="flex-2" />
    </section>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.hero-background {
  background-image: url('~assets/img/hero_background.png');
}

.quote-background {
  background-image: url('~assets/img/photo_coral.png');
}

.hack-background {
  background-image: url('~assets/img/photo_hand_2.png');
}

.transform-up {
  transform: translateY(-2rem);
}

.min-content {
  width: min-content;
}
</style>
