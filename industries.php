<?php include('header.php') ?>

<head>
  <title>Industries - Datawise Consultancy Services</title>
  
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  
  <meta name="description" content="Datawise Consultancy Services provides specialized data management and cloud platform solutions tailored for Healthcare, Public Sector, Retail, and Finance industries. Leverage our expertise to drive innovation and efficiency in your industry.">
  <meta name="keywords" content="Healthcare Solutions, Public Sector Solutions, Retail Industry Solutions, Finance Solutions, Data Management for Healthcare, Cloud Services for Public Sector, Retail Cloud Solutions, Financial Data Management, Industry-Specific Consulting, Datawise Consultancy Services">

</head>
<body class="industries-page">
<main id="main" class="pro-page">

    <!-- ======= Hero-2 ======= -->
    <div class="hero-wrap" id="hero-sec">
        <div class="glow-orb orb1"></div>
        <div class="glow-orb orb2"></div>
        <div class="glow-orb orb3"></div>
        <canvas class="hero-canvas" id="c"></canvas>

        <div class="hero-content">
          <h1 class="hero-title">
            <span>Industries </span>
          </h1>
          <p class="hero-sub">
            Explore our range of Industries.
          </p>
        </div>
    </div>
    <!-- End Hero-2 -->

    <!-- ===================================================
         INTRO
    ==================================================== -->
    <section class="pro-section pro-intro-2">
      <div class="container pro-container">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center pro-fade">
            <div class="pro-label">
              Industry Expertise
            </div>
            <h2 class="pro-title">
              Industry-Focused Digital<br>
              Transformation Solutions
            </h2>
            <p class="pro-text">
              Datawise Consultancy Services provides industry-driven digital transformation solutions tailored to modern business challenges. Our expertise across enterprise systems, cloud technologies, and database management enables organisations to streamline operations, improve efficiency, and scale with confidence.
            </p>
            <p class="pro-text">
              From finance and retail to healthcare and the public sector, we help businesses modernise legacy systems, optimise workflows, and leverage technology to create measurable business impact.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================
         INDUSTRIES GRID
    ==================================================== -->
    <section class="pro-section pro-industries" id="industries">
      <div class="container">
        <div class="pro-grid">
          <!-- Finance -->
          <div class="pro-card pro-fade" data-aos="fade-up" id="finance">
            <img src="assets/img/background/industries/finance.webp" alt="Finance image">
            <div class="pro-overlay">
              <div class="pro-content">
                <div class="pro-number">01</div>
                <span class="pro-tag">
                  Financial Services
                </span>
                <div class="pro-line"></div>
                <h2 class="pro-card-title">
                  Finance
                </h2>
                <p class="pro-card-text">
                  Successfully balance innovation, risk and compliance with DCS's solutions and services for finance sector organisations.
                </p>
              </div>
            </div>
          </div>

          <!-- Retail -->
          <div class="pro-card pro-fade" data-aos="fade-up" id="retail">
            <img src="assets/img/background/industries/retail.webp" alt="Retail image">
            <div class="pro-overlay">
              <div class="pro-content">
                <div class="pro-number">02</div>
                <span class="pro-tag">
                  Retail & Commerce
                </span>
                <div class="pro-line"></div>
                <h2 class="pro-card-title">
                  Retail
                </h2>
                <p class="pro-card-text">
                  Optimise the way you work and put your customers at the centre of your operations with DCS's solutions and services, designed to help retailers stay competitive in a challenging market.
                </p>
              </div>
            </div>
          </div>

          <!-- Healthcare -->
          <div class="pro-card pro-fade" data-aos="fade-up" id="healthcare">
            <img src="assets/img/background/industries/healthcare.webp" alt="Healthcare image">
            <div class="pro-overlay">
              <div class="pro-content">
                <div class="pro-number">03</div>
                <span class="pro-tag">
                  Healthcare Systems
                </span>
                <div class="pro-line"></div>
                <h2 class="pro-card-title">
                  Healthcare
                </h2>
                <p class="pro-card-text">
                  If you're looking for database solutions for Healthcare, due to our extensive Oracle and Microsoft expertise, DCS is in the ideal position to advise, implement, and support organisations in all-things-database.
                </p>
              </div>
            </div>
          </div>

          <!-- Public Sector -->
          <div class="pro-card pro-fade" data-aos="fade-up" id="public-sector">
            <img src="assets/img/background/industries/public-sector.webp" alt="public-sector image">
            <div class="pro-overlay">
              <div class="pro-content">
                <div class="pro-number">04</div>
                <span class="pro-tag">
                  Government & Public Services
                </span>
                <div class="pro-line"></div>
                <h2 class="pro-card-title">
                  Public Sector
                </h2>
                <p class="pro-card-text">
                  DCS offers digital solutions to overcome the challenges of antiquated legacy systems, skills shortfalls and under-utilised data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================
         CTA SECTION
    ==================================================== -->
    <section class="pro-section pro-cta">
      <div class="row g-0">
        <div class="col-lg-4" data-aos="fade-right" data-aos-offset="100">
          <img src="assets/img/background/dboracle.webp" alt="DBoracle image" class="img-fluid">
        </div>
        <div class="col-lg-8 pro-cta-content d-flex align-items-center" data-aos="fade-left" data-aos-offset="100">
          <div>
            <h2 class="pro-cta-title">
              Join Our Team and Be Part of Something Extraordinary!
            </h2>
            <h3 class="pro-cta-subtitle">
              Unlock Your Potential and Join Our Team of Innovators, Where Collaboration and Expertise Drive Excellence Across Our Comprehensive Range of Services.
            </h3>
            <a href="contact-datawise-consultancy-services" class="pro-btn scrollto">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>

</main>
</body>

<script>
(function(){

  var observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

      if(entry.isIntersecting){
        entry.target.classList.add('pro-visible');
      }

    });

  },{ threshold:0.08 });

  document.querySelectorAll('.pro-fade').forEach(function(el){
    observer.observe(el);
  });

})();
</script>

<?php include('footer.php') ?>