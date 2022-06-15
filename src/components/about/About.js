import React from 'react';
import './about.css'

const App = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <span class="d-block d-lg-none">Amichai Berger</span>
                    <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2"
                        src="assets/img/profile.jpg" alt="" /></span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Projects</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">community service</a></li>
                    </ul>
                </div>
            </nav>
            
            <div class="container-fluid p-0">
               
                <section class="resume-section" id="about">
                    <div class="resume-section-content">
                        <h1 class="mb-0">
                            Amichai
                            <span class="text-primary">Berger</span>
                        </h1>
                        <div class="subheading mb-5">
                            Tzahal 56 · Petach Tikva · <a href="tel:+972543989385">054-3989-385</a> ·
                            <a href="mailto:name@email.com">amichaiberger14@gmail.com</a>
                        </div>
                        <p class="lead mb-5">Fluent bilingual (Hebrew / English) Full Stack Web Developer, with a passion for coding and learning new things. Highly motivated professional with both communication and technical skills. Problem solver and technically adept.</p>
                        <div class="social-icons">
                            <a class="social-icon" href="https://www.linkedin.com/in/amichai-berger-b148401a6/"><i
                                class="fab fa-linkedin-in"></i></a>
                            <a class="social-icon" href="https://github.com/Amichaiz/"><i class="fab fa-github"></i></a>
                            
                            <a class="social-icon" href="https://www.facebook.com/amichai.berger/"><i
                                class="fab fa-facebook-f"></i></a>
                            <a class="social-icon" href="https://www.instagram.com/amichaiberger/"><i
                                class="fab fa-instagram"></i></a>

                        </div>
                    </div>
                </section>
                <hr class="m-0" />
                <section class="resume-section" id="experience">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Experience</h2>
                        
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Full-Stack Developer</h3>
                                <div class="subheading mb-3">TAFNIT AD LTD</div>
                                <p>Create and maintain several websites, discuss requirements with clients, propose solutions,
                                    ensure a pleasant user experience, maintain databases, and perform quality assurance.</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">April 2021 - Present</span></div>
                        </div>


                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Teacher Assistant</h3>
                                <div class="subheading mb-3"><a href="https://www.https://developers.institute/en/">Developers Institute</a></div>
                                <p>Schedule and work with students individually and in small groups to review and reinforce the Curriculum,
                                    complete assignments and improve students overall performance</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">April 2021 - Present</span></div>
                        </div>

                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">video editor</h3>
                                <div class="subheading mb-3">Freelance</div>
                                <p>Edited short movies, weddings Bar and Bat Mitzvas. I used Adobe Premiere.</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">September 2014 - july 2015</span></div>
                        </div>
                    </div>
                </section>
                <hr class="m-0" />
                <section class="resume-section" id="education">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Education</h2>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Developer Institute</h3>
                                <div class="subheading mb-3">Full Stack Coding Bootcamp</div>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">January 2021 - April 2021</span></div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Neve Shmuel High School</h3>
                                <div class="subheading mb-3">Computer Program</div>
                                
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">October 2010 - August 2014</span></div>
                        </div>
                    </div>
                </section>
                <hr class="m-0" />
                <section class="resume-section" id="skills">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Skills</h2>
                        <div class="subheading mb-3">Programming Languages & Frameworks</div>
                        <ul class="list-inline dev-icons">
                            <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                            <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                            <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                            <li class="list-inline-item"><i class="fab fa-php"></i></li>
                            <li class="list-inline-item"><i class="fab fa-react"></i></li>
                            <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                            <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                            <li class="list-inline-item"><i class="fas fa-database"></i></li>
                        </ul>
                    </div>
                </section>
                <hr class="m-0" />
                <section class="resume-section" id="interests">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Projects</h2>
                        <p><a href="https://amichaiz.github.io/currency/" target="_blank" rel='noreferrer'>Currency Converter</a> Using an API and simple Math conditions to convert Money by current rates.</p>
                        <p><a href="https://amichaiz.github.io/snake/" target="_blank" rel='noreferrer'>Snake Game</a> Build during my first Hackathon in Developers Institute.</p>
                        <p><a href="https://boat-prime.herokuapp.com/" target="_blank" rel='noreferrer'>Boat Prime</a> Final Project in Developers Institute. Created a basic platform for selling/purchasing boats. Includes- npm server, database created in React</p>

                    </div>
                </section>
                <hr class="m-0" />
                <section class="resume-section" id="awards">
                    <div class="resume-section-content">
                        <h2 class="mb-5">community service</h2>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Yedidim Badrachim</h3>
                                <p>I take part in a volunteer group that helps people who have car trouble while traveling.</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">April 2020 - Current</span></div>
                        </div>
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="container">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="img/yedid2.jpg" alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="img/yedid1.jpeg" alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="img/shabat1.jpg" alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>


                        <br />
                        <div class="d-flex flex-column flex-md-row justify-content-between">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Gemach Avi-Shai</h3>
                                <p>I was a project manager and was incharge of distribution of 250 food packages to people in need on a weekly basis, managed logistics to match the distributors with those in need.</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">March 2015 - March 2016</span></div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}
export default App