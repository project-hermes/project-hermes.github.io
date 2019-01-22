<template>
  <main>
    <section
      id="hero"
      class="hero-background h-screen bg-no-repeat bg-cover p-12 flex flex-col items-center">
      <div class="w-full">
        <img
          src="~/assets/img/H_Logo.svg"
          class="float-left w-12 md:w-16">
        <div class="float-right flex flex-row self-center">
          <button
            class="bg-transparent text-white text-sm uppercase underline font-semibold py-3 px-6 md:px-10 mr-2 border-2 border-transparent rounded-full"
            onclick="location.href='https://app.project-hermes.com/'">
            Log In
          </button>
          <button
            class="bg-transparent hover:bg-white text-white text-sm uppercase hover:text-black font-semibold py-3 px-6 md:px-10 border-2 border-white rounded-full"
            onclick="location.href='https://app.project-hermes.com/'">
            Sign Up
          </button>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center flex-col">
        <img
          src="~/assets/img/PH_Logo Full.png"
          class="w-4/5 xl:w-2/5 md:w-3/5">
      </div>
      <div class="w-full flex flex-col md:flex-row justify-between">
        <img src="~/assets/img/divers_logo.svg">
      </div>
    </section>
    <section
      id="sponsors"
      class="h-auto md:h-48 bg-grey-lighter flex-col justify-center items-center self-center">
      <p class="text-black font-extrabold text-md uppercase  text-center pt-6 pb-4">In Collaboration With</p>
      <div class="flex flex-col md:flex-row justify-around items-center">
        <img
          class="m-4 md:m-0 w-3/5 md:w-1/5 xl:w-1/5 lg:w-1/5"
          src="~/assets/img/Dan Europe Logo-05.svg">
        <img
          class="m-4 md:m-0 w-3/5 md:w-1/5 xl:w-1/5 lg:w-1/5"
          src="~/assets/img/eumstat logo.svg">
        <img
          class="m-4 md:m-0 w-3/5 md:w-1/5 xl:w-1/5 lg:w-1/5"
          src="~/assets/img/university_of_queensland.svg">
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
        <p class="font-eczar font-black text-blue text-2xl md:text-3xl lg:text-4xl">What is Project Hermes?</p>
        <p class="text-black  text-md md:text-lg lg:text-xl md:w-3/5 mt-12 text-left">
          Through the power of open source IoT technology we have created a new diving instrument.
          It allows divers to gather data about the water they explore and with record precision.
        </p>
        <p class="text-black  text-md md:text-lg lg:text-xl md:w-3/5 mt-6 mb-12 text-left">
          The data is then made public for our scientific partners to study in the hopes of
          better understanding the effects of climate change on our oceans.
        </p>
        <img
          src="~/assets/img/PH_line_blue.png"
          class="w-12 lg:w-24">
      </div>
    </section>
    <section
      id="how"
      class="pb-8 md:pb-0">
      <p class="font-eczar text-blue font-black text-4xl p-24">How it works</p>

      <div class="flex justify-center mb-10 md:mb-0">
        <div class="flex flex-col md:flex-row items-center">
          <img
            src="~/assets/img/how_step_1.svg"
            class="w-3/5 mb-10">
          <div class="w-3/5 md:w-2/5">
            <div class="uppercase font-bold ">Step One</div>
            <div class="font-eczar text-3xl font-bold my-8">Get Ready</div>
            <div class="font-bold text-xl">Register Sensors</div>
            <div class="mt-4">
              Once you have pulled out your sensor, go to <a href="http://project-hermes.com/">project-hermes.com/quickstart</a> for your quickstart guide.
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row items-center justify-center">
          <img
            src="~/assets/img/how_step_2.png"
            class="object-contain w-3/5 md:w-2/5">
          <div class="w-3/5 md:w-1/5">
            <div class="uppercase font-bold ">Step Two</div>
            <div class="font-eczar text-3xl font-bold my-8">Deploy</div>
            <div class="font-bold text-xl">Go Diving</div>
            <div class="mt-4">
              Now for the fun. Go diving! The sensor can store weeks worth of dives and, once you are back to your dive shop, the data will upload on its own.
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row items-center justify-center">
          <img
            src="~/assets/img/how_step_3.png"
            class="w-3/5 md:w-2/5">
          <div class="w-3/5 md:w-1/5">
            <div class="uppercase font-bold ">Step Three</div>
            <div class="font-eczar text-3xl font-bold my-8">Observe</div>
            <div class="font-bold text-xl">Collect Data and Repeat</div>
            <div class="mt-4">
              Once the cloud has the data you and the greater scientific community can explore it!
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

    <section
      id="quote"
      class="h-96 quote-background bg-no-repeat bg-cover bg-center flex flex-col justify-around items-center">
      <p class="font-eczar text-center text-3xl md:text-4xl text-semibold text-white lg:px-64 xl:px-96">
        "As a marine scientist who works on the urgent issue of climate change I can attest to the fact that collecting this information is of great importance."
      </p>

      <div class="flex flex-col items-center">
        <img
          src="~/assets/img/Line_yellow.svg"
          class="w-16">
        <p class="text-white text-center text-2xl font-semibold my-8">
          Professor Ove Hoegh-Guldberg
        </p>
        <p class="text-white text-center italic">
          Director, Global Change Institute
        </p>
      </div>
    </section>

    <section
      class="h-24" />

    <section
      id="hack"
      class="h-screen-2/3 hack-background bg-no-repeat bg-cover bg-center flex flex-col items-center justify-around">
      <div class="flex-3 md:w-1/2">
        <p class="text-center font-eczar mx-8 sm:mx-12 my-24 md:mx-24 lg:mx-32 text-4xl lg:text-5xl text-yellow font-semibold tracking-wide">Let's Open the Oceans and Hack the Seas.</p>
        <div class="flex flex-col md:flex-row justify-between items-center mb-4">
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~assets/img/photo_coral.png');
  /* background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
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

.font-eczar {
  font-family: 'Eczar', serif;
}
</style>
