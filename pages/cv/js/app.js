$(document).ready(function() {
    var elFlag = $('#flag');
    const dict = {

        "pt-br": {
            "titDoc": "Curriculum Vitae de João Augusto Casagrande",

            "nameDesc": "Desenvolvedor Backend",

            "perfilTit": "Perfil",
            "perfilDesc": `Me oriento para resolução das demandas que me competem, e por
        isso, trabalho muito bem em equipe e consigo me manter focado
        por longos períodos. Me adapto com facilidade tanto a ambientes
        com mais formalidade quanto aos mais informais. Sou curioso e
        gosto de aprender coisas novas, entender seu funcionamento e
        investir em soluções práticas e criativas. Me identifico fortemente
        com a área e por isso minha dedicação profissional é um grande
        gerador de realização pessoal para mim.`,

            "expTit": "Experiências Profissionais",
            "expDesc": `
                <article>
                    <h2>DEV. BACKEND/AEVO</h2>
                    <p class="subDetails">Setembro de 2020 - Atual</p>
                    <p>Estagiário atuando no desenvolvimento de rotas, correções de bugs e novas funcionalidades.</p>
                </article>

                <article>
                    <h2>DEV. BACKEND/SATO JÚNIOR TRADING</h2>
                    <p class="subDetails">Abril de 2020 - Junho de 2020</p>
                    <p>Auxílio no desenvolvimento de uma SPA utilizando o framework Vue.js e banco de dados relacional.</p>
                </article>

                <article>
                    <h2>DEV. FULLSTACK/DELTATRADER</h2>
                    <p class="subDetails">Outubro de 2019 - Abril de 2020</p>
                    <p>Desenvolvimento de plataforma web no modelo MVC em Node.js utilizando banco de dados relacional.</p>
                </article>

                <article>
                    <h2>GESTOR DE DADOS/LABGEST</h2>
                    <p class="subDetails">Dezembro de 2018 - Setembro de 2019</p>
                    <p>Utilização de softwares de BI para gerenciamento de repositórios de dados, datalakes e banco de dados relacional.</p>
                </article>
                `,

            "habTit": "Habilidades",

            "educTit": "Formação",
            "educDesc": `
            <article>
                <h2>Instituto Federal do Espírito Santo (IFES)</h2>
                <p class="subDetails">SISTEMAS DE INFORMAÇÃO</p>
                <p>Conclusão prevista para 2022</p>
            </article>
            `
        },
        "en-us": {
            "titDoc": "João Augusto Casagrande's Curriculum",

            "nameDesc": "Backend Developer",

            "perfilTit": "Profile",
            "perfilDesc": `I focus on solving the demands that compete with me, and that's why I work very well as a team and manage to stay focused for long periods. I adapt easily to both more formal environments and more informal ones. I'm curious and like to learn new things, understand how they work and invest in practical and creative solutions. I strongly identify with the area and that is why my professional dedication is a great generator of personal fulfillment for me.`,

            "expTit": "Professional Experiences",
            "expDesc": `
                <article>
                    <h2>BACKEND DEVELOPER/AEVO</h2>
                    <p class="subDetails">September 2020 - Current</p>
                    <p>Development of new routes, functionalities and bug fixes.</p>
                </article>

                <article>
                    <h2>BACKEND DEVELOPER/SATO JÚNIOR  TRADING</h2>
                    <p class="subDetails">April 2020 - June 2020</p>
                    <p>Support on the development of a SPA application using Vue.js framework and MySQL.</p>
                </article>

                <article>
                    <h2>FULLSTACK DEVELOPER/DELTATRADER</h2>
                    <p class="subDetails">October 2019 - April 2020</p>
                    <p>Development of a web plataform using Node.js and MySQL in the MVC pattern.</p>
                </article>
                <article>
                    <h2>DATA MANAGER/LABGEST</h2>
                    <p class="subDetails">December 2018 - September 2019</p>
                    <p>Use of BI to manage data repositories, datalakes and relational databases.</p>
                </article>
        
                        
        
                        
                        
                    `,

            "habTit": "Skills",

            "educTit": "Education",
            "educDesc": `
                <article>
                    <h2>Federal Institute of Espírito Santo (IFES)</h2>
                    <p class="subDetails">INFORMATION SYSTEMS</p>
                    <p>Completion planned for 2022</p>
                </article>
                `
        }
    }

    setLang("pt-br");


    elFlag.click(function() {
        elFlag.toggleClass("floatTranslate floatTranslateToggle")
        var actual = elFlag.attr('title');
        if (actual.includes("brasileiro")) setLang("pt-br");
        else setLang("en-us");

        // var actual = elFlag.html();
        // if (actual.includes("brazil")) setLang("pt-br");
        // else setLang("en-us");
    });


    function setLang(lang) {

        if (lang == "pt-br") {
            elFlag.attr('title', 'Read in English');

        }
        if (lang == "en-us") {
            elFlag.attr('title', 'Ler em português brasileiro');
        }

        // if (lang == "pt-br") elFlag.html("<img width='100px' height='60px' title='Read in english' src='imgs/usa.png' alt='Flag USA'></img>");
        // if (lang == "en-us") elFlag.html("<img width='100px' height='60px' title='Ler em português brasileiro' src='imgs/brazil.png' alt='Flag Brazil'></img>");
        loadDict(lang);
        loadSkills(lang);

    }

    function loadDict(lang) {
        var keys = ["titDoc", "nameDesc", "perfilTit", "perfilDesc", "expTit", "expDesc", "habTit", "educTit", "educDesc"];

        var langDict = dict[lang];

        keys.forEach(key => {
            var elActual = document.getElementById(key);
            elActual.innerHTML = langDict[key].toString();
        });

    }

    function loadSkills(lang) {
        var levelMap = {
            "beginner": {
                "displayPt": "Básico",
                "displayEn": "Basic",
                "tipPt": '"Você pode lidar com as características básicas do programa, mas você não pode fazer truques complicados ou solucionar problemas ainda."',
                "tipEn": '"You can handle the basic features of the program, but you can’t do complicated tricks or troubleshoot problems yet."'
            },

            "medium": {
                "displayPt": "Médio",
                "displayEn": "Medium",
                "tipPt": '"Você também pode solucionar problemas e fazer alguns truques sofisticados. Mas você pode precisar pesquisar algumas funções no Google ou perguntar em fóruns de vez em quando."',
                "tipEn": '"You can also troubleshoot and do some fancy tricks. But you might need to Google some functions or ask in forums from time to time."'
            },

            "advanced": {
                "displayPt": "Avançado",
                "displayEn": "Advanced",
                "tipPt": '"Você ainda não é um especialista, mas pode lidar com funções avançadas e solucionar problemas examinando as coisas por conta própria. Você não precisa de um manual."',
                "tipEn": '"You’re not yet an expert, but you can handle advanced functions and troubleshoot problems by examining things on your own. You don’t need a manual."'
            },

            "expert": {
                "displayPt": "Especialista",
                "displayEn": "Expert",
                "tipPt": '"Você conhece o programa como a palma da sua mão. Você conhece recursos obscuros, truques e problemas estranhos, tanto que outras pessoas costumam vir até você em busca de ajuda."',
                "tipEn": '"You know the program like the back of your hand. You know of obscure features, tricks, and weird problems, so much so that other people often come to you for help."'
            }
        }


        var skills = [{
                "namePt": "Inglês",
                "nameEn": "English",
                "level": "advanced"
            },
            {
                "namePt": "Javascript",
                "nameEn": "Javascript",
                "level": "medium"
            },
            {
                "namePt": "SQL",
                "nameEn": "SQL",
                "level": "medium"
            },
            {
                "namePt": "Vue.js",
                "nameEn": "Vue.js",
                "level": "beginner"
            },
            {
                "namePt": "Bootstrap",
                "nameEn": "Bootstrap",
                "level": "medium"
            },
            {
                "namePt": "CSS",
                "nameEn": "CSS",
                "level": "beginner"
            },
            {
                "namePt": "C#",
                "nameEn": "C#",
                "level": "medium"
            },
            {
                "namePt": "Angular",
                "nameEn": "Angular",
                "level": "medium"
            }
        ];

        var className = "";
        var display = "";
        var skillName = "";
        var tip = "";

        var html = "";


        skills.forEach(skill => {

            className = skill.level;
            skillName = lang == "pt-br" ? skill.namePt : skill.nameEn;
            display = lang == "pt-br" ? levelMap[skill.level].displayPt : levelMap[skill.level].displayEn;
            tip = lang == "pt-br" ? levelMap[skill.level].tipPt : levelMap[skill.level].tipEn;

            var template = `
        <div class="container">
            <span class='skillName'> ${skillName} </span>
            <div title='${tip}' class="container-bar">
                <div class="skills ${className}">${display}</div>
            </div>
        </div>`;

            html += template;

        });

        $('#habDesc').html(html);

    }

})
