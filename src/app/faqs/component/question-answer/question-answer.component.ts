import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  questionArrays: any[] = [
    {
      question: 'How can we get involved with MATW?',
      answer: 'We love to hear from individuals who are passionate about helping others and wish to support or volunteer on behalf of MATW. To volunteer please fill out our application Don’t forget simply spreading our mission and sharing our story goes a long way too! Alternatively, for all other collaboration inquiries please call our head office on +612 9758 9037 or email info@matwproject.org'
    },
    {
      question: 'What are MATW’s administration fees?',
      answer: 'At MATW we aim to have the lowest administration fees possible so that our beneficiaries receive 100% of your donations. We have been fortunate enough to run the organisation, since inception, with no administration fees. This is because of the financial commitment of our sponsors. These sponsors contribute to the running costs of MATW. We are grateful to them for their generosity and kindness. If you would like to become a MATW sponsor and help with the running costs of our organisation please contact us on +612 9758 9037 or email info@matwproject.org'
    },
    {
      question: 'How do I know funds are being distributed appropriately?',
      answer: 'At MATW our main aim is to be an open, accountable and transparent organisation. We strive to keep our donors informed through every stage of the projects we are working on through our social media channels as well as regular project updates on our website and our newsletters. We value our supporters and work with them collaboratively by allowing them to select the projects they would like their donations to be allocated to. MATW is a due diligence organisation and as a not-for-profit it is also bound by regulatory checks including mandatory audits conducted both externally and internally. These audits are conducted to ensure that MATW is abiding by its legal obligations at all times as well as ensuring that we are fulfilling our moral obligations to our donors.'
    },
    {
      question: 'Does MATW have any partnerships?',
      answer: 'Yes! MATW has established many amazing partnerships since establishment which are still ongoing today. One mission of our founder Ali Banat was to create unity amongst like-minded organisations to further our positive impact on the world!'
    },
    {
      question: 'Are there any employment opportunities with MATW?',
      answer: 'MATW is rapidly expanding and we are looking for new members who bring value and insight to our team. If you have a passion to help those in need while gaining rewardable and valuable work experience in the charity sector, we would like to hear from you.'
    },
    {
      question: 'How can we donate to MATW?',
      answer: 'You can donate via: Our website using either Paypal or Bank Transfer (Please note you do not have to create a Paypal account to donate via this platform) Direct Bank Deposit – Account Name: MATW International LTD BSB: 112879 Account Number: 47879 1884 BIC/SWIFT: SGBLAU2S IBAN: 112879478791884 Bank Name: St. George Bank Address: 4-16 Montgomery St, Kogarah NSW 2217 Ref: Project type (e.g. Orphan Housing, Sheep sacrifice…) Visit our GoFundMe page Click link> https://www.gofundme.com/f/matwproject?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet Prefer a face to face engagement? 3. Visit our Greenacre office @ 53 Juno Parade, Greenacre NSW 2190 and one of our lovely staff members will assist For further information or assistance please contact our office +612 9758 9037 or email info@matwproject.org'
    },
    {
      question: 'How can international donors donate to MATW? And can we donate in multiple currencies?',
      answer: 'Our international donors can donate in the currency of their choice through Paypal. We have this payment option available on our website. You do not require a Paypal account nor do you have to create an account to donate.Alternatively you can donate via our GoFundMe page Click link> https://www.gofundme.com/f/matwproject?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheetFor assistance please call +612 9758 9037 or email info@matwproject.org'
    },
    {
      question: 'Will we receive a confirmation once we have made a donation?',
      answer: 'If you donate on our website you will see a donation success prompt when you have made a successful payment. We will also send you a confirmation email to your nominated email address within 1-2 business days once the transaction has been completed successfully which will contain a copy of your donation receipt. If you require further assistance please contact our head office +612 9758 9037 or email info@matwproject.org.'
    },
    {
      question: 'Are your projects Zakat applicable?',
      answer: 'Our values at MATW are based on Islamic principles. All our projects in Africa are Zakat compliant. This includes the following projects: Water wells Sponsorships Schooling and Education Housing construction (Orphan and Widow) Food distribution Masjid Construction However, our Rohingya Refugee village project is not Zakat compliant.'
    }
  ];

  constructor(){}

  ngOnInit(): void {
    
  }
}
