
<img width="2307" height="333" alt="image" src="https://github.com/user-attachments/assets/d341d0b9-1bb2-4b98-b97f-10bd63a11422" />

This website is extremely overengineered for a personal website, but it serves as a good introduction to the AWS tech stack. Cloudfront serves static React files, which calls an API Gateway, starting a lambda function that retrieves project data from dynamoDB. The projects are then displayed dynamically on the website. You can visit it at aidenzhang.dev or www.aidenzhang.dev.

If you go to aidenzhang.dev porkbun (where I purchased the domain) has to do a redirect to www.aidenzhang.dev since porkbun doesnt support calling cloudfront to the root url. Unfortunetly this means that going to aidenzhang.dev is kind of slow. I'm trying to figure that out still.
