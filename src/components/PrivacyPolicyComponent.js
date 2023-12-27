import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const PrivacyPolicy = () => {
  const Title = [
    {
      Number: "1.",
      Text: " Where this privacy policy applies",
    },
    {
      Number: "2.",
      Text: " Information we collect",
    },
    {
      Number: "3.",
      Text: " Other information with your consent",
    },
    {
      Number: "4.",
      Text: " Cookies and other similar data collection technologies",
    },
    {
      Number: "5.",
      Text: " How we use information",
    },
    {
      Number: "6.",
      Text: " How we share information",
    },
    {
      Number: "7.",
      Text: " Cross-border data transfers",
    },
    {
      Number: "8.",
      Text: " Your rights",
    },
    {
      Number: "9.",
      Text: " Residents of California",
    },
    {
      Number: "10.",
      Text: " How we protect your information",
    },
    {
      Number: "11.",
      Text: " How long we retain your information",
    },
    {
      Number: "12.",
      Text: " Children's Privacy",
    },
    {
      Number: "13.",
      Text: " Privacy policy changes",
    },
    {
      Number: "14.",
      Text: " How to Contact us",
    },
  ];
  const Information = [
    {
      text: "When you create an account, you provide us with at least your phone number and login credentials, as well as some basic details necessary for the service to work, such as your gender and date of birth.",
    },
    {
      text: "When you complete your profile, you can share with us additional information about you, as well as content such as photos and videos. To add certain content, like pictures or videos, you may allow us to access your camera or photo album. Some of the information you choose to provide us may be considered “special” or “sensitive” in certain jurisdictions, for example your racial or ethnic origins, sexual orientation and religious beliefs. By choosing to provide this information, you consent to our processing of that information.",
    },
    {
      text: "When you subscribe to a paid service or make a purchase directly from us (rather than through a platform such as iOS or Android), you provide us or our payment service provider with information, such as your debit or credit card number or other financial information.",
    },
    {
      text: "When you participate in surveys or focus groups, you give us your insights into our products and services, responses to our questions and testimonials.",
    },
    {
      text: "When you choose to participate in our promotions, events or contests, we collect the information that you use to register or enter.",
    },
    {
      text: "If you contact our customer care team, we collect the information you give us during the interaction. Sometimes, we monitor or record these interactions for training purposes and to ensure a high quality of service.",
    },
    {
      text: "If you ask us to communicate with or otherwise process information of other people (for example, if you ask us to send an email on your behalf to one of your friends), we collect the information about others that you give us in order to complete your request.",
    },
    {
      text: "Of course, we also process your chats with other users as well as the content you publish, as part of the operation of the services.",
    },
  ];
  const QuestionElement = [
    {
      Question: "Other Users",
      Answere:
        "Other users may provide information about you as they use our services. For instance, we may collect information about you from other users if they Contact us about you.",
    },
    {
      Question: "Social Media",
      Answere:
        "You may be able to use your social media login (such as Facebook Login or VK Login) to create and log into your Futurest account. This saves you from having to remember yet another user name and password and allows you to share some information from your social media account with us.",
    },
    {
      Question: "Other Partners",
      Answere:
        "You may be able to use your social media login (such as Facebook Login or VK Login) to create and log into your Futurest account. This saves you from having to remember yet another user name and password and allows you to share some information from your social media account with us. \n We may receive info about you from our partners, for instance where Futurest ads are published on a partner’s websites and platforms (in which case they may pass along details on a campaign’s success).",
    },
    {
      Question: "Information collected when you use our services",
      Answere:
        "When you use our services, we collect information about which features you’ve used, how you’ve used them and the devices you use to access our services. See below for more details:",
    },
    {
      Question: "Usage Information",
      Answere:
        "We collect information about your activity on our services, for instance how you use them (e.g., date and time you logged in, features you’ve been using, searches, clicks and pages which have been shown to you, referring webpage address, advertising that you click on) and how you interact with other users (e.g., users you connect and interact with, time and date of your exchanges, number of messages you send and receive).",
    },
    {
      Question: "Device information",
      Answere:
        "We collect information from and about the device(s) you use to access our services, including: hardware and software information such as IP address, device ID and type, device-specific and apps settings and characteristics, app crashes, advertising IDs (such as Google’s AAID and Apple's IDFA, both of which are randomly generated numbers that you can reset by going into your device’ settings), browser type, version and language, operating system, time zones, identifiers associated with cookies or other technologies that may uniquely identify your device or browser (e.g., IMEI/UDID and MAC address); information on your wireless and mobile network connection, like your service provider and signal strength; information on device sensors such as accelerometers, gyroscopes and compasses.",
    },
  ];
  const Element = [
    {
      header: "To administer your account and provide our services to you:",
      paragraph: "Create and manage your account",
      paragraph1:
        "Provide you with customer support and respond to your requests Complete your transactions",
      paragraph2:
        "Communicate with you about our services, including order management and billing",
    },
    {
      header: "To help you connect with other users:",
      paragraph:
        "Analyze your profile, activity on the service, and preferences to recommend meaningful connections to you and recommend you to others.",
      paragraph1:
        "Show users’ profiles to one another To ensure a consistent experience across your devices",
      paragraph2:
        "Link the various devices you use so that you can enjoy a consistent experience of our services on all of them. We do this by linking devices and browser data, such as when you log into your account on different devices or by using partial or full IP address, browser version and similar data about your devices to help identify and link them.",
      paragraph3: "To provide new Futurest services to you",
      paragraph4:
        "Register you and display your profile on new Futurest features and apps Administer your account on these new features and apps",
    },
    {
      header: "To serve you relevant offers and ads:",
      paragraph: "Administer sweepstakes, contests, discounts or other offers",
      paragraph1:
        "Develop, display and track content and advertising tailored to your interests on our services and other sites",
      paragraph2:
        "Communicate with you by email, phone, social media or mobile device about products or services that we think may interest you",
    },
    {
      header: "To improve our services and develop new ones:",
      paragraph: "Administer focus groups and surveys",
      paragraph1:
        "Conduct research and analysis of users’ behavior to improve our services and content (for instance, we may decide to change the look and feel or even substantially modify a given feature based on users’ behavior)",
      paragraph2:
        "Develop new features and services (for example, we may decide to build a new interests-based feature further to requests received from users).",
    },
    {
      header:
        "To prevent, detect and fight fraud or other illegal or unauthorized activities:",
      paragraph: "Address ongoing or alleged misbehavior on and off-platform",
      paragraph1:
        "Perform data analysis to better understand and design countermeasures against these activities",
      paragraph2:
        "Retain data related to fraudulent activities to prevent against recurrences",
    },
    {
      header: "To ensure legal compliance:",
      paragraph: "Comply with legal requirements",
      paragraph1: "Assist law enforcement",
      paragraph2: "Enforce or exercise our rights, for example our Terms",
    },
    {
      header:
        "To process your information as described above, we rely on the following legal bases:",
      paragraph:
        "Provide our service to you: Most of the time, the reason we process your information is to perform the contract that you have with us. For instance, as you go about using our service to build meaningful connections, we use your information to maintain your account and your profile, to make it viewable to other users and recommend other users to you.",
      paragraph1:
        "Legitimate interests: We may use your information where we have legitimate interests to do so. For instance, we analyze users’ behavior on our services to continuously improve our offerings, we suggest offers we think might interest you, and we process information for administrative, fraud detection and other legal purposes.",
      paragraph2:
        "Consent: From time to time, we may ask for your consent to use your information for certain specific reasons. You may withdraw your consent at any time by contacting us at the address provided at the end of this Privacy Policy.",
    },
  ];
  const TitleElement = [
    {
      text: "With other users",
      par: "You share information with other users when you voluntarily disclose information on the service (including your public profile). Please be careful with your information and make sure that the content you share is stuff that you’re comfortable being publically viewable since neither you nor we can control what others do with your information once you share it. \n If you choose to limit the audience for all or part of your profile or for certain content or information about you, then it will be visible according to your settings.",
    },
    {
      text: "With our service providers and partners",
      par: "We use third parties to help us operate and improve our services. These third parties assist us with various tasks, including data hosting and maintenance, analytics, customer care, marketing, advertising, payment processing and security operations. \n We may also share information with partners who distribute and assist us in advertising our services. For instance, we may share limited information on you in hashed, non-human readable form to advertising partners. \n We follow a strict vetting process prior to engaging any service provider or working with any partner. All of our service providers and partners must agree to strict confidentiality obligations. For corporate transactions \n We may transfer your information if we are involved, whether in whole or in part, in a merger, sale, acquisition, divestiture, restructuring, reorganization, dissolution, bankruptcy or other change of ownership or control.",
    },
    {
      text: "When required by law",
      par: "We may disclose your information if reasonably necessary: (i) to comply with a legal process, such as a court order, subpoena or search warrant, government / law enforcement investigation or other legal requirements; (ii) to assist in the prevention or detection of crime (subject in each case to applicable law); or (iii) to protect the safety of any person.",
    },
    {
      text: "To enforce legal rights",
      par: "We may also share information: (i) if disclosure would mitigate our liability in an actual or threatened lawsuit; (ii) as necessary to protect our legal rights and legal rights of our users, business partners or other interested parties; (iii) to enforce our agreements with you; and to investigate, prevent, or take other action regarding illegal activity, suspected fraud or other wrongdoing.",
    },
    {
      text: "With your consent or at your request",
      par: "We may ask for your consent to share your information with third parties. In any such case, we will make it clear why we want to share the information. We may use and share non-personal information (meaning information that, by itself, does not identify who you are such as device information, general demographics, general behavioral data, geolocation in de-identified form), as well as personal information in hashed, non-human readable form, under any of the above circumstances. We may also share this information with other Futurest and third parties (notably advertisers) to develop and deliver targeted advertising on our services and on websites or applications of third parties, and to analyze and report on advertising you see. We may combine this information with additional non-personal information or personal information in hashed, non- human readable form collected from other sources. More information on our use of cookies and similar technologies can be found in our Cookie Policy.",
    },
  ];
  const Text = [
    {
      header:
        "We want you to be in control of your information, so we have provided you with the following tools:",
      paragraph:
        "Access / Update tools in the service. Tools and account settings that help you to access, rectify or delete information that you provided to us and that’s associated with your account directly within the service.",
      paragraph1:
        "Device permissions. Mobile platforms have permission systems for specific types of device data and notifications, such as phone book and location services as well as push notifications. You can change your settings on your device to either consent or oppose the collection of the corresponding information or the display of the corresponding notifications. Of course, if you do that, certain services may lose full functionality.",
      paragraph2:
        "Deletion. You can delete your account by using the corresponding functionality directly on the service.",
    },
    {
      header:
        "We want you to be aware of your privacy rights. Here are a few key points to remember:",
      paragraph:
        "Reviewing your information. Applicable privacy laws may give you the right to review the personal information we keep about you (depending on the jurisdiction, this may be called right of access, right of portability or variations of those terms).",
      paragraph1:
        "Updating your information. If you believe that the information, we hold about you is inaccurate or that we are no longer entitled to use it and want to request its rectification, deletion or object to its processing.",
    },
    {
      header:
        "For your protection and the protection of all of our users, we may ask you to provide proof of identity before we can answer the above requests.",
    },
    {
      header:
        "Keep in mind, we may reject requests for certain reasons, including if the request is unlawful or if it may infringe on trade secrets or intellectual property or the privacy of another user. If you wish to receive information relating to another user, such as a copy of any messages you received from him or her through our service, the other user will have to contact our Privacy Officer to provide their written consent before the information is released.",
    },
    {
      header:
        "Also, we may not be able to accommodate certain requests to object to the processing of personal information, notably where such requests would not allow us to provide our service to you anymore. For instance, we cannot provide our service if we do not have your date of birth.",
    },
    {
      header:
        "Uninstall. You can stop all information collection by an app by uninstalling it using the standard uninstall process for your device. If you uninstall the app from your mobile device, the unique identifier associated with your device will continue to be stored. If you re-install the application on the same mobile device, we will be able to re-associate this identifier to your previous transactions and activities.",
    },
    {
      header:
        "Accountability. In certain countries, including in the European Union, you have a right to lodge a complaint with the appropriate data protection authority if you have concerns about how we process your personal information. The data protection authority you can lodge a complaint with notably may be that of your habitual residence, where you work or where we are established.",
    },
  ];
  const TextElement = [
    {
      header:
        "We work hard to protect you from unauthorized access to or alteration, disclosure or destruction of your personal information. As with all technology companies, although we take steps to secure your information, we do not promise, and you should not expect, that your personal information will always remain secure.",
    },
    {
      header:
        "We regularly monitor our systems for possible vulnerabilities and attacks and regularly review our information collection, storage and processing practices to update our physical, technical and organizational security measures.",
    },
    {
      header:
        "We may suspend your use of all or part of the services without notice if we suspect or detect any breach of security. If you believe that your account or information is no longer secure, please notify us immediately.",
    },
    {
      header:
        "In order to ensure that our systems and your information are protected against unauthorized access, theft and loss, we implemented a bug bounty program.",
    },
  ];
  const ElementText = [
    {
      header:
        "In practice, we delete or anonymize your information upon deletion of your account (following the safety retention window) or after two years of continuous inactivity, unless:",
      item: "we must keep it to comply with applicable law (for instance, some “traffic data” is kept for one year to comply with statutory data retention obligations);",
      item1:
        "we must keep it to evidence our compliance with applicable law (for instance, records of consents to our Terms, Privacy Policy and other similar consents are kept for five years);",
      item2:
        "there is an outstanding issue, claim or dispute requiring us to keep the relevant information until it is resolved;",
      item3:
        "or the information must be kept for our legitimate business interests, such as fraud prevention and enhancing users' safety and security. For example,information may need to be kept to prevent a user who was banned for unsafe behavior or security incidents from opening a new account.",
    },
  ];
  const Document = [
    {
      header:
        "Content will not be deleted within 90 days of the account deletion or content deletion process beginning in the following situations:",
      text: `where your content has been used by others in accordance with this license and they have not deleted it (in which case this license will continue to apply until that content is deleted); or where deletion within 90 days is not possible due to technical limitations of our systems, in which case, we will complete the deletion as soon as technically feasible; or where deletion would restrict our ability to: investigate or identify illegal activity or violations of our terms and policies (for example, to identify or investigate misuse of our products or systems); protect the safety and security of our products, systems, and users; comply with a legal obligation, such as the preservation of evidence; or comply with a request of a judicial or administrative authority, law enforcement or a government agency; in which case, the content will be retained for no longer than is necessary for the purposes for which it has been retained (the exact duration will vary on a case-by-case basis).\n If you delete or we disable your account, these Terms shall terminate as an agreement between you and us, but this section and the section below called \n Our Agreement and What Happens if We Disagree" will still apply even after your account is terminated, disabled, or deleted. Who Has Rights Under this Agreement.\n This agreement does not give rights to any third parties. You cannot transfer your rights or obligations under this agreement without our consent. Our rights and obligations can be assigned to others. For example, this could occur if our ownership changes (as in a merger, acquisition, or sale of assets) or by law.`,
    },
    {
      header: "Who Is Responsible if Something Happens.",
      text: `Our Service is provided "as is," and we can't guarantee it will be safe and secure or will work perfectly all the time. TO THE EXTENT PERMITTED BY LAW, WE ALSO DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.\n We also don’t control what people and others do or say, and we aren’t responsible for their (or your) actions or conduct (whether online or offline) or content (including unlawful or objectionable content). We also aren’t responsible for services and features offered by other people or companies, even if you access them through our Service. \n Our responsibility for anything that happens on the Service (also called "liability") is limited as much as the law will allow. If there is an issue with our Service, we can't know what all the possible impacts might be. You agree that we won't be responsible ("liable") for any lost profits, revenues, information, or data, or consequential, special, indirect, exemplary, punitive, or incidental damages arising out of or related to these Terms, even if we know they are possible. This includes when we delete your content, information, or account.`,
    },
    {
      header: "How We Will Handle Disputes.",
      text: `If you are a consumer, the laws of the country in which you reside will apply to any claim, cause of action, or dispute you have against us that arises out of or relates to these Terms ("claim"), and you may resolve your claim in any competent court in that country that has jurisdiction over the claim. Unsolicited Material. \n We always appreciate feedback or other suggestions, but may use them without any restrictions or obligation to compensate you for them, and are under no obligation to keep them confidential.`,
    },
    {
      header: "Updating These Terms",
      text: "We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account.",
    },
  ];
  const DocumentElement = [
    {
      header:
        "Content will not be deleted within 90 days of the account deletion or content deletion process beginning in the following situations:",
      text: `where your content has been used by others in accordance with this license and they have not deleted it (in which case this license will continue to apply until that content is deleted); or where deletion within 90 days is not possible due to technical limitations of our systems, in which case, we will complete the deletion as soon as technically feasible; or where deletion would restrict our ability to: investigate or identify illegal activity or violations of our terms and policies (for example, to identify or investigate misuse of our products or systems); protect the safety and security of our products, systems, and users; comply with a legal obligation, such as the preservation of evidence; or comply with a request of a judicial or administrative authority, law enforcement or a government agency; in which case, the content will be retained for no longer than is necessary for the purposes for which it has been retained (the exact duration will vary on a case-by-case basis).\n
        If you delete or we disable your account, these Terms shall terminate as an agreement between you and us, but this section and the section below called "Our Agreement and What Happens if We Disagree" will still apply even after your account is terminated, disabled, or deleted.`,
    },
    {
      header: "Who Has Rights Under this Agreement.",
      text: `This agreement does not give rights to any third parties.\n
        You cannot transfer your rights or obligations under this agreement without our consent.\n
        Our rights and obligations can be assigned to others. For example, this could occur if our ownership changes (as in a merger, acquisition, or sale of assets) or by law.`,
    },
    {
      header: "Who Is Responsible if Something Happens.",
      text: `Our Service is provided "as is," and we can't guarantee it will be safe and secure or will work perfectly all the time. TO THE EXTENT PERMITTED BY LAW, WE ALSO DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        We also don’t control what people and others do or say, and we aren’t responsible for their (or your) actions or conduct (whether online or offline) or content (including unlawful or objectionable content). We also aren’t responsible for services and features offered by other people or companies, even if you access them through our Service.\n
        Our responsibility for anything that happens on the Service (also called "liability") is limited as much as the law will allow. If there is an issue with our Service, we can't know what all the possible impacts might be. You agree that we won't be responsible ("liable") for any lost profits, revenues, information, or data, or consequential, special, indirect, exemplary, punitive, or incidental damages arising out of or related to these Terms, even if we know they are possible. This includes when we delete your content, information, or account.`,
    },
    {
      header: "How We Will Handle Disputes.",
      text: `If you are a consumer, the laws of the country in which you reside will apply to any claim, cause of action, or dispute you have against us that arises out of or relates to these Terms ("claim"), and you may resolve your claim in any competent court in that country that has jurisdiction over the claim. Unsolicited Material. \n We always appreciate feedback or other suggestions, but may use them without any restrictions or obligation to compensate you for them, and are under no obligation to keep them confidential.`,
    },
    {
      header: "Updating These Terms",
      text: "We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account, here.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="container-p">
      <div>
        <div className="px-[7vw] py-[4vh] rules-text-container">
          <h1 className="text-[6.111vw] text-[var(--button-text-orange)] font-[900] leading-[50px] rules-h1">
            PRIVACY POLICY
          </h1>
          <h3 className="text-[3.889vw] text-[#999] font-[900] my-[4vh] rules-text">
            Oh, those boring legal things nobody likes to read, except you, for
            some odd reason.
          </h3>
          <p className="text-[1.528vw] text-[#fff] font-[400] rules-update">
            Last Updated:
            <span className="text-[1.528vw] font-[100] opacity-[0.6] rules-update">
              &nbsp;08.10.2023
            </span>
          </p>
        </div>
        <div className="px-[7vw] py-[4vh] rules-text-container">
          <div className="flex flex-col justify-start w-[59.236vw] privacy-container-size">
            <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
              Okay let’s start 👋
            </h1>
            <p className="text-[1.667vw] text-[#999] font-[400] py-[40px] privacy-paragraph">
              Welcome to Futurest’s Privacy Policy. Thank you for taking the
              time to read it. This Policy describes our privacy practices in
              plain language, keeping legal and technical jargon to a minimum.
              This Privacy Policy applies beginning December 1, 2021.
            </p>
          </div>
          <div className="w-[59.236vw] privacy-container-size">
            {Title.map((item) => (
              <div key={item.Number} className="flex">
                <div className="text-[1.667vw] text-[#fff] font-[600] privacy-sections-map">
                  {item.Number}
                </div>
                <div className="text-[1.667vw] text-[#fff] font-[600] privacy-sections-map">
                  {item.Text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="px-[7vw] py-[4vh] rules-text-container">
            <h1 className="text-[3.889vw] text-[#FFAD72] font-[900]  privacy-title">
              1. Where this privacy policy applies 🏷️
            </h1>
            <p className="text-[1.667vw] text-[#999] font-[400] w-[59.236vw] pt-[40px] privacy-container-size privacy-paragraph">
              This Privacy Policy applies to websites, apps, events and other
              services operated by Futurest. For simplicity, we refer to all of
              these as our “services” in this Privacy Policy. To make it extra
              clear, we’ve added links to this Privacy Policy on all applicable
              services. <br />
              Some services may require their own unique privacy policy. If a
              particular service has its own privacy policy, then that policy --
              not this Privacy Policy -- applies.
            </p>
          </div>
        </div>
        <div>
          <div className="px-[7vw] py-[4vh] rules-text-container">
            <div>
              <h1 className="text-[3.889vw] text-[#FFAD72] font-[900]  privacy-title">
                2. Information we collect 🗂️
              </h1>
              <p className="text-[1.667vw] text-[#999] font-[400] w-[59.236vw] pt-[40px] privacy-container-size privacy-paragraph">
                It goes without saying, we can’t help you develop meaningful
                connections without some information about you such as basic
                profile details. We also collect information generated as you
                use our services, for example access logs, as well as
                information from third parties, like when you access our
                services through a social media account. If you want additional
                info, we go into more detail below.
              </p>
              <p className="text-[2.222vw] text-[#fff] font-[900] py-[40px] privacy-title">
                Information you give us
              </p>
            </div>
            <div>
              <div>
                <p className="text-[1.667vw] text-[#fff] font-[400] pb-[40px] privacy-container-size privacy-paragraph">
                  You choose to give us certain information when using our
                  services. This includes:
                </p>
              </div>
              <div className="w-[59.236vw] privacy-container-size">
                <ul className="pl-[2vw] mb-[40px] privacy-ul-padding">
                  {Information.map((info, index) => (
                    <li
                      key={index}
                      className="text-[1.667vw] text-[#fff] font-[400] privacy-container-size privacy-paragraph list-disc py-[5px]"
                    >
                      {info.text}
                    </li>
                  ))}
                </ul>
                <p className="text-[2.222vw] text-[#fff] font-[900] privacy-title-big">
                  Information we receive from others
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-[7vw] py-[4vh] rules-text-container">
            <div className="mb-[40px]">
              <h1 className="text-[3.889vw] text-[#FFAD72] font-[700] privacy-title">
                In addition to the information you provide us directly, we
                receive information about you from others, including: 📣
              </h1>
            </div>
            <div>
              {QuestionElement.map((item, index) => (
                <div key={index}>
                  <div
                    className="w-full flex justify-between gap-[32px] items-center py-[32px] border-t-[1px] border-[#FFF3EA] cursor-pointer privacy-element-padding"
                    onClick={() => toggleQuestion(index)}
                  >
                    <p className="text-[#fff] text-[18px] font-[900] questionElement-h1 privacy-title">
                      {item.Question}
                    </p>
                    <div className="text-[#fff] text-[32px] flex justify-center items-center">
                      {openIndex === index ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="text-[#aaa] mb-[32px] text-[16px] font-[400] privacy-sections-map privacy-paragraph-margin w-[59.236vw] privacy-container-size">
                      {item.Answere.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="px-[7vw] py-[4vh] rules-text-container">
            <div className="mb-[40px]">
              <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                3. Other information with your consent ⬇️
              </h1>
            </div>
            <div>
              <p className="text-[1.667vw] text-[#999] font-[400] privacy-paragraph  w-[59.236vw] privacy-container-size">
                If you give us permission, we can collect your precise
                geolocation (latitude and longitude) through various means,
                depending on the service and device you’re using, including GPS,
                Bluetooth or Wi-Fi connections. The collection of your
                geolocation may occur in the background even when you aren’t
                using the services if the permission you gave us expressly
                permits such collection. If you decline permission for us to
                collect your geolocation, we will not collect it. Similarly, if
                you consent, we may collect your photos and videos (for
                instance, if you want to publish a photo, video or streaming on
                the services).
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-[7vw] py-[4vh] rules-text-container">
            <div className="mb-[40px]">
              <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                4. Cookies and other similar data collection technologies 🍪
              </h1>
            </div>
            <div>
              <p className="text-[1.667vw] text-[#999] font-[400] privacy-paragraph  w-[59.236vw] privacy-container-size">
                We use and may allow others to use cookies and similar
                technologies (e.g., web beacons, pixels) to recognize you and/or
                your device(s). You may read Cookie Policy for more information
                on why we use them (such as authenticating you, remembering your
                preferences and settings, analyzing site traffic and trends,
                delivering and measuring the effectiveness of advertising
                campaigns, allowing you to use social features) and how you can
                better control their use, through your browser settings and
                other tools.. <br /> Some web browsers (including Safari,
                Internet Explorer, Firefox and Chrome) have a “Do Not Track”
                (“DNT”) feature that tells a website that a user does not want
                to have his or her online activity tracked. If a website that
                responds to a DNT signal receives a DNT signal, the browser can
                block that website from collecting certain information about the
                browser’s user. Not all browsers offer a DNT option and DNT
                signals are not yet uniform. For this reason, many businesses,
                including Futurest, do not currently respond to DNT signals.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-[7vw] py-[4vh] rules-text-container">
            <div className="mb-[40px]">
              <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                5. How we use information 🌎
              </h1>
            </div>
            <div className=" w-[59.236vw] privacy-container-size">
              <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph">
                The main reason we use your information is to deliver and
                improve our services. Additionally, we use your info to help
                keep you safe and to provide you with advertising that may be of
                interest to you. Read on for a more detailed explanation of the
                various reasons we use your information, together with practical
                examples.
              </p>
            </div>
          </div>
          <div className="pb-[7vw] py-[4vh] rules-text-container">
            <div className="w-[59.236vw] privacy-container-size">
              <ul className="flex flex-col gap-[20px]">
                {Element.map((item, index) => (
                  <div
                    key={index}
                    className="text-[1.667vw] text-[#fff] font-[400] privacy-container-size privacy-paragraph py-[5px]"
                  >
                    <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph">
                      {item.header}
                    </p>
                    <ul className="pl-[2vw] privacy-ul-padding">
                      {Object.keys(item)
                        .filter((key) => key.startsWith("paragraph"))
                        .map((key) => (
                          <li className="list-disc" key={key}>
                            {item[key]}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="px-[7vw] py-[4vh] rules-text-container">
              <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                6. How we share information 📇
              </h1>
              <p className="text-[1.667vw] text-[#fff] font-[400]  pt-[40px] privacy-paragraph w-[59.236vw] privacy-container-size">
                Since our goal is to help you make meaningful connections, the
                main sharing of users’ information is, of course, with other
                users. We also share some users’ information with service
                providers and partners who assist us in operating the services,
                with other Futurest and, in some cases, legal authorities. Read
                on for more details about how your information is shared with
                others.
              </p>
            </div>
            <div className=" px-[7vw] py-[4vh] rules-text-container flex flex-col gap-[40px]  w-[59.236vw] privacy-container-size">
              {TitleElement.map((item, index) => (
                <div key={index} className="flex flex-col gap-[16px]">
                  <h1 className="text-[2.222vw] text-[#FFF] font-[900] privacy-title">
                    {item.text}
                  </h1>
                  <p className="text-[#FFF] w-[59.236vw] privacy-container-size">
                    {item.par.split("\n").map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="px-[7vw] py-[4vh] rules-text-container">
              <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                7. Cross-border data transfers ⬇️
              </h1>
              <p className="text-[1.667vw] text-[#fff] font-[400]  pt-[40px] privacy-paragraph w-[59.236vw] privacy-container-size">
                Sharing of information sometimes involves cross-border data
                transfers, for instance to the United States of America and
                other jurisdictions. As an example, where the service allows for
                users to be located in the European Economic Area (“EEA”), their
                personal information is transferred to countries outside of the
                EEA. We use standard contract clauses approved by the European
                Commission or other suitable safeguard to permit data transfers
                from the EEA to other countries. Standard contractual clauses
                are commitments between companies transferring personal data,
                binding them to protect the privacy and security of your data.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="px-[7vw] py-[4vh] rules-text-container">
              <div>
                <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                  8. Your rights ✋
                </h1>
              </div>
              <div className="w-[59.236vw] privacy-container-size">
                <ul className="flex flex-col gap-[10px]">
                  {Text.map((item, index) => (
                    <div
                      key={index}
                      className="text-[1.667vw] text-[#fff] font-[400] privacy-container-size privacy-paragraph py-[5px]"
                    >
                      <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph">
                        {item.header}
                      </p>
                      <ul className="pl-[2vw] privacy-ul-padding ">
                        {Object.keys(item)
                          .filter((key) => key.startsWith("paragraph"))
                          .map((key) => (
                            <li className="list-disc" key={key}>
                              {item[key]}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="px-[7vw] py-[4vh] rules-text-container">
                <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                  9. Residents of California 🌎
                </h1>
                <p className="text-[1.667vw] text-[#fff] font-[400]  pt-[40px] privacy-paragraph w-[59.236vw] privacy-container-size">
                  If you are a California resident, you can request a notice
                  disclosing the categories of personal information about you
                  that we have shared with third parties for their direct
                  marketing purposes during the preceding calendar year. To
                  request this notice, please contact our customer care team.
                  <br />
                  Please allow 30 days for a response. For your protection and
                  the protection of all of our users, we may ask you to provide
                  proof of identity before we can answer such a request.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="px-[7vw] py-[4vh] rules-text-container">
                <h1 className="text-[3.889vw] mb-[40px] text-[#FFAD72] font-[900] privacy-title">
                  10. How we protect your information 🔒
                </h1>
                {TextElement.map((item, index) => (
                  <div
                    key={index}
                    className="text-[1.667vw] text-[#fff] font-[400] privacy-container-size privacy-paragraph py-[10px] w-[59.236vw] privacy-container-size"
                  >
                    <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph">
                      {item.header}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="px-[7vw] py-[4vh] rules-text-container">
                <h1 className="text-[3.889vw] mb-[40px] text-[#FFAD72] font-[900] privacy-title">
                  11. How long we retain our information ⏳
                </h1>
                <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph w-[59.236vw] privacy-container-size">
                  We keep your personal information only as long as we need it
                  for legitimate business purposes and as permitted by
                  applicable law. To protect the safety and security of our
                  users on and off our services, we implement a safety retention
                  window of three months following account deletion. During this
                  period, account information will be retained although the
                  account will of course not be visible on the services anymore.
                </p>
                {ElementText.map((item, index) => (
                  <div
                    key={index}
                    className="text-[1.667vw] text-[#fff] font-[400] privacy-container-size privacy-paragraph py-[15px] w-[59.236vw] privacy-container-size"
                  >
                    <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph">
                      {item.header}
                    </p>
                    <ul className="pl-[2vw] privacy-ul-padding">
                      {Object.values(item)
                        .slice(1)
                        .map((listItem, listItemIndex) => (
                          <li key={listItemIndex} className="list-disc">
                            {listItem}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
                <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph">
                  Keep in mind that even though our systems are designed to
                  carry out data deletion processes according to the above
                  guidelines, we cannot promise that all data will be deleted
                  within a specific timeframe due to technical constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="px-[7vw] py-[4vh] rules-text-container">
                <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                  12. Children's Privacy
                </h1>
                <p className="text-[1.667vw] text-[#fff] font-[400]  pt-[40px] privacy-paragraph w-[59.236vw] privacy-container-size">
                  Our services are restricted to users who are 18 years of age
                  or older. We do not permit users under the age of 18 on our
                  platform and we do not knowingly collect personal information
                  from anyone under the age of 18. If you suspect that a user is
                  under the age of 18, please use the reporting mechanism
                  available through the service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="px-[7vw] py-[4vh] rules-text-container">
                <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                  13. Privacy policy changes
                </h1>
                <p className="text-[1.667vw] text-[#fff] font-[400]  pt-[40px] privacy-paragraph w-[59.236vw] privacy-container-size">
                  Because we’re always looking for new and innovative ways to
                  help you build meaningful connections, this policy may change
                  over time. We will notify you before any material changes take
                  effect so that you have time to review the changes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="px-[7vw] py-[4vh] rules-text-container">
                <div>
                  <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                    14. How to Contact us
                  </h1>
                  <p className="text-[1.667vw] text-[#fff] font-[400]  pt-[40px] privacy-paragraph w-[59.236vw] privacy-container-size">
                    If you have questions about this Privacy Policy, please
                    contact our customer care team.
                    <br />
                    <br /> Content Removal and Disabling or Terminating Your
                    Account <br />
                    <br /> We can remove any content or information you share on
                    the Service if we believe that it violates these Terms of
                    Use, our policies or we are permitted or required to do so
                    by law. We can refuse to provide or stop providing all or
                    part of the Service to you (including terminating or
                    disabling your access to the Futurest Products) immediately
                    to protect our community or services, or if you create risk
                    or legal exposure for us, violate these Terms of Use or our
                    policies, if you repeatedly infringe other people's
                    intellectual property rights, or where we are permitted or
                    required to do so by law. We can also terminate or change
                    the Service, remove or block content or information shared
                    on our Service, or stop providing all or part of the Service
                    if we determine that doing so is reasonably necessary to
                    avoid or mitigate adverse legal or regulatory impacts on us.
                    If you believe your account has been terminated in error, or
                    you want to disable or permanently delete your account,
                    consult our Support Center. When you request to delete
                    content or your account, the deletion process will
                    automatically begin no more than 30 days after your request.
                    It may take up to 90 days to delete content after the
                    deletion process begins. While the deletion process for such
                    content is being undertaken, the content is no longer
                    visible to other users, but remains subject to these Terms
                    of Use and our Data Policy. After the content is deleted, it
                    may take us up to another 90 days to remove it from backups
                    and disaster recovery systems.
                  </p>
                </div>
                {Document.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[40px] pt-[40px] w-[59.236vw] privacy-container-size"
                  >
                    <h1 className="text-[1.667vw] text-[#fff] font-[700] privacy-title-big">
                      {item.header}
                    </h1>
                    <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph">
                      {item.text.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={`${item.id}-${lineIndex}`}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="px-[7vw] py-[4vh] rules-text-container">
                <div>
                  <h1 className="text-[3.889vw] text-[#FFAD72] font-[900] privacy-title">
                    15. Content Removal and Disabling or Terminating Your
                    Account
                  </h1>
                  <p className="text-[1.667vw] text-[#fff] font-[400]  pt-[40px] privacy-paragraph w-[59.236vw] privacy-container-size">
                    We can remove any content or information you share on the
                    Service if we believe that it violates these Terms of Use,
                    our policies or we are permitted or required to do so by
                    law. We can refuse to provide or stop providing all or part
                    of the Service to you (including terminating or disabling
                    your access to the Futurest Products) immediately to protect
                    our community or services, or if you create risk or legal
                    exposure for us, violate these Terms of Use or our policies,
                    if you repeatedly infringe other people's intellectual
                    property rights, or where we are permitted or required to do
                    so by law. We can also terminate or change the Service,
                    remove or block content or information shared on our
                    Service, or stop providing all or part of the Service if we
                    determine that doing so is reasonably necessary to avoid or
                    mitigate adverse legal or regulatory impacts on us. If you
                    believe your account has been terminated in error, or you
                    want to disable or permanently delete your account, consult
                    our Support Center. When you request to delete content or
                    your account, the deletion process will automatically begin
                    no more than 30 days after your request. It may take up to
                    90 days to delete content after the deletion process begins.
                    While the deletion process for such content is being
                    undertaken, the content is no longer visible to other users,
                    but remains subject to these Terms of Use and our Data
                    Policy. After the content is deleted, it may take us up to
                    another 90 days to remove it from backups and disaster
                    recovery systems.
                  </p>
                </div>
                {DocumentElement.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[40px] pt-[40px] w-[59.236vw] privacy-container-size"
                  >
                    <h1 className="text-[1.667vw] text-[#fff] font-[700] privacy-title-big">
                      {item.header}
                    </h1>
                    <p className="text-[1.667vw] text-[#fff] font-[400] privacy-paragraph">
                      {item.text.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
