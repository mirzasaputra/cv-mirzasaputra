<template>
  <div>
    <nav v-bind:class="['navbar navbar-expand-lg navbar-light bg-light', {'fixed': navbar}]">
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupport"><span class="navbar-toggler-icon"></span></button>

      <div class="navbar-collapse collapse" id="navbarSupport">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="" @click.prevent="scrollToElement('about')" class="nav-link">
              ABOUT
            </a>
          </li>
          <li class="nav-item">
            <a href="" @click.prevent="scrollToElement('resumeMe')" class="nav-link">
              RESUME ME
            </a>
          </li>
          <li class="nav-item">
            <a href="" @click.prevent="scrollToElement('skills')" class="nav-link">
              SKILLS
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container d-flex">

      <div class="header">
        <ul>
          <li>
            <a href="" @click.prevent="about = true;resumeMe = false;gear = false">
              <PhInfo :size="33" weight="thin" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="" @click.prevent="about = false;resumeMe = true;gear = false">
              <PhUser :size="33" weight="thin" />
              <span>Resume Me</span>
            </a>
          </li>
          <li>
            <a href="" @click.prevent="about = false;resumeMe = false;gear = true">
              <PhGear :size="33" weight="thin" />
              <span>Skills</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-12">
        <div class="card started mb-3">
          <div class="profil">
            <div class="sampul">
              <ul class="bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="profil-img">
              <img src="@/assets/img/profil.jpg" class="w-100" alt="">
            </div>
            <div class="title">
              Mirza Dwiyan Saputra
            </div>
            <div class="subtitle">
              <vue-typer :text='["Freelance", "Web Development"]' :repeat="Infinity" :shuffle="false" erase-style="backspace" :erase-delay="70"></vue-typer>
            </div>
            <div class="sosial">
              <i class="fa fa-facebook-official fa-2x px-2"></i>
              <i class="fa fa-whatsapp fa-2x px-2"></i>
              <i class="fa fa-instagram fa-2x px-2"></i>
              <i class="fa fa-youtube-play fa-2x px-2"></i>
            </div>
          </div>
        </div>
      </div>

      <!--About-->
      <div :class="['col-md-6 col-12 content page mb-3 about', {'active': about}]">
        <div class="card">
          <div class="bg">
            <div class="bg1"></div>
            <div class="bg2"></div>
          </div>
          <div class="card-body">
            <h4 class="content-title mb-4">About</h4>
            <div class="row">
              <div class="col-md-6 col-12 text-justify text-white border-right border-top py-3 px-2 white-transparent-left">
                <p>Hello, my name is Mirza Dwiyan Saputra. I am a Web Development living in this beautiful lovely earth.</p>
              </div>
              <div class="col-md-6 col-12 border-bottom white-transparent-right">
                <table class="table text-white">
                  <tr>
                    <td style="border-top: none!important;"><span class="badge badge-about">Age : </span></td>
                    <td class="text-right small" style="border-top: none!important;">18 Years</td>
                  </tr>
                  <tr>
                    <td><span class="badge badge-about">Residence : </span></td>
                    <td class="text-right small">Banyuwangi</td>
                  </tr>
                  <tr>
                    <td><span class="badge badge-about">Addres : </span></td>
                    <td class="text-right small">Rt. 001 Rw. 002, Dusun Krajan, Desa Tembokrejo, Kec. Muncar</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Resume Me-->
      <div :class="['col-md-6 col-12 content default mb-3 resumeMe', {'active': resumeMe}]">
        <div class="card">
          <div class="card-body">
            <h4 class="title"><i class="fa fa-user"></i> Resume Me</h4>
            <hr>
            <table class="table">
              <tr>
                <th class="text-right">Nama Lengkap</th>
                <td>: Mirza Dwiyan Saputra</td>
              </tr>
              <tr>
                <th class="text-right">Nama Panggilan</th>
                <td>: Mirza / Putra</td>
              </tr>
              <tr>
                <th class="text-right">Tempat, Tanggal Lahir</th>
                <td>: Banyuwangi, 22 Juni 2002</td>
              </tr>
              <tr>
                <th class="text-right">Alamat</th>
                <td>: Rt. 001 Rw. 002 Dusun Krajan Desa Tembokrejo Kecamatan Muncar Kabupaten Banyuwangi Provinsi Jawatimur, Kode Pos : 68472</td>
              </tr>
              <tr>
                <th class="text-right">Jenis Kelamin</th>
                <td>: Laki - laki</td>
              </tr>
              <tr>
                <th class="text-right">Status Perkawinan</th>
                <td>: Belum Menikah</td>
              </tr>
              <tr>
                <th class="text-right">Agama</th>
                <td>: Islam</td>
              </tr>
              <tr>
                <th class="text-right">No. Telp</th>
                <td>: 089697635133</td>
              </tr>
              <tr>
                <th class="text-right">E-mail</th>
                <td>: mirzasaputra066@gmail.com</td>
              </tr>
              <tr>
                <th class="text-right">Pendidikan Terkahir</th>
                <td>: SMK 17 Agustus 1945 Muncar, Rekayasa Perangkat Lunak</td>
              </tr>
            </table>
            <br><br>

            <h4><i class="fa fa-graduation-cap"></i> Riwayat Pendidikan</h4>
            <div id="acourdion">
              <a href="" data-toggle="collapse" data-target="#sd">
                <div class="row">
                  <div class="col-md-2 col-2">
                    <img src="@/assets/img/logo-sd.png" alt="logo-sd" class="w-100">
                  </div>
                  <div class="col-10 col-10">
                    <i class="fa fa-chevron-down mt-2 float-right text-dark small"></i>
                    <h5 class="m-0 p-0 text-dark">SDN 5 Tembokrejo</h5>
                    <p class="m-0 p-0 text-muted">2008 - 2014</p>
                  </div>
                </div>
              </a>
              <div id="sd" class="collapse jumbotron py-2 px-3 bg-light" data-parent="#acourdion">
                Pada tahun 2008 saya mulai masuk ke sekolah dasar, karena saya tida tk jadi disini lah masa anak - anak saya dimulai. Disini saya mulai belajar membaca, menulis, menghitung, dan disini juga saya belajar mengenal seseorang yang bisa disebut teman.
              </div>

              <a href="" data-toggle="collapse" data-target="#smp">
                <div class="row">
                  <div class="col-md-2 col-2">
                    <img src="@/assets/img/logo-mts.jpg" alt="logo-smp" class="w-100">
                  </div>
                  <div class="col-md-10 col-10">
                    <i class="fa fa-chevron-down mt-2 float-right text-dark small"></i>
                    <h5 class="m-0 p-0 text-dark">MTs. Sunan Ampel Sumbersewu</h5>
                    <p class="m-0 p-0 text-muted">2014 - 2017</p>
                  </div>
                </div>
              </a>
              <div id="smp" class="collapse jumbotron py-2 px-3 bg-light" data-parent="#acourdion">
                Setelah lulus SD saya pun melanjutkan sekolah ke MTs. Sunan Ampel, karena ini adalah Madrasah jadi disini saya lebih mempelajari dan memperdalan tentang agama.
              </div>

              <a href="" data-toggle="collapse" data-target="#smk">
                <div class="row">
                  <div class="col-md-2 col-2">
                    <img src="@/assets/img/logo-smk.jpeg" alt="" class="w-100">
                  </div>
                  <div class="col-md-10 col-10">
                    <i class="fa fa-chevron-down mt-2 float-right text-dark small"></i>
                    <h5 class="m-0 p-0 text-dark">SMK 17 Agustus 1945 Muncar</h5>
                    <p class="m-0 p-0 text-muted">2017 - 2020</p>
                  </div>
                </div>
              </a>
              <div id="smk" class="collapse jumbotron py-2 px-3 bg-light" data-parent="#acourdion">
                Setelah 3 (tiga) tahun di Madrasah akhirnya saya lulus, lalu saya melanjutkan ke SMK 17 Agustus 1945 Muncar. Saat daftar waktu itu saya hampir saja mengambil jurusan Akuntansi, sampai akhirnya saya berubah pikiran dan mengisi formulir lagi untuk mengambil jurusan Rekayasa Perangkat Lunak, awalnya saya tidak tahu kalau di Rekayasa Perangkat Lunak akan memperlajari tentang bahasa pemrograman, waktu itu saya berfikir hanya ingin bisa menjalankan dan service komputer / laptop saja. Tapi Setelah mengenal pemrograman saya merasa senang saja saat ngoding, dan Disinilah perjalanan coding saya dimulai.
              </div>

              <a href="" data-toggle="collapse" data-target="#poliwangi">
                <div class="row">
                  <div class="col-md-2 col-2">
                    <img src="@/assets/img/logo-poliwangi.png" alt="" class="w-100">
                  </div>
                  <div class="col-md-10 col-10">
                    <i class="fa fa-chevron-down mt-2 float-right text-dark small"></i>
                    <h5 class="m-0 p-0 text-dark">Politeknik Negeri Banyuwangi</h5>
                    <p class="m-0 p-0 text-muted">2020 - Now</p>
                  </div>
                </div>
              </a>
              <div id="poliwangi" class="collapse jumbotron py-2 px-3 bg-light" data-target="#acourdion">
                Setelah lulus dari SMK akhirnya saya memutuskan untuk melanjutkan kuliah di Politeknik Negeri Banyuwangi. Tujuan saya melanjutkan kuliah karena saya ingin memperdalam ilmu saya tentang pemgrograman.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Skills-->
      <div :class="['col-md-6 col-12 content default mb-3 skills', {'active': gear}]">
        <div class="card">
          <div class="card-body">
            <h4 class="title"><i class="fa fa-cogs"></i> Skills</h4>
            <hr>
            <div class="row">
              <div class="col-md-6 text-center mb-3">
                <vue-ellipse-progress :progress="80" dot="10 #864ae6" :gap="10" :half="false" :loading="false" :angle="-90" :thickness="10" emptyThickness="10%" dash="60 0.9" lineMode="in 5" emptyColorFill="#601fc95e" emptyColor="#601fc9" color="#9c5fff">
                  <span slot="legend-value">/100</span>
                  <p slot="legend-caption">CSS</p>
                </vue-ellipse-progress>
              </div>
              <div class="col-md-6 text-center mb-3">
                <vue-ellipse-progress :progress="40" dot="10 #864ae6" :gap="10" :half="false" :loading="false" :angle="-90" :thickness="10" emptyThickness="10%" dash="60 0.9" lineMode="in 5" emptyColorFill="#601fc95e" emptyColor="#601fc9" color="#9c5fff">
                  <span slot="legend-value">/100</span>
                  <p slot="legend-caption">Javascript</p>
                </vue-ellipse-progress>
              </div>
              <div class="col-md-6 text-center mb-3">
                <vue-ellipse-progress :progress="75" dot="10 #864ae6" :gap="10" :half="false" :loading="false" :angle="-90" :thickness="10" emptyThickness="10%" dash="60 0.9" lineMode="in 5" emptyColorFill="#601fc95e" emptyColor="#601fc9" color="#9c5fff">
                  <span slot="legend-value">/100</span>
                  <p slot="legend-caption">PHP</p>
                </vue-ellipse-progress>
              </div>
              <div class="col-md-6 text-center mb-3">
                <vue-ellipse-progress :progress="90" dot="10 #864ae6" :gap="10" :half="false" :loading="false" :angle="-90" :thickness="10" emptyThickness="10%" dash="60 0.9" lineMode="in 5" emptyColorFill="#601fc95e" emptyColor="#601fc9" color="#9c5fff">
                  <span slot="legend-value">/100</span>
                  <p slot="legend-caption">HTML</p>
                </vue-ellipse-progress>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {PhInfo, PhUser, PhGear} from "phosphor-vue";

export default {
  name: "Page",
  data () {
    return {
      about: true,
      resumeMe: false,
      navbar: false,
      gear: false,
    }
  },
  components: {
    PhUser,
    PhInfo,
    PhGear
  },
  methods: {
    scrollToElement(e){
      const el = this.$el.getElementsByClassName(e)[0];

      if(el){
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        this.navbar = true;
      } else {
        this.navbar = false;
      }
    });

    if(window.scrollY > 50){
      this.navbar = true;
    } else {
      this.navbar = false;
    }
  }
};
</script>
