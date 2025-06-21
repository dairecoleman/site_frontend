# 🌥️ Cloud Resume Challenge + Portfolio Site

This code is for my personal static website I host on AWS. You can visit it at [https://www.dairecoleman.ca/](url)

This project is inspired by the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/), a 16-step hands-on initiative designed to bridge the gap from cloud certification to a real-world cloud/devops role. I chose it as the primary project to introduce myself to public cloud and experiment with any and all skills and tasks used in cloud development.

I've gone a bit further — this site also serves as my personal portfolio, showcasing my **resume**, **projects**, and **passions** (like coding, game development, fitness & toast 🍞).

---

## 🔧 Tech Stack/Features

- **HTML5 + SCSS + JavaScript**
  - Based on [HTML5 UP’s Forty template](https://html5up.net/forty)
  - Clean UI, responsive design
- **Static Website Hosting**
  - Hosted with **AWS Amplify**
  - Also supports S3 static site hosting ([Docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html))
- **CI/CD - Automated Deployment**
  - Automated upload of s3 object and app deployment on change to main branch
  - See workflow 'upload_and_deploy_changes.yml' in .github/workflows
- **Site Contact Form**
  - AWS lambda function awaits call of javascript contact form on site via API Gateway.
  - Lambda triggers AWS SES email to be sent with gathered information.
