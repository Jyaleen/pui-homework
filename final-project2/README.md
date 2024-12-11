
# **FP4 \- Final Project Writeup**

## Part 1: Website Description

Describe your website (300 words).

What is the purpose of your website?   
* The purpose of my website is to create a playful and interactive experience that combines typography and visual art. It allows users to explore words in a dynamic way, as they can change the visual aspects of them in real-time. It's not just about displaying words, but also inviting people to engage with them in a fun, tactile way. They can either opt out of inputting their own words and just interact with the website without customization, or they can personalize the content by adding their own words. 

Who is the target audience?
* The target audience is anyone who enjoys interactive digital experiences. This could be artists, designers, students, or casual internet users who like to experiment with technology and visual design. It's also appealing to people with an interest in typography and abstract visuals. Because it is a simple website, it's accessible to users of all ages, making it a broad and diverse audience.

What information do you convey with your website?
* The website demonstrates that words aren't just tools for communication, but can also be dynamic and be visually interesting, too. By combining interactivity and customization, I'm hoping to push users to rethink how they engage with text, making words feel alive.

How is it interesting and engaging?
* It's engaging because it constantly evolves. Every second, a new word appears, creating a sense of anticipation. Users can reshape the words with their mouse movements and keyboard selections, which makes user interaction tactile and personal. All four quadrants--large and close together, small and close together, large and scattered, and small and scattered--have different visual appeals to them that are fun to see. Also, being able to change the opacity with keyboard inputs offers 9 different ways to experience each 4 quadrants. Also, the option to input their own words keeps the experience fresh and unique. The bubble-like aesthetic adds and element of whimsy, adding to the delight of using the website. 


## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Interaction type. Click on X on page Y / scroll on page X, etc.  
2. Hover. Hover over buttons to see a dropshadow indicating you are hovering over it.
3. Input Field. Input your own list of words into the input field in the directions page. 
4. Click. Double click anywhere on the directions page to start the animation if you do not input your own list of words.
5. Click. Click on the "view directions" button to see a pop-up modal of the directions in the words animation page. 
6. Mouseover. Move mouse along X-axis to change how scattered the dots are.
7. Mouseover. Move mouse along Y-axis to change how small and uniform the dots are.
8. Keyboard. Press keys 1-9 to change the opacity of the dots.
8. Keyboard. Press the space bar to change between grayscale and colorscale. (1 on the colorscale should be pink, 9 on the colorscale should be dark gray. 1 on the grayscale should be white, 9 on the grayscale should be dark gray.)

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. p5.js
  * Why did you choose to use it over other alternatives? (2 sentences max)  
  
    I chose p5.js because it simplifies creating interactive and visually engaging web experiences, especially with animations, which is exactly what I envisioned for my project. It also has a fairly beginner-friendly syntax and thorough documentation, which made it ideal for this project.
  
   * How you used it? (2 sentences max)  

      I used p5.js to generate and animate the dot words, making them dynamically reshape based on mouse movement. It also handled the timing for displaying new words.
   
   * What does it add to your website? (2 sentences max)

      p5.js adds a layer of interactivity and smooth animations, making the experience visually appealing and engaging, and enhances user immersion. It is the behind the main functionality of the website. 


  

## Part 4: Design Iteration

#### Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

Originally, I had planned to create my portfolio website, but as I progressed with it, I realized that I was forcing interactions into it just to meet the rubric requirements, which made the design feel unnatural. After some reflection, I decided to completely pivot to a different approach, and create an interaction-first website. This shift ended up leading to my interactive words website, where interaction and playfulness took center stage.

The biggest change was moving away from a structured, informational design to something more experimental and freeform. This allowed me to focus on creating a dynamic and engaging experience rather than trying to shoehorn interactions into a portfolio format. The new design gave me the freedom to explore animations, user inputs, and creative interactions, which resulted in a project that was much more exciting to build.

## Part 5: Implementation Challenge

#### What challenges did you experience in implementing your website? (2-4 sentences max)

One major challenge was figuring out how to incorporate two different fonts to support both English and Chinese characters (the font I wanted to use didn't support Chinese characters, so I had to choose a separate font for Chinese), and ensure that each font only "saw" the respective languages while still maintaining consistent functionality. 

Another challenge was implementing functionality for users to input their own words, as p5.js did not have much documentation on this, even though it was such simple functionality. I ended up relying on YouTube videos for this.

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Claude | Usage | No | No | Yes | No | -- |
| Claude | Productivity | N/A | N/A | 5-6 | N/A | -- |



### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. N/A

* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Claude

      I did not expect to use Claude in my initial plan. In fact, I didn't even know what Claude was. However, I had to download Claude for another class (UCRE) to conduct research about bias in genAI. After that, I have pretty much replaced my normal ChatGPT usage with Claude. For this project, I only used Claude once to learn how to split a single array entry into multiple entries, as I could not find help on Stack Overflow. The entry is shown below in the usage log.

* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. GitHub Copilot

      I did not end up using Copilot. I don't have it downloaded yet, so it just never really crossed my mind to use it, even though I had initially planned to download and use it if I got stuck.

    
  2. ChatGPT

      Originally, I planned to use ChatGPT to generate content for my case studies. I didn't end up implementing a portfolio for my project, so I never ended up using ChatGPT.


> Use patterns
* I accepted a generation when I realized it was correct and helped my code function how I envisioned it to.
  1. Claude: I asked it to tell me how to break up a single array entry into multiple entries. It gave me three different methods. I tried the first method and it worked. 


> Pros and cons of using GenAI tools
* Pros
  1. Claude: it seemed to understand pretty clearly what I was asking it to do. It even gave multiple options for me to try, each with different use case scenarios that it detailed for me.
* Cons
  1. Claude: it was so easy to get an answer from Claude. This is part of the reason why I have been so hesitant to use genAI. It was so easy to get a clear and concise answer, and if I begin to abuse the access I have, I'm afraid I won't actually do any real work anymore. Thus, I only used genAI when I truly could not find any other answers elsewhere.


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. Claude doesn't have a way to share chat histories yet. I have attached a screenshot instead:

![claude chat prompt/history](images/claude-chat.png)


## Appendix

Screenshots from WAVE:

Directions screen:
![WAVE summary of directions page](images/directions-page-summary.png)
![WAVE details of directions page](images/directions-page-details.png)

Words screen:
![WAVE summary of words page](images/words-screen-summary.png)
![WAVE detauils of words page](images/words-screen-details.png)



---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- At this stage in my project, I'm beginning to implement the basic HTML foundations for my portfolio. I think I am still planning to use React.

## Generative AI Use Plan Updates

- There are no updates in my genAI use plan.

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

# **FP2 \- Evaluation of the Final project**

## Project Description

For my project, I'm planning to create a personal UX/UI portfolio website to showcase case studies. My motivation for this is because I want a space where I can show the projects I have worked on. I already have a portfolio, but this project will give me an opportunity to explore a new design direction. 


## High-Fi Prototypes

### *Prototype 1*

![Homepage](images/fp2-prototype1.png)

Some of the actionable feedback I got regarding the homepage prototype was that the current hero is too simple and not particularly memorable, and adding something more visually interesting would be helpful (the fish is interesting, but there is nothing dynamic). Also, displaying only one case study per horizontal line might cause excessive scrolling if I am planning to add many projects. I also got feedback to consider incorporating a serifed font, since I am currently using two sans serifs. 


### *Prototype 2*

![Ology](images/fp2-prototype2.png)

The actionable feedback I got on the Ology case study page was that the subheadings might be too subtle because they are gray, and that I should consider making them more prominent so they are easily noticeable. Also, instead of static images, I could consider inforporating GIFs or live prototypes to show designs in action. Also, a user wondered if there was a more dynamic way to break up the different sections of my case study, rather than simply using horizontal lines, which might seem a bit boring.


## Usability Test

The process for my user testing went as follows: I gave them an overview of my project, as well as what I hoped for my portfolio to achieve. Then, I asked them to click through the screens I had, and think aloud while doing so, giving any feedback that comes to mind.

The feedback I got during the evaluation was that:

1.  The screens are too simple and not particularly memorable. Adding unique visual elements could enhance memorability.
2. Consider incorporating a serif font to pair with your current sans-serif, adding contrast and visual interest. A mix of serif and sans-serif fonts could work well instead of using two sans-serif options.
3. Displaying only one case study per horizontal line might cause excessive scrolling if you have many projects. Explore alternative layouts to minimize this.
4. Replace the name "Ology”, etc. with a short tagline or descriptive phrase to immediately inform viewers about the project's nature.
5. The subheadings might be too subtle; consider making them more prominent so they are easily noticeable and contribute to the structure.
6. Instead of static images, consider incorporating GIFs or live prototypes to bring your case studies to life and show your designs in action.

I think that all of these points of feedback are actionable, though I haven't been able to explore all of them just yet. I did play around with different serif fonts, however, and I think I will continue down that path.

## Updated Designs

In the following screen, I explored possible serif font options that would look good with the sans serif fonts I had chosen. I ended up deciding on Playfield Display, and I replaced some of my headings with it. I also replaced the gray subheadings for "The Problem" and "The Solution" with a different style, which I think lowers its visual importance. The feedback I had received was that the gray subheadings were *too* gray and thus people's eyes glossed over it, but that is what I want — it is secondary information, and what they should be focusing on is the main section heading. So, to make it less obvious that this is something to be read, I made it more inconspicuous, so that users don't perceive that they are missing any information if they don't read it.

![Ology](images/fp2-updated-design.png)

## Feedback Summary

The two points of feedback I got from the lab session were that I should explore how to make my project more interactable, and an idea someone had was to make the first in my hero section follow the cursor, which I thought was a really clever idea. The feedback made me consider how an interactive design might encourage users to actively explore the content rather than just passively scroll through it.

A suggestion brought up by another classmate after hearing the first point of feedback, which I really liekd, was to make the fish element in my home hero section follow the cursor. I think that would be a really fun interaction to have. This idea inspired me to further explore how to add subtle, responsive animations that would allow users to feel a sense of direct connection with my portfolio. It would help make my portfolio feel more playful, which is what I want, and would draw users in right from the start. I don't love micro-interactions, but this idea encouraged me to consider adding some to create a cohesive interactive experience.


## Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester (\~300 words). 

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  
- [X] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [X] Explore JS libraries

- [ ] Week 11 Nov 11 \- Nov 15:  
  - [ ] Work on homepage
  - [ ] Revisit case study hi-fis to determine if I want to change anything before beginning development
    - [ ] Potentially more user testing

- [ ] Week 12 Nov 18 \- Nov 22:   
  - [ ] Work on first case study page
  - [ ] Work on second case study page

- [ ] Week 13 Nov 25 \- Nov 29:  
  - [ ] Work on third case study page
  - [ ] Thanksgiving  

- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] Finishing touches
  - [ ] FP4 due 

### *Libraries and Other Components*

* React.js


## Generative AI Use Plan

I might use GenAI to come up with filler content for my portfolio case studies if I have not written them yet. I don't think I will be using much GenAI for the coding aspect of this project, since I only have access to ChatGPT, and I think ChatGPT is still lacking in the coding department. 

### *Tool Use*

* ChatGPT  
  * I will use it for writing content to go in my case studies because it can help me save time and finish this project on time, and I can go back and edit the content later on when I have more time.  
  * I will not use it for coding because it might not be able to help me with getting correct, clean code.
* GitHub Copilot  
  * I will use it for leading me in certain coding directions because it can help with determining the best next course of action
  * I will not use it blindly because Copilot doesn't know what I envision for the end product; only I do.

### *Responsible Use*

I will use genAI responsibly by making sure it doesn't dictate any of my design or coding decisions; genAI should be used as a helping hand, not a crutch. I might ask genAI for feedback regarding my existing code and if I can make it cleaner, or for ideas on making it more accessible, but I will never ask genAI to actually generate my code for me. If I do make changes based on feedback I received from genAI, I will document it in my code. I'm also responsible for the accuracy of the information given to me by genAI that I do choose to incorporate into my project. 


-- --


# FP1 - Proposal for Critique

### Idea 1: Portfolio 
![Portfolio](images/idea1.png)
The basic idea of my first final project idea is to create a personal UX/UI portfolio website. I plan to make this design interactive by incorporating  scroll-based animations and micro-interactions. To ensure accessibility, I'll use semantic HTML, design for screenreaders, add descriptive alt text, choose colors that contrast well with each other, incorporate scalable text, and overall aim to adhere to WCAG guidelines. I want to include case studies, my work experience, skills and tools, and a biography in this website. 

### Idea 2: Revamping Childhood Website
![Revamping childhood site](images/idea2.png)
My second project idea is to revamp a website/blog my mom made when I was a kid where she uploaded photos and wrote diary entries throughout my childhood, primarily for family to visit. I plan to make my design interactive and engaging by incorporating micro-interactions and animations. I will use semantic HTML, design for screenreaders, add descriptive alt text, choose colors that contrast well with each other, incorporate scalable text, and overall aim to adhere to WCAG guidelines in order to ensure accessibility. I will include pictures and diary entries in my website, as well as the functionality to add new ones.

### Idea 3: Personal Restaurant Rating/Tracking 
![Personal restaurant rating/tracking](images/idea3.png)
My third project idea is to create a personal restaurant tracking/rating website, kind of like Letterboxd with no other users, but for food. I will make my design interactive and engaging by including a customizable rating system, dynamic review summaries, and including interactive maps. Like my previous two ideas, I will use semantic HTML, design for screenreaders, add descriptive alt text, choose colors that contrast well with each other, incorporate scalable text, and overall aim to adhere to WCAG guidelines in order to ensure accessibility. The information I want to convey is the restaurant and menu, the location, my thoughts, and videos and photos I upload.

## Feedback Summary
Almost all the feedback I received were directed at Idea 2 and 3. I mentioned that I was unsure about Idea 2, as since I would be designing for primarily older people who is not a digital native, I feared I would not have much room for exploration, and that I'd be limited to following existing heuristics and best-practicecs for designing for an older audience. However, someone mentioned that it was actually a really good opportunity to explore designing for aging, and that it's a really interesting constraint to work with, and that there's always room for innovation. He wondered if it could be something similar to how Apple's Photos app makes "For You" photo memory compilations. People also mentioned how it would be an opportunity to integrate a maps API and geo-locate memories. 

As for Idea 3, I got a tip to look more into the Beli app, which is very similar to what I want to do, albeit only offered as a mobile app and is not supported as a website/desktop app. A really interesting idea someone came up with was to explore hover interactions; with restaurants I log, I would be able to hover over a restaurant card, and be able to see the photos/videos I took. 


## Feedback Digestion
Moving forward, I plan to focus on Idea 3 and integrate hover interactions, as they can make the interface feel more responsive and visually appealing without overwhelming the user with content. This approach also distinguishes my project from Beli and other mobile-only options, since I can leverage web-only interactions. I will also explore the Beli app's design to understand its strengths and limitations, which will help me refine my user experience to stand out.

As for Idea 2, I recognize the potential in designing for an aging audience and will keep it as a future project, but I want to prioritize Idea 3, which offers more design freedom and aligns better with the kind of interactive experience I envision. I also think I want to keep my chidhood site as it exists right now!

