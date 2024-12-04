import{P as s}from"./ProjectInfoComponent-CEWoEkAq.js";import{d as l,a as r,e as c,o as d,c as h,f as p,w as n,p as g,g as u,b as e,h as a}from"./index-Us7-eWUa.js";const m=l({name:"DactylManuformProject",components:{ProjectInfo:s}}),f="/assets/13_full-lightup-complete-1KqS6Njj.jpg",w="/assets/00_pcb-base-DefJsgOU.jpg",_="/assets/01_base-pcb-in-case-CohFS_dT.jpg",y="/assets/02_data-wire-complete-SKmI7DGN.jpg",b="/assets/03_all-wiring-complete-C_UBKkqW.jpg",k="/assets/04_microcontroller-added-B7pCmwT4.jpg",j="/assets/06_rgb-ligth-back-CkcLT7pj.jpg",D="/assets/07_rgb-light-front-D4tqFUKI.jpg",M="/assets/12_screen-added-TQClo4Pz.jpg",B="/assets/08_grey-wiring-complete-CZR1E9KA.jpg",C="/assets/09_both-sides-rgb-DUcLwffk.jpg",v="/assets/14_back-view-grey-CS2ov6ee.jpg",t=i=>(g("data-v-3fdae57f"),i=i(),u(),i),E=t(()=>e("p",null,[a(" This project details the construction of a handwired Dactyl Manuform keyboard. The build features RGB lighting, a 3D-printed case, and a small LED display for real-time status updates. The firmware is powered by "),e("a",{href:"https://qmk.fm",target:"_blank"},"QMK"),a(", enabling customization of keymaps, layers, and lighting effects. ")],-1)),T=t(()=>e("img",{class:"project-image",src:f,alt:"Fully lit keyboard with all features enabled"},null,-1)),L=t(()=>e("section",null,[e("h2",null,"Materials Used"),e("ul",null,[e("li",null,"3D-printed Dactyl Manuform case (STL files available online)"),e("li",null,"Mechanical key switches (e.g., Gateron, Cherry MX)"),e("li",null,"Keycaps"),e("li",null,"Microcontroller (Pro Micro or Elite-C)"),e("li",null,"WS2812 RGB LED strips"),e("li",null,"1N4148 diodes (one per switch)"),e("li",null,"Solid core wires"),e("li",null,"Soldering iron and solder"),e("li",null,"Multimeter"),e("li",null,"LED display")])],-1)),G=t(()=>e("section",null,[e("h2",null,"Overview"),e("p",null," After browsing online for a cheap split keyboard, I got fed up with the lack of low cost options. Eventually I decided to build my own. This project is the result of that decision. It took me around 40 hours of work total from parts to functioning keyboard. There were a number of challenges I ran into with this project. ")],-1)),I=t(()=>e("section",null,[e("h2",null,"Build Process"),e("h3",null,"1. Wiring the PCB"),e("img",{class:"project-image",src:w,alt:"PCB base for the Dactyl Manuform keyboard"}),e("p",null," The first step was preparing the PCB and connecting the necessary data lines. Keeping the wiring clean was essential for debugging and assembly. "),e("img",{class:"project-image",src:_,alt:"PCB placed inside the keyboard case"}),e("img",{class:"project-image",src:y,alt:"Data wire connections complete"}),e("h3",null,"2. Completing All Wiring"),e("p",null," After the data lines, all wiring was added to connect switches, LEDs, and the microcontroller. Soldering each connection carefully helped avoid shorts and ensured reliable performance. "),e("img",{class:"project-image",src:b,alt:"All wiring complete for the keyboard"}),e("h3",null,"3. Microcontroller Installation"),e("p",null," The microcontroller was added and connected to the wiring. Verifying connections with a multimeter ensured there were no errors. "),e("img",{class:"project-image",src:k,alt:"Microcontroller added to the setup"}),e("h3",null,"4. RGB Lighting Setup"),e("p",null," RGB LED strips were installed on both sides of the keyboard. Testing the wiring at this stage prevented any lighting inconsistencies. "),e("img",{class:"project-image",src:j,alt:"Back view of RGB lighting installation"}),e("img",{class:"project-image",src:D,alt:"Front view of RGB lighting installation"}),e("h3",null,"5. Finishing Touches"),e("p",null," After wiring the keyboard matrix and LED strips, the LED display was added to show real-time keyboard layers and modifiers. The final assembly included aligning all components and verifying functionality. "),e("img",{class:"project-image",src:M,alt:"LED screen added to display keyboard status"})],-1)),S=t(()=>e("section",null,[e("h2",null,"Challenges"),e("h3",null,"1. Wiring Complexity"),e("p",null," Ensuring all wires were neatly routed and connected without overlapping or shorting was a challenge. Using solid core wires helped maintain order. "),e("img",{class:"project-image",src:B,alt:"Wiring completed, showing organized layout"}),e("h3",null,"2. RGB Data Chain Mapping"),e("p",null," Wiring the RGB LED data chain required precise planning. Misconnections resulted in incomplete lighting or flickering effects. "),e("img",{class:"project-image",src:C,alt:"RGB setup on both sides of the keyboard"}),e("h3",null,"3. Software Configuration"),e("p",null," Mapping the keyboard layout and LED effects in QMK firmware took some time. Reading through the documentation and testing configurations resolved issues. ")],-1)),R=t(()=>e("section",null,[e("h2",null,"Final Build"),e("p",null," The completed Dactyl Manuform keyboard features an ergonomic layout, customizable RGB lighting, and a functional LED display. This project demonstrates how hardware customization can enhance user experience. "),e("img",{class:"project-image",src:v,alt:"Back view of the completed keyboard"})],-1)),P=t(()=>e("section",null,[e("h2",null,"Challenges Faced (and Conquered!)"),e("h3",null,"1. RGB Data Chain Mapping"),e("p",null," Mapping out the RGB data chain felt like planning a heist. Every LED had to connect in the right order, or the lighting would glitch. A detailed diagram saved me from LED chaos. "),e("h3",null,"2. Defining the LED Matrix"),e("p",null," Translating physical key positions to software? Easier said than done. Defining the LED matrix in QMK meant aligning the virtual map with the real world—precision was key. "),e("h3",null,"3. Tracking Down Shorts"),e("p",null," Tiny wires, tiny solder points, big headaches. I ran into shorts more times than I’d like to admit. Testing each key with a multimeter became a ritual, but it paid off. "),e("h3",null,"4. QMK Configuration Madness"),e("p",null," Configuring QMK for RGB and power settings felt like learning a new language. There’s no shortcut—reading the docs and trial-and-error got me there. Worth it. "),e("h3",null,"5. Microcontroller Wire Chaos"),e("p",null," So. Many. Wires. Getting everything soldered to the microcontroller without turning it into spaghetti required patience and a good labeling system. "),e("h3",null,"6. Mastering the LED Display"),e("p",null," Getting the LED display to show layers and modifiers was a puzzle. But after diving deep into the docs, it’s like having a live status monitor. No more guessing which layer I'm on! ")],-1));function K(i,x,W,q,z,A){const o=c("ProjectInfo");return d(),h("div",null,[p(o,{projectTitle:"Dactyl Manuform Build",githubLink:"https://github.com/98774/qmk_firmware.git"},{summary:n(()=>[E]),"detailed-description":n(()=>[T,L,G,I,S,R,P]),_:1})])}const Q=r(m,[["render",K],["__scopeId","data-v-3fdae57f"]]);export{Q as default};
