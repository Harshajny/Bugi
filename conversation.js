 
  
const chat = {
    1: {
        text: 'Hi! Welcome I am Bugi,an website chat bot!',
        options: [
          {
                text: "<strong>Save the intro for another day pls!!</strong>",
                next: 9
            },
            {
                text: '👋',
                next: 2

            }
           

        ]
    },
     9: {
         
        text: 'Oh okey,what help shall I do for you ?',
        options:[
            {
                 text :"<strong>More about this website</strong>",
                url:"https://harshajny.github.io/WIT-/"

            },
            {
                text:"<strong>More about its developers</strong>",
                url:"https://harshajny.github.io/WIT-/"
 
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
                 next:5
 
            },
 ]},
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
                next: 4
            }
        ]
    },
    4: {
         
        text: 'Awesome,what help shall I do for you ?',
        options:[
            {
                 text :"<strong>More about this website</strong>",
                url:"https://harshajny.github.io/WIT-/"

            },
            {
                text:"<strong>More about its developers</strong>",
                url:"https://harshajny.github.io/WIT-/"
 
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
                 next:5
 
            },
 ]},
 5: {
        text: 'Check more about me in github',
        options: [
            {
                text: "Go to GitHub",
                url: "https://github.com/bugi/bugi"
            },
           
                {
                    text: "No thanks",
                    next:6
                }

        ]
    },
    6:{
        text: 'Did you like me?',
        options: [
            {
                text: "Yes! u r amazing",
                next:7
            },
           
                {
                    text: "Yes! But there is more to be added to u ",
                    next:7
                }

        ]
    },
    7:
    {
        text:'Thank You, Have a Nice Day',
        options: [
            {
                text: "yes!!!",
                next:8
                 
            },
           
                {
                    text: "You too ",
                    next:8
                     
                }

        ]
    },

    8:
    {text:'Byebye!!'}
    }
    
