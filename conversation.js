 
const chat = {
    1: {
        text: 'Hi! Welcome I am Bugi,an website chat bot!',
        options: [
            {
                text: '👋',
                next: 2
            }
        ]
    },
    2: {
        text: 'Bugi is a <em>really simple</em>, choice-driven chatbot framework made in <del>less than</del> just over 100 lines of vanilla JavaScript',
        next: 3
    },
    3: {
        text: 'But you probably knew that anyway.',
        options: [
            {
                text: "<strong>Yes</strong>, I did!",
                next: 4
            },
            {
                text: "<strong>Nope</strong>, this is news.",
                next: 5
            }
        ]
    },
    4: {
         
        text: 'Awesome,what help shall I do for you ?',
        options:[
            {
                 text :"<strong>More about this website</strong>",
                url:"https://github.com/Harshajny/Bugi.git"

            },
            {
                text:"<strong>More about its developers</strong>",
                url:"https://harshajny.github.io/She-Hacks/"
 
            },
            {
                text:"<strong>How to be part of WIT activites?</strong>",
url:"https://discord.com/invite/bWmgn3f"
            },
            {
                text:"<strong>I want a coffee</strong>",
                url:"https://www.zomato.com/bakeries-near-me"
 
            },
            {
                text:"<strong>None of these!!</strong>",
                 next:9
 
            },
 ]},
 9: {
        text: 'Check more about me in github',
        options: [
            {
                text: "Go to GitHub",
                url: "https://github.com/bugi/bugi"
            },
           
                {
                    text: "No thanks",
                    next:10
                }

        ]
    },
    10:{
        text: 'Did you like me?',
        options: [
            {
                text: "Yes! u r amazing",
                next:11
            },
           
                {
                    text: "Yes! But there is more to be added to u ",
                    next:11
                }

        ]
    },
    11:
    {
        text:'Thank You, Have a Nice Day',
        options: [
            {
                text: "yes!!!",
                next:12
                 
            },
           
                {
                    text: "You too ",
                    next:12
                     
                }

        ]
    },
    12:
    {text:'Byebye!!'}
    }
    
