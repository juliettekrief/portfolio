/** 
fonction de modulo, (celle native de JS marche pas avec les négatifs donc on en a besoin d'une custom)
**/
const modulo = (x, m) => {
    return (x % m + m) % m;
  }
  // slide de départ. 
  // En JS, les tableaux commencent à 0

  // AJOUTER AUTANT DE ZÉRO QUE DE NB DE SLIDER
  const current = [0,0,0];
  // on récupère les différents élements pour l'interactivité.

  const aboutBtn = document.querySelector(".about");
  const logoBtn = document.querySelector(".logo");
  const about = document.querySelector(".about-wrapper");
  const body = document.querySelector(".body");
  // slider 1
  const previousFirst = document.querySelector(".previous-first");
  const nextFirst = document.querySelector(".next-first");
  const slidesFirst = document.querySelectorAll(".s-first");
  const stepFirst = document.querySelector(".step-first");
  const bulletFirst = document.querySelectorAll(".bar-first")
  // slider 2
  const previousSecond = document.querySelector(".previous-second");
  const nextSecond = document.querySelector(".next-second");
  const slidesSecond = document.querySelectorAll(".s-second");
  const stepSecond = document.querySelector(".step-second");
  const bulletSecond = document.querySelectorAll(".bar-second")
  // slider 3
  const previousThird = document.querySelector(".previous-third");
  const nextThird = document.querySelector(".next-third");
  const slidesThird = document.querySelectorAll(".s-third");
  const stepThird = document.querySelector(".step-third");
  const bulletThird = document.querySelectorAll(".bar-third")
  // petite fonction pour aller d'avant en arrière. 
  const go = (delta, slider, step, bullet, indexArr) => {
  // la slide actuelle a la classe .visible -> on la lui enlève
   slider[current[indexArr]].classList.toggle("visible");
   bullet[current[indexArr]].classList.toggle("selected");

  // on défini le nouvel index pour la current slide
  // modulo permet de rester dans l'intervalle [0, nombre de slide]
  current[indexArr] = modulo(current[indexArr]+delta, slider.length);
  updateStep(slider, current[indexArr], step);
  // on assigne la classe .visible à la nouvelle current
  slider[current[indexArr]].classList.toggle("visible");
  bullet[current[indexArr]].classList.toggle("selected"); 

  };
  const updateStep = (slider, index, step) => {
    const max = slider.length;
    step.innerText = `${index +1}/${max}`
  }
  const getDestination = (index, slider, step, bullet, indexArr) => {
      const diff = index - current[indexArr];
      go(diff, slider, step, bullet, indexArr);
  }

  const toggleAbout = () => {
    body.classList.toggle("about-open")
  }

  const closeAbout = () => {
    body.classList.remove("about-open")
  }

  aboutBtn.addEventListener("click", () => toggleAbout());
  logoBtn.addEventListener("click", () => closeAbout());

  // slider 1
  previousFirst.addEventListener("click", () => go(-1, slidesFirst, stepFirst, bulletFirst, 0));
  nextFirst.addEventListener("click", () => go(1, slidesFirst, stepFirst, bulletFirst, 0));
  // slider 2
  previousSecond.addEventListener("click", () => go(-1, slidesSecond, stepSecond, bulletSecond, 1));
  nextSecond.addEventListener("click", () => go(1, slidesSecond, stepSecond, bulletSecond, 1));
  // slider 3
  previousThird.addEventListener("click", () => go(-1, slidesThird, stepThird, bulletThird, 2));
  nextThird.addEventListener("click", () => go(1, slidesThird, stepThird, bulletThird, 2));
  
   // slider 1 (à dupliquer pour chaque slider de bullet point)
for (let index = 0; index < bulletFirst.length; index++) {
    const element = bulletFirst[index];
    element.addEventListener("click", () => getDestination(index, slidesFirst, stepFirst, bulletFirst, 0))
    
}
   // slider 2
for (let index = 0; index < bulletSecond.length; index++) {
    const element = bulletSecond[index];
    element.addEventListener("click", () => getDestination(index, slidesSecond, stepSecond, bulletSecond, 1))
    
}

    // slider 3
for (let index = 0; index < bulletThird.length; index++) {
    const element = bulletThird[index];
    element.addEventListener("click", () => getDestination(index, slidesThird, stepThird, bulletThird, 2))
    
}