const data = JSON.stringify([
  {
    id: 1,
    vacancyName: 'Senior Software Engineer',
    date: '5',
    time: 'h',
    employment: 'Full Time',
    employer: 'Scoot',
    iconHTML: `
    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.696 9.28V11.2H36.336C35.9733 11.2 35.6773 11.0827 35.448 10.848C35.2187 10.6133 35.104 10.3147 35.104 9.952V5.184H32.752V3.264H35.104V0H37.12V3.264H39.984V5.184H37.12V8.8C37.12 9.12 37.264 9.28 37.552 9.28H39.696ZM3.648 11.424C4.69333 11.424 5.504 11.1893 6.08 10.72C6.656 10.2507 6.944 9.62133 6.944 8.832V8.736C6.944 8.02133 6.688 7.464 6.176 7.064C5.664 6.664 5.00267 6.42133 4.192 6.336C3.488 6.26133 3.00267 6.168 2.736 6.056C2.46933 5.944 2.336 5.76 2.336 5.504C2.336 5.32267 2.42133 5.17067 2.592 5.048C2.76267 4.92533 3.01867 4.864 3.36 4.864C3.73333 4.864 4.03733 4.94667 4.272 5.112C4.50667 5.27733 4.672 5.504 4.768 5.792L6.592 5.056C6.50667 4.832 6.384 4.6 6.224 4.36C6.064 4.12 5.856 3.90133 5.6 3.704C5.344 3.50667 5.032 3.34667 4.664 3.224C4.296 3.10133 3.86133 3.04 3.36 3.04C2.976 3.04 2.60267 3.09333 2.24 3.2C1.87733 3.30667 1.55733 3.464 1.28 3.672C1.00267 3.88 0.778667 4.13333 0.608 4.432C0.437333 4.73067 0.352 5.07733 0.352 5.472V5.568C0.352 6.32533 0.616 6.89867 1.144 7.288C1.672 7.67733 2.384 7.90933 3.28 7.984C3.61067 8.016 3.88533 8.05867 4.104 8.112C4.32267 8.16533 4.496 8.232 4.624 8.312C4.752 8.392 4.84 8.47733 4.888 8.568C4.936 8.65867 4.96 8.75733 4.96 8.864C4.96 9.04533 4.86667 9.21333 4.68 9.368C4.49333 9.52267 4.14933 9.6 3.648 9.6C3.08267 9.6 2.664 9.472 2.392 9.216C2.12 8.96 1.94133 8.66133 1.856 8.32L0 8.928C0.0533333 9.20533 0.157333 9.49067 0.312 9.784C0.466667 10.0773 0.688 10.344 0.976 10.584C1.264 10.824 1.62667 11.024 2.064 11.184C2.50133 11.344 3.02933 11.424 3.648 11.424ZM11.844 11.424C12.9747 11.424 13.8787 11.136 14.556 10.56C15.2333 9.984 15.6627 9.22667 15.844 8.288L13.86 7.792C13.764 8.31467 13.5533 8.73067 13.228 9.04C12.9027 9.34933 12.4307 9.504 11.812 9.504C11.524 9.504 11.252 9.45867 10.996 9.368C10.74 9.27733 10.516 9.14133 10.324 8.96C10.132 8.77867 9.98 8.552 9.868 8.28C9.756 8.008 9.7 7.696 9.7 7.344V7.248C9.7 6.896 9.756 6.57867 9.868 6.296C9.98 6.01333 10.132 5.77333 10.324 5.576C10.516 5.37867 10.74 5.22667 10.996 5.12C11.252 5.01333 11.524 4.96 11.812 4.96C12.4307 4.96 12.9107 5.13067 13.252 5.472C13.5933 5.81333 13.796 6.21867 13.86 6.688L15.844 6.176C15.6627 5.23733 15.228 4.48 14.54 3.904C13.852 3.328 12.9533 3.04 11.844 3.04C11.268 3.04 10.7267 3.136 10.22 3.328C9.71333 3.52 9.27067 3.79733 8.892 4.16C8.51333 4.52267 8.21733 4.96 8.004 5.472C7.79067 5.984 7.684 6.56 7.684 7.2V7.392C7.684 8.032 7.79067 8.60267 8.004 9.104C8.21733 9.60533 8.51067 10.0267 8.884 10.368C9.25733 10.7093 9.69733 10.9707 10.204 11.152C10.7107 11.3333 11.2573 11.424 11.844 11.424ZM21.6 11.152C21.104 11.3333 20.584 11.424 20.04 11.424C19.496 11.424 18.976 11.3333 18.48 11.152C17.984 10.9707 17.544 10.7067 17.16 10.36C16.776 10.0133 16.472 9.58667 16.248 9.08C16.024 8.57333 15.912 7.98933 15.912 7.328V7.136C15.912 6.48533 16.024 5.90667 16.248 5.4C16.472 4.89333 16.776 4.464 17.16 4.112C17.544 3.76 17.984 3.49333 18.48 3.312C18.976 3.13067 19.496 3.04 20.04 3.04C20.584 3.04 21.104 3.13067 21.6 3.312C22.096 3.49333 22.536 3.76 22.92 4.112C23.304 4.464 23.608 4.89333 23.832 5.4C24.056 5.90667 24.168 6.48533 24.168 7.136V7.328C24.168 7.98933 24.056 8.57333 23.832 9.08C23.608 9.58667 23.304 10.0133 22.92 10.36C22.536 10.7067 22.096 10.9707 21.6 11.152ZM20.04 9.504C19.752 9.504 19.48 9.456 19.224 9.36C18.968 9.264 18.744 9.12533 18.552 8.944C18.36 8.76267 18.208 8.54133 18.096 8.28C17.984 8.01867 17.928 7.72267 17.928 7.392V7.072C17.928 6.74133 17.984 6.44533 18.096 6.184C18.208 5.92267 18.36 5.70133 18.552 5.52C18.744 5.33867 18.968 5.2 19.224 5.104C19.48 5.008 19.752 4.96 20.04 4.96C20.328 4.96 20.6 5.008 20.856 5.104C21.112 5.2 21.336 5.33867 21.528 5.52C21.72 5.70133 21.872 5.92267 21.984 6.184C22.096 6.44533 22.152 6.74133 22.152 7.072V7.392C22.152 7.72267 22.096 8.01867 21.984 8.28C21.872 8.54133 21.72 8.76267 21.528 8.944C21.336 9.12533 21.112 9.264 20.856 9.36C20.6 9.456 20.328 9.504 20.04 9.504ZM29.892 11.152C29.396 11.3333 28.876 11.424 28.332 11.424C27.788 11.424 27.268 11.3333 26.772 11.152C26.276 10.9707 25.836 10.7067 25.452 10.36C25.068 10.0133 24.764 9.58667 24.54 9.08C24.316 8.57333 24.204 7.98933 24.204 7.328V7.136C24.204 6.48533 24.316 5.90667 24.54 5.4C24.764 4.89333 25.068 4.464 25.452 4.112C25.836 3.76 26.276 3.49333 26.772 3.312C27.268 3.13067 27.788 3.04 28.332 3.04C28.876 3.04 29.396 3.13067 29.892 3.312C30.388 3.49333 30.828 3.76 31.212 4.112C31.596 4.464 31.9 4.89333 32.124 5.4C32.348 5.90667 32.46 6.48533 32.46 7.136V7.328C32.46 7.98933 32.348 8.57333 32.124 9.08C31.9 9.58667 31.596 10.0133 31.212 10.36C30.828 10.7067 30.388 10.9707 29.892 11.152ZM28.332 9.504C28.044 9.504 27.772 9.456 27.516 9.36C27.26 9.264 27.036 9.12533 26.844 8.944C26.652 8.76267 26.5 8.54133 26.388 8.28C26.276 8.01867 26.22 7.72267 26.22 7.392V7.072C26.22 6.74133 26.276 6.44533 26.388 6.184C26.5 5.92267 26.652 5.70133 26.844 5.52C27.036 5.33867 27.26 5.2 27.516 5.104C27.772 5.008 28.044 4.96 28.332 4.96C28.62 4.96 28.892 5.008 29.148 5.104C29.404 5.2 29.628 5.33867 29.82 5.52C30.012 5.70133 30.164 5.92267 30.276 6.184C30.388 6.44533 30.444 6.74133 30.444 7.072V7.392C30.444 7.72267 30.388 8.01867 30.276 8.28C30.164 8.54133 30.012 8.76267 29.82 8.944C29.628 9.12533 29.404 9.264 29.148 9.36C28.892 9.456 28.62 9.504 28.332 9.504Z" fill="white"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-scott',
    location: 'United Kingdom',
    webSite: 'scoot.com',
    webSiteAddress: 'https://www.flyscoot.com/en',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 2,
    vacancyName: 'Haskell and PureScript Dev',
    date: '20',
    time: 'h',
    employment: 'Part Time',
    employer: 'Blogr',
    iconHTML: `
    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20664 17C11.4218 17 14.1424 14.5585 14.1424 10.5798C14.1424 6.60106 11.4218 4.18218 8.20664 4.18218C6.8576 4.18218 5.82334 4.52128 5.08137 5.24468V0H0V16.7739H4.83405V15.7566C5.57602 16.5931 6.67773 17 8.20664 17ZM6.99251 13.0213C5.86831 13.0213 4.99143 12.1848 4.99143 10.5798C4.99143 8.97473 5.86831 8.1609 6.99251 8.1609C8.1167 8.1609 8.99358 8.97473 8.99358 10.5798C8.99358 12.1848 8.1167 13.0213 6.99251 13.0213ZM21 14.0612C21 15.7793 19.7184 17 18.0321 17C16.3458 17 15.0642 15.7793 15.0642 14.0612C15.0642 12.3205 16.3458 11.1676 18.0321 11.1676C19.7184 11.1676 21 12.3205 21 14.0612Z" fill="white"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-blogr',
    location: 'United States',
    webSite: 'helloblogr.com',
    webSiteAddress: 'https://www.helloblogr.com/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 3,
    vacancyName: 'Midlevel Back End Engineer ',
    date: '1',
    time: 'd',
    employment: 'Part Time',
    employer: 'Vector',
    iconHTML: `
      <svg width="38" height="3" viewBox="0 0 38 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6518 3C16.2075 3 16.6674 2.95294 17.0315 2.85882C17.3956 2.76471 17.6712 2.62353 17.8584 2.43529C18.0455 2.24706 18.1464 2.01324 18.161 1.73382H17.0205C16.9854 1.81029 16.9211 1.88162 16.8275 1.94779C16.7339 2.01397 16.5942 2.06618 16.4085 2.10441C16.2228 2.14265 15.9706 2.16176 15.6518 2.16176C15.2775 2.16176 14.9734 2.13971 14.7394 2.09559C14.5054 2.05147 14.3344 1.98235 14.2261 1.88824C14.1179 1.79412 14.0638 1.67206 14.0638 1.52206C14.0638 1.35735 14.1179 1.225 14.2261 1.125C14.3344 1.025 14.5054 0.952206 14.7394 0.906618C14.9734 0.861029 15.2775 0.838235 15.6518 0.838235C15.9706 0.838235 16.2236 0.858823 16.4107 0.9C16.5979 0.941176 16.7383 0.997794 16.8319 1.06985C16.9254 1.14191 16.9898 1.225 17.0249 1.31912H18.1654C18.1508 1.03676 18.0499 0.797059 17.8627 0.6C17.6756 0.402941 17.3992 0.253676 17.0337 0.152206C16.6681 0.0507353 16.2075 0 15.6518 0C15.2278 0 14.8476 0.025 14.5113 0.075C14.175 0.125 13.8884 0.208088 13.6515 0.324265C13.4146 0.440441 13.2333 0.596324 13.1075 0.791912C12.9818 0.9875 12.9189 1.23088 12.9189 1.52206C12.9189 1.81324 12.9818 2.05441 13.1075 2.24559C13.2333 2.43676 13.4146 2.5875 13.6515 2.69779C13.8884 2.80809 14.175 2.88603 14.5113 2.93162C14.8476 2.97721 15.2278 3 15.6518 3ZM4.91313 0.0882353L3.22863 2.91176H1.70205L0 0.0882353H1.23706L2.46534 2.38346L3.69362 0.0882353H4.91313ZM11.1094 2.07353V2.91176H6.67879V0.0882353H11.1006V0.926471H7.77547V1.27941H10.4952V1.72059H7.77547V2.07353H11.1094ZM22.6728 0.926471V2.91176H21.5761V0.926471H19.8433V0.0882353H24.4055V0.926471H22.6728ZM28.6058 3C29.2434 3 29.7566 2.94338 30.1456 2.83015C30.5345 2.71691 30.8175 2.54926 30.9944 2.32721C31.1713 2.10515 31.2598 1.82941 31.2598 1.5C31.2598 1.17059 31.1713 0.894853 30.9944 0.672794C30.8175 0.450735 30.5345 0.283088 30.1456 0.169853C29.7566 0.0566176 29.2434 0 28.6058 0C27.9683 0 27.455 0.0566176 27.0661 0.169853C26.6771 0.283088 26.3942 0.450735 26.2173 0.672794C26.0403 0.894853 25.9519 1.17059 25.9519 1.5C25.9519 1.82941 26.0403 2.10515 26.2173 2.32721C26.3942 2.54926 26.6771 2.71691 27.0661 2.83015C27.455 2.94338 27.9683 3 28.6058 3ZM27.814 2.10662C28.0407 2.14338 28.3046 2.16176 28.6058 2.16176C28.9071 2.16176 29.1673 2.14338 29.3867 2.10662C29.606 2.06985 29.7756 2.00368 29.8955 1.90809C30.0154 1.8125 30.0754 1.67647 30.0754 1.5C30.0754 1.32353 30.0154 1.1875 29.8955 1.09191C29.7756 0.996324 29.606 0.930147 29.3867 0.893382C29.1673 0.856618 28.9071 0.838235 28.6058 0.838235C28.3046 0.838235 28.0407 0.856618 27.814 0.893382C27.5874 0.930147 27.4104 0.996324 27.2832 1.09191C27.156 1.1875 27.0924 1.32353 27.0924 1.5C27.0924 1.67647 27.156 1.8125 27.2832 1.90809C27.4104 2.00368 27.5874 2.06985 27.814 2.10662ZM34.2976 2.91176V2.11765H36.0128C36.2468 2.11765 36.42 2.12647 36.5326 2.14412C36.6452 2.16176 36.7183 2.19338 36.752 2.23897C36.7856 2.28456 36.8024 2.35147 36.8024 2.43971V2.91176H37.8991V2.30735C37.8991 2.17794 37.8618 2.07868 37.7872 2.00956C37.7127 1.94044 37.5811 1.89265 37.3924 1.86618C37.3581 1.86136 37.3212 1.85694 37.2816 1.8529L37.243 1.84936L37.3201 1.83529C37.4253 1.81412 37.5213 1.78259 37.6078 1.74071L37.671 1.70735C37.7734 1.64853 37.8538 1.56618 37.9123 1.46029C37.9708 1.35441 38 1.22059 38 1.05882C38 0.814706 37.9379 0.622059 37.8136 0.480882C37.6893 0.339706 37.5211 0.238971 37.3091 0.178676C37.0971 0.118382 36.858 0.0882353 36.5919 0.0882353H33.2009V2.91176H34.2976ZM34.2976 1.38088H36.5919C36.6796 1.38088 36.7534 1.36618 36.8134 1.33676C36.8733 1.30735 36.9033 1.25147 36.9033 1.16912C36.9033 1.09265 36.8733 1.04044 36.8134 1.0125C36.7534 0.984559 36.6796 0.970588 36.5919 0.970588H34.2976V1.38088Z" fill="white"/>
      </svg>
    `,
    className: 'vacancy__item-icon-bg-vector',
    location: 'Russia',
    webSite: 'vector.com',
    webSiteAddress: 'https://vector.education/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 4,
    vacancyName: 'Senior Application Engineer',
    date: '2',
    time: 'd',
    employment: 'Full Time',
    employer: 'Office Lite',
    iconHTML: `
    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="10" r="10" fill="#5175FF"/>
    <circle cx="10" cy="10" r="10" fill="#5175FF"/>
    <mask id="mask0_0:4479" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
    <circle cx="10" cy="10" r="10" fill="white"/>
    </mask>
    <g mask="url(#mask0_0:4479)">
    <circle opacity="0.323544" cx="20" cy="10" r="10" fill="#B4C4FF"/>
    </g>
    </svg>
        `,
    className: 'vacancy__item-icon-bg-office-light',
    location: 'Japan',
    webSite: 'Office Lite.com',
    webSiteAddress:
      'https://www.microsoft.com/ru-ru/p/office-pack-lite-for-document-spreadsheet-and-slide/9nj6kfvznld5#activetab=pivot:overviewtab/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 5,
    vacancyName: 'Remote DevOps Engineer',
    date: '2',
    time: 'd',
    employment: 'Part Time',
    employer: 'Pod',
    iconHTML: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#54E6AF"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-pod',
    location: 'Thailand',
    webSite: 'podsite.io',
    webSiteAddress: 'https://podsite.io/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 6,
    vacancyName: 'Desktop Support Manager',
    date: '4',
    time: 'd',
    employment: 'Part Time',
    employer: 'Creative',
    iconHTML: `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6069 9.81448H23.6434C23.5488 10.3303 23.3597 10.7443 23.076 11.0566C22.7923 11.3688 22.3803 11.5249 21.8399 11.5249C21.3536 11.5249 20.8267 11.3959 20.2594 11.138C19.692 10.8801 19.0773 10.5848 18.4154 10.2523C17.7535 9.91968 17.0206 9.62783 16.2168 9.3767C15.413 9.12557 14.5316 9 13.5724 9C11.8433 9 10.4823 9.73303 9.48936 11.1991C8.49645 12.6652 8 14.6538 8 17.1652H12.3566C12.4512 16.6629 12.664 16.2557 12.9949 15.9434C13.3259 15.6312 13.7683 15.4751 14.3222 15.4751C14.7815 15.4751 15.2881 15.6007 15.8419 15.8518C16.3958 16.1029 17.0172 16.3982 17.7062 16.7376C18.3951 17.0769 19.155 17.3722 19.9858 17.6233C20.8166 17.8744 21.7183 18 22.691 18C23.6941 18 24.5687 17.7252 25.3148 17.1757C23.5755 22.307 18.719 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C19.0807 0 24.1863 4.1748 25.6069 9.81448Z" fill="#F94F4F"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-creative',
    location: 'Germany',
    webSite: 'creative.com',
    webSiteAddress: 'https://ru.creative.com/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 7,
    vacancyName: 'iOS Engineer',
    date: '1',
    time: 'w',
    employment: 'Full Time',
    employer: 'Pomodoro',
    iconHTML: `
    <svg width="34" height="7" viewBox="0 0 34 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2187 5.20275C21.0254 5.28092 20.8152 5.32 20.5883 5.32C20.2641 5.32 19.974 5.24125 19.7181 5.08375C19.4622 4.92625 19.2613 4.71042 19.1154 4.43625C18.9696 4.16208 18.8966 3.85 18.8966 3.5C18.8966 3.15 18.9696 2.83792 19.1154 2.56375C19.2613 2.28958 19.4622 2.07375 19.7181 1.91625C19.974 1.75875 20.2641 1.68 20.5883 1.68C20.806 1.68 21.0086 1.71675 21.1962 1.79025C21.3837 1.86375 21.5505 1.96583 21.6964 2.0965V0H22.6968V5.25H21.7519L21.7276 4.872C21.5817 5.01433 21.4121 5.12458 21.2187 5.20275ZM1.00041 4.9035V7H0V1.75H0.94483L0.969146 2.128C1.11504 1.98567 1.28525 1.87542 1.47977 1.79725C1.6743 1.71908 1.88387 1.68 2.1085 1.68C2.43502 1.68 2.72565 1.75875 2.98038 1.91625C3.23512 2.07375 3.43543 2.28958 3.58132 2.56375C3.72722 2.83792 3.80016 3.15 3.80016 3.5C3.80016 3.85 3.72722 4.16208 3.58132 4.43625C3.43543 4.71042 3.23512 4.92625 2.98038 5.08375C2.72565 5.24125 2.43502 5.32 2.1085 5.32C1.89082 5.32 1.68819 5.28325 1.50061 5.20975C1.31304 5.13625 1.1463 5.03417 1.00041 4.9035ZM1.25051 4.1755C1.41725 4.35517 1.62798 4.445 1.88271 4.445C2.13745 4.445 2.34818 4.35517 2.51492 4.1755C2.68165 3.99583 2.76502 3.77067 2.76502 3.5C2.76502 3.22933 2.68165 3.00417 2.51492 2.8245C2.34818 2.64483 2.13745 2.555 1.88271 2.555C1.62798 2.555 1.41725 2.64483 1.25051 2.8245C1.08378 3.00417 1.00041 3.22933 1.00041 3.5C1.00041 3.77067 1.08378 3.99583 1.25051 4.1755ZM6.07193 5.32C6.42855 5.32 6.74581 5.24125 7.0237 5.08375C7.30159 4.92625 7.52101 4.71042 7.68196 4.43625C7.8429 4.16208 7.92338 3.85 7.92338 3.5C7.92338 3.15 7.8429 2.83792 7.68196 2.56375C7.52101 2.28958 7.30159 2.07375 7.0237 1.91625C6.74581 1.75875 6.42855 1.68 6.07193 1.68C5.7153 1.68 5.39746 1.75875 5.11841 1.91625C4.83936 2.07375 4.61936 2.28958 4.45842 2.56375C4.29747 2.83792 4.217 3.15 4.217 3.5C4.217 3.85 4.29747 4.16208 4.45842 4.43625C4.61936 4.71042 4.83936 4.92625 5.11841 5.08375C5.39746 5.24125 5.7153 5.32 6.07193 5.32ZM5.43972 4.1755C5.60646 4.35517 5.81719 4.445 6.07192 4.445C6.32666 4.445 6.53739 4.35517 6.70413 4.1755C6.87086 3.99583 6.95423 3.77067 6.95423 3.5C6.95423 3.22933 6.87086 3.00417 6.70413 2.8245C6.53739 2.64483 6.32666 2.555 6.07192 2.555C5.81719 2.555 5.60646 2.64483 5.43972 2.8245C5.27299 3.00417 5.18962 3.22933 5.18962 3.5C5.18962 3.77067 5.27299 3.99583 5.43972 4.1755ZM9.58378 5.25V3.3915C9.58378 3.11383 9.64746 2.905 9.77483 2.765C9.90219 2.625 10.0562 2.555 10.2368 2.555C10.4151 2.555 10.5674 2.62267 10.6936 2.758C10.8198 2.89333 10.8829 3.09633 10.8829 3.367V5.25H11.8833V3.3915C11.8833 3.11383 11.947 2.905 12.0744 2.765C12.2017 2.625 12.3557 2.555 12.5364 2.555C12.7147 2.555 12.8669 2.62267 12.9932 2.758C13.1194 2.89333 13.1825 3.09633 13.1825 3.367V5.25H14.1829V3.367C14.1829 2.83733 14.0659 2.42375 13.832 2.12625C13.5981 1.82875 13.2705 1.68 12.849 1.68C12.5827 1.68 12.3511 1.7395 12.1543 1.8585C11.9574 1.9775 11.8011 2.14783 11.6853 2.3695C11.463 1.90983 11.0844 1.68 10.5494 1.68C10.1303 1.68 9.79798 1.827 9.55251 2.121L9.5282 1.75H8.58337V5.25H9.58378ZM17.5801 5.08375C17.3022 5.24125 16.9849 5.32 16.6283 5.32C16.2717 5.32 15.9539 5.24125 15.6748 5.08375C15.3958 4.92625 15.1758 4.71042 15.0148 4.43625C14.8539 4.16208 14.7734 3.85 14.7734 3.5C14.7734 3.15 14.8539 2.83792 15.0148 2.56375C15.1758 2.28958 15.3958 2.07375 15.6748 1.91625C15.9539 1.75875 16.2717 1.68 16.6283 1.68C16.9849 1.68 17.3022 1.75875 17.5801 1.91625C17.858 2.07375 18.0774 2.28958 18.2384 2.56375C18.3993 2.83792 18.4798 3.15 18.4798 3.5C18.4798 3.85 18.3993 4.16208 18.2384 4.43625C18.0774 4.71042 17.858 4.92625 17.5801 5.08375ZM16.6283 4.445C16.3736 4.445 16.1629 4.35517 15.9961 4.1755C15.8294 3.99583 15.746 3.77067 15.746 3.5C15.746 3.22933 15.8294 3.00417 15.9961 2.8245C16.1629 2.64483 16.3736 2.555 16.6283 2.555C16.8831 2.555 17.0938 2.64483 17.2605 2.8245C17.4273 3.00417 17.5106 3.22933 17.5106 3.5C17.5106 3.77067 17.4273 3.99583 17.2605 4.1755C17.0938 4.35517 16.8831 4.445 16.6283 4.445ZM20.8141 4.445C20.5593 4.445 20.3486 4.35517 20.1819 4.1755C20.0151 3.99583 19.9318 3.77067 19.9318 3.5C19.9318 3.22933 20.0151 3.00417 20.1819 2.8245C20.3486 2.64483 20.5593 2.555 20.8141 2.555C21.0688 2.555 21.2795 2.64483 21.4463 2.8245C21.613 3.00417 21.6964 3.22933 21.6964 3.5C21.6964 3.77067 21.613 3.99583 21.4463 4.1755C21.2795 4.35517 21.0688 4.445 20.8141 4.445ZM26.1635 5.08375C25.8856 5.24125 25.5683 5.32 25.2117 5.32C24.8551 5.32 24.5372 5.24125 24.2582 5.08375C23.9791 4.92625 23.7591 4.71042 23.5982 4.43625C23.4372 4.16208 23.3568 3.85 23.3568 3.5C23.3568 3.15 23.4372 2.83792 23.5982 2.56375C23.7591 2.28958 23.9791 2.07375 24.2582 1.91625C24.5372 1.75875 24.8551 1.68 25.2117 1.68C25.5683 1.68 25.8856 1.75875 26.1635 1.91625C26.4414 2.07375 26.6608 2.28958 26.8217 2.56375C26.9827 2.83792 27.0631 3.15 27.0631 3.5C27.0631 3.85 26.9827 4.16208 26.8217 4.43625C26.6608 4.71042 26.4414 4.92625 26.1635 5.08375ZM25.2117 4.445C24.957 4.445 24.7462 4.35517 24.5795 4.1755C24.4128 3.99583 24.3294 3.77067 24.3294 3.5C24.3294 3.22933 24.4128 3.00417 24.5795 2.8245C24.7462 2.64483 24.957 2.555 25.2117 2.555C25.4664 2.555 25.6772 2.64483 25.8439 2.8245C26.0106 3.00417 26.094 3.22933 26.094 3.5C26.094 3.77067 26.0106 3.99583 25.8439 4.1755C25.6772 4.35517 25.4664 4.445 25.2117 4.445ZM28.7235 3.7065V5.25H27.7231V1.75H28.5985L28.6471 2.2505C28.8995 1.87017 29.2469 1.68 29.6892 1.68C29.8397 1.68 29.9949 1.70333 30.1547 1.75L30.0157 2.6215C29.8814 2.57717 29.7494 2.555 29.6197 2.555C29.3511 2.555 29.1346 2.65475 28.9702 2.85425C28.8057 3.05375 28.7235 3.33783 28.7235 3.7065ZM32.1485 5.32C32.5052 5.32 32.8224 5.24125 33.1003 5.08375C33.3782 4.92625 33.5976 4.71042 33.7586 4.43625C33.9195 4.16208 34 3.85 34 3.5C34 3.15 33.9195 2.83792 33.7586 2.56375C33.5976 2.28958 33.3782 2.07375 33.1003 1.91625C32.8224 1.75875 32.5052 1.68 32.1485 1.68C31.7919 1.68 31.4741 1.75875 31.195 1.91625C30.916 2.07375 30.696 2.28958 30.535 2.56375C30.3741 2.83792 30.2936 3.15 30.2936 3.5C30.2936 3.85 30.3741 4.16208 30.535 4.43625C30.696 4.71042 30.916 4.92625 31.195 5.08375C31.4741 5.24125 31.7919 5.32 32.1485 5.32ZM31.5163 4.1755C31.6831 4.35517 31.8938 4.445 32.1485 4.445C32.4033 4.445 32.614 4.35517 32.7808 4.1755C32.9475 3.99583 33.0309 3.77067 33.0309 3.5C33.0309 3.22933 32.9475 3.00417 32.7808 2.8245C32.614 2.64483 32.4033 2.555 32.1485 2.555C31.8938 2.555 31.6831 2.64483 31.5163 2.8245C31.3496 3.00417 31.2662 3.22933 31.2662 3.5C31.2662 3.77067 31.3496 3.99583 31.5163 4.1755Z" fill="#D7E0FF"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-pomodoro',
    location: 'United States',
    webSite: 'pomofocus.io',
    webSiteAddress: 'https://pomofocus.io/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 8,
    vacancyName: 'Senior EJB Developer',
    date: '1',
    time: 'w',
    employment: 'Full Time',
    employer: 'Maker',
    iconHTML: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0812 10.878C20.1031 10.6073 20.1143 10.3335 20.1143 10.0571C20.1143 9.51313 20.0711 8.97921 19.9879 8.45862C21.237 9.89005 21.9953 11.7611 22 13.8099C22.0049 15.9792 21.147 18.0615 19.6154 19.5978C18.0838 21.1341 16.0041 21.9984 13.8348 22C11.777 22.0016 9.89627 21.2424 8.45863 19.9879C8.97922 20.0711 9.51313 20.1143 10.0571 20.1143C10.3332 20.1143 10.6067 20.1032 10.8772 20.0813C12.6141 20.9008 14.6522 20.9765 16.4904 20.2098C19.074 19.1321 20.7529 16.603 20.7428 13.8036C20.7381 12.7571 20.5013 11.7657 20.0812 10.878ZM20.0812 10.878C18.974 8.53808 16.5934 6.91921 13.8348 6.91429C11.0355 6.91179 8.51086 8.59748 7.44019 11.184C6.36952 13.7705 6.9641 16.7474 8.94621 18.7241C9.51806 19.2944 10.1728 19.749 10.8772 20.0813C15.7773 19.6859 19.6854 15.778 20.0812 10.878ZM8.45863 19.9879C3.66392 19.2222 0 15.0675 0 10.0571C0 4.50274 4.50273 0 10.0571 0C15.0675 0 19.2222 3.66392 19.9879 8.45862C18.4867 6.73816 16.2766 5.65278 13.814 5.65716C9.30272 5.66517 5.65142 9.3276 5.65714 13.8389C5.66025 16.2925 6.74446 18.4922 8.45863 19.9879Z" fill="#3EE9E5"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-maker',
    location: 'United Kingdom',
    webSite: 'coinmarketcap.com',
    webSiteAddress: 'https://coinmarketcap.com/ru/currencies/maker/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 9,
    vacancyName: 'Senior Frontend Developer',
    date: '1',
    time: 'w',
    employment: 'Part Time',
    employer: 'Coffeeroasters',
    iconHTML: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4893 3.00268C9.97493 -0.508874 4.76554 -1.01438 1.87661 1.87766C-1.01383 4.76821 -0.508337 9.97779 3.00008 13.4908C3.93606 14.4269 5.01454 15.1424 6.15301 15.6554C6.52651 13.4848 7.59748 11.3983 9.22344 9.68528C8.68496 9.49328 8.13297 9.33128 7.55698 9.17377C4.14606 8.23776 2.4511 5.39222 2.05511 2.05617C2.38262 2.45002 2.68082 2.86313 2.97814 3.27503C3.555 4.0742 4.12855 4.86879 4.90654 5.50922C6.11679 6.50576 7.44522 6.89045 8.89855 7.3113C8.95466 7.32755 9.01096 7.34385 9.06745 7.36025C9.75593 7.55975 10.3544 7.85525 10.9034 8.20026C12.3464 7.14574 13.9738 6.44373 15.6538 6.15423C15.1423 5.01571 14.4253 3.93869 13.4893 3.00268ZM7.54648 16.4894C7.76998 14.3159 8.82296 12.1903 10.5104 10.5028C14.0248 6.99124 19.2342 6.48423 22.1232 9.37778C25.0136 12.2683 24.5096 17.4779 20.9967 20.991C19.3092 22.6785 17.1838 23.7315 15.0103 23.9565C14.7208 23.985 14.4343 24 14.1538 24C12.2849 24 10.6154 23.3445 9.38544 22.1145C7.96947 20.7 7.31549 18.7019 7.54648 16.4894ZM12.6869 18.2729C13.8388 17.3939 15.0853 17.0459 16.4413 16.6754C19.8522 15.7394 21.5457 12.8938 21.9432 9.55778C21.6184 9.94944 21.3224 10.3598 21.0273 10.7688C20.4487 11.5709 19.8735 12.3681 19.0917 13.0108C17.8778 14.009 16.5463 14.3943 15.0864 14.8168L14.9308 14.8619C11.5934 15.8309 9.94343 18.6524 9.56244 21.936C9.89121 21.541 10.1924 21.1309 10.492 20.7229C11.1423 19.8374 11.7852 18.962 12.6869 18.2729Z" fill="#0E8784"/>
    </svg>
        `,
    className: 'vacancy__item-icon-bg-coffee',
    location: 'Singapore',
    webSite: 'coffeeroasters.ru',
    webSiteAddress: 'https://coffeeroasters.ru/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 10,
    vacancyName: 'App & Website Designer',
    date: '2',
    time: 'w',
    employment: 'Freelance',
    employer: 'Mastercraft',
    iconHTML: `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.55772 12.1019C3.2715 11.3882 4.40542 11.3506 5.16342 11.9892L5.28613 12.1019L15.4276 22.2434C16.181 22.9968 16.181 24.2184 15.4276 24.9718C14.7138 25.6856 13.5799 25.7231 12.8219 25.0845L12.6992 24.9718L2.55772 14.8304C1.80429 14.0769 1.80429 12.8554 2.55772 12.1019Z" fill="#444444"/>
    <path d="M23.1821 1.0171C24.1888 0.0213305 25.889 0.676543 25.9881 2.04255L25.9926 2.16867V12.905C25.9926 13.8044 25.2555 14.5336 24.3463 14.5336C23.4784 14.5336 22.7673 13.8692 22.7044 13.0265L22.6999 12.905L22.6996 6.09989L14.6568 14.0566C13.6502 15.0523 11.95 14.3971 11.8508 13.0311L11.8463 12.905L11.846 6.09989L3.80316 14.0566C3.19405 14.6591 2.22642 14.6908 1.57957 14.1517L1.47485 14.0566C0.865748 13.4541 0.83369 12.4969 1.37868 11.857L1.47485 11.7534L12.3285 1.0171C13.3351 0.0213305 15.0353 0.676543 15.1345 2.04255L15.139 2.16867L15.1387 8.97268L23.1821 1.0171Z" fill="white"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-mastercraft',
    location: 'United States',
    webSite: 'mastercraft.com',
    webSiteAddress: 'https://www.mastercraft.com/eu',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 11,
    vacancyName: 'Fullstack Developer',
    date: '1',
    time: 'mo',
    employment: 'Part Time',
    employer: 'Crowdfund',
    iconHTML: `
    <svg width="38" height="6" viewBox="0 0 38 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7224 2.95391V5.88474H22.4963V2.95391H21.9486V1.76841H22.4963C22.4963 0.615834 23.1257 -0.0757102 24.4826 0.00661648V1.19212C24.0249 1.15096 23.7224 1.29091 23.7224 1.76841H24.4826V2.95391H23.7224ZM20.3283 5.49781C20.0586 5.81065 19.658 6 19.1104 6C18.0395 6 17.1567 5.05324 17.1567 3.82658C17.1567 2.59991 18.0395 1.65315 19.1104 1.65315C19.658 1.65315 20.0586 1.8425 20.3283 2.15534V0.121874H21.5545V5.88474H20.3283V5.49781ZM4.01358 4.93799C3.66209 5.58013 2.96727 6 2.16619 6C0.923696 6 0 5.05324 0 3.82658C0 2.59991 0.923696 1.65315 2.16619 1.65315C2.9591 1.65315 3.66209 2.07302 4.01358 2.70693L2.94275 3.33261C2.80379 3.04447 2.50951 2.87159 2.14984 2.87159C1.61851 2.87159 1.22615 3.25852 1.22615 3.82658C1.22615 4.39463 1.61851 4.78156 2.14984 4.78156C2.50951 4.78156 2.81196 4.60868 2.94275 4.32054L4.01358 4.93799ZM5.5521 4.02416V5.88474H4.32596V1.76841H5.5521V2.50112C5.71559 1.94953 6.26327 1.68608 6.77825 1.68608V3.08563C6.27144 3.00331 5.5521 3.20913 5.5521 4.02416ZM8.97071 6C10.1723 6 11.1369 5.05324 11.1369 3.82658C11.1369 2.59991 10.1723 1.65315 8.97071 1.65315C7.76909 1.65315 6.80452 2.59991 6.80452 3.82658C6.80452 5.05324 7.76909 6 8.97071 6ZM8.03067 3.82658C8.03067 4.41109 8.43938 4.79803 8.97071 4.79803C9.50204 4.79803 9.91076 4.41109 9.91076 3.82658C9.91076 3.24206 9.50204 2.85512 8.97071 2.85512C8.43938 2.85512 8.03067 3.24206 8.03067 3.82658ZM13.4929 5.88474L14.1468 3.68662L14.8007 5.88474H15.9451L17.253 1.76841H15.9451L15.3566 3.97476L14.719 1.76841H13.5746L12.937 3.97476L12.3485 1.76841H11.0406L12.3485 5.88474H13.4929ZM19.3556 4.83096C18.7916 4.83096 18.3828 4.44403 18.3828 3.82658C18.3828 3.20913 18.7916 2.82219 19.3556 2.82219C19.9196 2.82219 20.3283 3.20913 20.3283 3.82658C20.3283 4.44403 19.9196 4.83096 19.3556 4.83096ZM26.1846 6C26.7241 6 27.1328 5.80242 27.3536 5.49781V5.88474H28.5797V1.76841H27.3536V4.01593C27.3536 4.60045 27.0429 4.86389 26.5933 4.86389C26.201 4.86389 25.8822 4.62514 25.8822 4.11472V1.76841H24.656V4.29584C24.656 5.40725 25.359 6 26.1846 6ZM30.4861 3.63722V5.88474H29.2599V1.76841H30.4861V2.15534C30.7068 1.85073 31.1155 1.65315 31.655 1.65315C32.4806 1.65315 33.1836 2.2459 33.1836 3.35731V5.88474H31.9574V3.53843C31.9574 3.02801 31.6386 2.78926 31.2463 2.78926C30.7967 2.78926 30.4861 3.0527 30.4861 3.63722ZM35.5559 6C36.1036 6 36.5041 5.81065 36.7739 5.49781V5.88474H38V0.121874H36.7739V2.15534C36.5041 1.8425 36.1036 1.65315 35.5559 1.65315C34.4851 1.65315 33.6022 2.59991 33.6022 3.82658C33.6022 5.05324 34.4851 6 35.5559 6ZM34.8284 3.82658C34.8284 4.44403 35.2371 4.83096 35.8011 4.83096C36.3651 4.83096 36.7739 4.44403 36.7739 3.82658C36.7739 3.20913 36.3651 2.82219 35.8011 2.82219C35.2371 2.82219 34.8284 3.20913 34.8284 3.82658Z" fill="white"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-crowdfund',
    location: 'Russia',
    webSite: 'planeta.ru',
    webSiteAddress: 'https://planeta.ru/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 12,
    vacancyName: 'Technical Lead Engineer',
    date: '4',
    time: 'd',
    employment: 'Part Time',
    employer: 'Typemaster',
    iconHTML: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37811 10.0209C6.37811 10.134 6.31438 10.2 6.20511 10.2H4.8393C4.73003 10.2 4.66629 10.134 4.66629 10.0209V5.20286C4.66629 5.15572 4.63898 5.12743 4.59345 5.12743H3.173C3.06374 5.12743 3 5.06143 3 4.94829V3.77915C3 3.66601 3.06374 3.60001 3.173 3.60001H7.91693C8.0262 3.60001 8.08994 3.66601 8.08994 3.77915V4.94829C8.08994 5.06143 8.0262 5.12743 7.91693 5.12743H6.45096C6.40543 5.12743 6.37811 5.15572 6.37811 5.20286V10.0209ZM10.3208 10.0209C10.3208 10.134 10.257 10.2 10.1478 10.2H8.78195C8.67268 10.2 8.60895 10.134 8.60895 10.0209V3.77915C8.60895 3.66601 8.67268 3.60001 8.78195 3.60001H10.1387C10.2297 3.60001 10.3026 3.63772 10.3481 3.72258L11.4498 5.58001C11.4772 5.63658 11.5318 5.63658 11.5591 5.58001L12.6609 3.72258C12.7064 3.63772 12.7792 3.60001 12.8703 3.60001H14.227C14.3363 3.60001 14.4 3.66601 14.4 3.77915V10.0209C14.4 10.134 14.3363 10.2 14.227 10.2H12.8612C12.7519 10.2 12.6882 10.134 12.6882 10.0209V6.69258C12.6882 6.61715 12.6335 6.60772 12.5971 6.66429L12.0326 7.63543C11.9871 7.72029 11.9142 7.75801 11.8232 7.75801H11.1858C11.0947 7.75801 11.0219 7.72029 10.9764 7.63543L10.4118 6.66429C10.3754 6.60772 10.3208 6.61715 10.3208 6.69258V10.0209Z" fill="#F16718"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-typemaster',
    location: 'United Kingdom',
    webSite: 'typingmaster.com',
    webSiteAddress: 'https://www.typingmaster.com',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 13,
    vacancyName: 'IOS Software Engineer',
    date: '3',
    time: 'd',
    employment: 'Part Time',
    employer: 'Scoot',
    iconHTML: `
    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.696 9.28V11.2H36.336C35.9733 11.2 35.6773 11.0827 35.448 10.848C35.2187 10.6133 35.104 10.3147 35.104 9.952V5.184H32.752V3.264H35.104V0H37.12V3.264H39.984V5.184H37.12V8.8C37.12 9.12 37.264 9.28 37.552 9.28H39.696ZM3.648 11.424C4.69333 11.424 5.504 11.1893 6.08 10.72C6.656 10.2507 6.944 9.62133 6.944 8.832V8.736C6.944 8.02133 6.688 7.464 6.176 7.064C5.664 6.664 5.00267 6.42133 4.192 6.336C3.488 6.26133 3.00267 6.168 2.736 6.056C2.46933 5.944 2.336 5.76 2.336 5.504C2.336 5.32267 2.42133 5.17067 2.592 5.048C2.76267 4.92533 3.01867 4.864 3.36 4.864C3.73333 4.864 4.03733 4.94667 4.272 5.112C4.50667 5.27733 4.672 5.504 4.768 5.792L6.592 5.056C6.50667 4.832 6.384 4.6 6.224 4.36C6.064 4.12 5.856 3.90133 5.6 3.704C5.344 3.50667 5.032 3.34667 4.664 3.224C4.296 3.10133 3.86133 3.04 3.36 3.04C2.976 3.04 2.60267 3.09333 2.24 3.2C1.87733 3.30667 1.55733 3.464 1.28 3.672C1.00267 3.88 0.778667 4.13333 0.608 4.432C0.437333 4.73067 0.352 5.07733 0.352 5.472V5.568C0.352 6.32533 0.616 6.89867 1.144 7.288C1.672 7.67733 2.384 7.90933 3.28 7.984C3.61067 8.016 3.88533 8.05867 4.104 8.112C4.32267 8.16533 4.496 8.232 4.624 8.312C4.752 8.392 4.84 8.47733 4.888 8.568C4.936 8.65867 4.96 8.75733 4.96 8.864C4.96 9.04533 4.86667 9.21333 4.68 9.368C4.49333 9.52267 4.14933 9.6 3.648 9.6C3.08267 9.6 2.664 9.472 2.392 9.216C2.12 8.96 1.94133 8.66133 1.856 8.32L0 8.928C0.0533333 9.20533 0.157333 9.49067 0.312 9.784C0.466667 10.0773 0.688 10.344 0.976 10.584C1.264 10.824 1.62667 11.024 2.064 11.184C2.50133 11.344 3.02933 11.424 3.648 11.424ZM11.844 11.424C12.9747 11.424 13.8787 11.136 14.556 10.56C15.2333 9.984 15.6627 9.22667 15.844 8.288L13.86 7.792C13.764 8.31467 13.5533 8.73067 13.228 9.04C12.9027 9.34933 12.4307 9.504 11.812 9.504C11.524 9.504 11.252 9.45867 10.996 9.368C10.74 9.27733 10.516 9.14133 10.324 8.96C10.132 8.77867 9.98 8.552 9.868 8.28C9.756 8.008 9.7 7.696 9.7 7.344V7.248C9.7 6.896 9.756 6.57867 9.868 6.296C9.98 6.01333 10.132 5.77333 10.324 5.576C10.516 5.37867 10.74 5.22667 10.996 5.12C11.252 5.01333 11.524 4.96 11.812 4.96C12.4307 4.96 12.9107 5.13067 13.252 5.472C13.5933 5.81333 13.796 6.21867 13.86 6.688L15.844 6.176C15.6627 5.23733 15.228 4.48 14.54 3.904C13.852 3.328 12.9533 3.04 11.844 3.04C11.268 3.04 10.7267 3.136 10.22 3.328C9.71333 3.52 9.27067 3.79733 8.892 4.16C8.51333 4.52267 8.21733 4.96 8.004 5.472C7.79067 5.984 7.684 6.56 7.684 7.2V7.392C7.684 8.032 7.79067 8.60267 8.004 9.104C8.21733 9.60533 8.51067 10.0267 8.884 10.368C9.25733 10.7093 9.69733 10.9707 10.204 11.152C10.7107 11.3333 11.2573 11.424 11.844 11.424ZM21.6 11.152C21.104 11.3333 20.584 11.424 20.04 11.424C19.496 11.424 18.976 11.3333 18.48 11.152C17.984 10.9707 17.544 10.7067 17.16 10.36C16.776 10.0133 16.472 9.58667 16.248 9.08C16.024 8.57333 15.912 7.98933 15.912 7.328V7.136C15.912 6.48533 16.024 5.90667 16.248 5.4C16.472 4.89333 16.776 4.464 17.16 4.112C17.544 3.76 17.984 3.49333 18.48 3.312C18.976 3.13067 19.496 3.04 20.04 3.04C20.584 3.04 21.104 3.13067 21.6 3.312C22.096 3.49333 22.536 3.76 22.92 4.112C23.304 4.464 23.608 4.89333 23.832 5.4C24.056 5.90667 24.168 6.48533 24.168 7.136V7.328C24.168 7.98933 24.056 8.57333 23.832 9.08C23.608 9.58667 23.304 10.0133 22.92 10.36C22.536 10.7067 22.096 10.9707 21.6 11.152ZM20.04 9.504C19.752 9.504 19.48 9.456 19.224 9.36C18.968 9.264 18.744 9.12533 18.552 8.944C18.36 8.76267 18.208 8.54133 18.096 8.28C17.984 8.01867 17.928 7.72267 17.928 7.392V7.072C17.928 6.74133 17.984 6.44533 18.096 6.184C18.208 5.92267 18.36 5.70133 18.552 5.52C18.744 5.33867 18.968 5.2 19.224 5.104C19.48 5.008 19.752 4.96 20.04 4.96C20.328 4.96 20.6 5.008 20.856 5.104C21.112 5.2 21.336 5.33867 21.528 5.52C21.72 5.70133 21.872 5.92267 21.984 6.184C22.096 6.44533 22.152 6.74133 22.152 7.072V7.392C22.152 7.72267 22.096 8.01867 21.984 8.28C21.872 8.54133 21.72 8.76267 21.528 8.944C21.336 9.12533 21.112 9.264 20.856 9.36C20.6 9.456 20.328 9.504 20.04 9.504ZM29.892 11.152C29.396 11.3333 28.876 11.424 28.332 11.424C27.788 11.424 27.268 11.3333 26.772 11.152C26.276 10.9707 25.836 10.7067 25.452 10.36C25.068 10.0133 24.764 9.58667 24.54 9.08C24.316 8.57333 24.204 7.98933 24.204 7.328V7.136C24.204 6.48533 24.316 5.90667 24.54 5.4C24.764 4.89333 25.068 4.464 25.452 4.112C25.836 3.76 26.276 3.49333 26.772 3.312C27.268 3.13067 27.788 3.04 28.332 3.04C28.876 3.04 29.396 3.13067 29.892 3.312C30.388 3.49333 30.828 3.76 31.212 4.112C31.596 4.464 31.9 4.89333 32.124 5.4C32.348 5.90667 32.46 6.48533 32.46 7.136V7.328C32.46 7.98933 32.348 8.57333 32.124 9.08C31.9 9.58667 31.596 10.0133 31.212 10.36C30.828 10.7067 30.388 10.9707 29.892 11.152ZM28.332 9.504C28.044 9.504 27.772 9.456 27.516 9.36C27.26 9.264 27.036 9.12533 26.844 8.944C26.652 8.76267 26.5 8.54133 26.388 8.28C26.276 8.01867 26.22 7.72267 26.22 7.392V7.072C26.22 6.74133 26.276 6.44533 26.388 6.184C26.5 5.92267 26.652 5.70133 26.844 5.52C27.036 5.33867 27.26 5.2 27.516 5.104C27.772 5.008 28.044 4.96 28.332 4.96C28.62 4.96 28.892 5.008 29.148 5.104C29.404 5.2 29.628 5.33867 29.82 5.52C30.012 5.70133 30.164 5.92267 30.276 6.184C30.388 6.44533 30.444 6.74133 30.444 7.072V7.392C30.444 7.72267 30.388 8.01867 30.276 8.28C30.164 8.54133 30.012 8.76267 29.82 8.944C29.628 9.12533 29.404 9.264 29.148 9.36C28.892 9.456 28.62 9.504 28.332 9.504Z" fill="white"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-scott',
    location: 'United Kingdom',
    webSite: 'scoot.com',
    webSiteAddress: 'https://www.flyscoot.com/en',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 14,
    vacancyName: 'Frontend Software Engineer',
    date: '6',
    time: 'd',
    employment: 'Full Time',
    employer: 'Typemaster',
    iconHTML: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37811 10.0209C6.37811 10.134 6.31438 10.2 6.20511 10.2H4.8393C4.73003 10.2 4.66629 10.134 4.66629 10.0209V5.20286C4.66629 5.15572 4.63898 5.12743 4.59345 5.12743H3.173C3.06374 5.12743 3 5.06143 3 4.94829V3.77915C3 3.66601 3.06374 3.60001 3.173 3.60001H7.91693C8.0262 3.60001 8.08994 3.66601 8.08994 3.77915V4.94829C8.08994 5.06143 8.0262 5.12743 7.91693 5.12743H6.45096C6.40543 5.12743 6.37811 5.15572 6.37811 5.20286V10.0209ZM10.3208 10.0209C10.3208 10.134 10.257 10.2 10.1478 10.2H8.78195C8.67268 10.2 8.60895 10.134 8.60895 10.0209V3.77915C8.60895 3.66601 8.67268 3.60001 8.78195 3.60001H10.1387C10.2297 3.60001 10.3026 3.63772 10.3481 3.72258L11.4498 5.58001C11.4772 5.63658 11.5318 5.63658 11.5591 5.58001L12.6609 3.72258C12.7064 3.63772 12.7792 3.60001 12.8703 3.60001H14.227C14.3363 3.60001 14.4 3.66601 14.4 3.77915V10.0209C14.4 10.134 14.3363 10.2 14.227 10.2H12.8612C12.7519 10.2 12.6882 10.134 12.6882 10.0209V6.69258C12.6882 6.61715 12.6335 6.60772 12.5971 6.66429L12.0326 7.63543C11.9871 7.72029 11.9142 7.75801 11.8232 7.75801H11.1858C11.0947 7.75801 11.0219 7.72029 10.9764 7.63543L10.4118 6.66429C10.3754 6.60772 10.3208 6.61715 10.3208 6.69258V10.0209Z" fill="#F16718"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-typemaster',
    location: 'United Kingdom',
    webSite: 'typingmaster.com',
    webSiteAddress: 'https://www.typingmaster.com',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 15,
    vacancyName: 'Senior DApp Engineer',
    date: '2',
    time: 'w',
    employment: 'Full Time',
    employer: 'Mastercraft',
    iconHTML: `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.55772 12.1019C3.2715 11.3882 4.40542 11.3506 5.16342 11.9892L5.28613 12.1019L15.4276 22.2434C16.181 22.9968 16.181 24.2184 15.4276 24.9718C14.7138 25.6856 13.5799 25.7231 12.8219 25.0845L12.6992 24.9718L2.55772 14.8304C1.80429 14.0769 1.80429 12.8554 2.55772 12.1019Z" fill="#444444"/>
    <path d="M23.1821 1.0171C24.1888 0.0213305 25.889 0.676543 25.9881 2.04255L25.9926 2.16867V12.905C25.9926 13.8044 25.2555 14.5336 24.3463 14.5336C23.4784 14.5336 22.7673 13.8692 22.7044 13.0265L22.6999 12.905L22.6996 6.09989L14.6568 14.0566C13.6502 15.0523 11.95 14.3971 11.8508 13.0311L11.8463 12.905L11.846 6.09989L3.80316 14.0566C3.19405 14.6591 2.22642 14.6908 1.57957 14.1517L1.47485 14.0566C0.865748 13.4541 0.83369 12.4969 1.37868 11.857L1.47485 11.7534L12.3285 1.0171C13.3351 0.0213305 15.0353 0.676543 15.1345 2.04255L15.139 2.16867L15.1387 8.97268L23.1821 1.0171Z" fill="white"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-mastercraft',
    location: 'United States',
    webSite: 'mastercraft.com',
    webSiteAddress: 'https://www.mastercraft.com/eu',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 16,
    vacancyName: 'Software Developer (MPS)',
    date: '24',
    time: 'd',
    employment: 'Part Time',
    employer: 'Blogr',
    iconHTML: `
    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20664 17C11.4218 17 14.1424 14.5585 14.1424 10.5798C14.1424 6.60106 11.4218 4.18218 8.20664 4.18218C6.8576 4.18218 5.82334 4.52128 5.08137 5.24468V0H0V16.7739H4.83405V15.7566C5.57602 16.5931 6.67773 17 8.20664 17ZM6.99251 13.0213C5.86831 13.0213 4.99143 12.1848 4.99143 10.5798C4.99143 8.97473 5.86831 8.1609 6.99251 8.1609C8.1167 8.1609 8.99358 8.97473 8.99358 10.5798C8.99358 12.1848 8.1167 13.0213 6.99251 13.0213ZM21 14.0612C21 15.7793 19.7184 17 18.0321 17C16.3458 17 15.0642 15.7793 15.0642 14.0612C15.0642 12.3205 16.3458 11.1676 18.0321 11.1676C19.7184 11.1676 21 12.3205 21 14.0612Z" fill="white"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-blogr',
    location: 'United States',
    webSite: 'helloblogr.com',
    webSiteAddress: 'https://www.helloblogr.com/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 17,
    vacancyName: 'Node.js Engineer',
    date: '9',
    time: 'd',
    employment: 'Full Time',
    employer: 'Vector',
    iconHTML: `
      <svg width="38" height="3" viewBox="0 0 38 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6518 3C16.2075 3 16.6674 2.95294 17.0315 2.85882C17.3956 2.76471 17.6712 2.62353 17.8584 2.43529C18.0455 2.24706 18.1464 2.01324 18.161 1.73382H17.0205C16.9854 1.81029 16.9211 1.88162 16.8275 1.94779C16.7339 2.01397 16.5942 2.06618 16.4085 2.10441C16.2228 2.14265 15.9706 2.16176 15.6518 2.16176C15.2775 2.16176 14.9734 2.13971 14.7394 2.09559C14.5054 2.05147 14.3344 1.98235 14.2261 1.88824C14.1179 1.79412 14.0638 1.67206 14.0638 1.52206C14.0638 1.35735 14.1179 1.225 14.2261 1.125C14.3344 1.025 14.5054 0.952206 14.7394 0.906618C14.9734 0.861029 15.2775 0.838235 15.6518 0.838235C15.9706 0.838235 16.2236 0.858823 16.4107 0.9C16.5979 0.941176 16.7383 0.997794 16.8319 1.06985C16.9254 1.14191 16.9898 1.225 17.0249 1.31912H18.1654C18.1508 1.03676 18.0499 0.797059 17.8627 0.6C17.6756 0.402941 17.3992 0.253676 17.0337 0.152206C16.6681 0.0507353 16.2075 0 15.6518 0C15.2278 0 14.8476 0.025 14.5113 0.075C14.175 0.125 13.8884 0.208088 13.6515 0.324265C13.4146 0.440441 13.2333 0.596324 13.1075 0.791912C12.9818 0.9875 12.9189 1.23088 12.9189 1.52206C12.9189 1.81324 12.9818 2.05441 13.1075 2.24559C13.2333 2.43676 13.4146 2.5875 13.6515 2.69779C13.8884 2.80809 14.175 2.88603 14.5113 2.93162C14.8476 2.97721 15.2278 3 15.6518 3ZM4.91313 0.0882353L3.22863 2.91176H1.70205L0 0.0882353H1.23706L2.46534 2.38346L3.69362 0.0882353H4.91313ZM11.1094 2.07353V2.91176H6.67879V0.0882353H11.1006V0.926471H7.77547V1.27941H10.4952V1.72059H7.77547V2.07353H11.1094ZM22.6728 0.926471V2.91176H21.5761V0.926471H19.8433V0.0882353H24.4055V0.926471H22.6728ZM28.6058 3C29.2434 3 29.7566 2.94338 30.1456 2.83015C30.5345 2.71691 30.8175 2.54926 30.9944 2.32721C31.1713 2.10515 31.2598 1.82941 31.2598 1.5C31.2598 1.17059 31.1713 0.894853 30.9944 0.672794C30.8175 0.450735 30.5345 0.283088 30.1456 0.169853C29.7566 0.0566176 29.2434 0 28.6058 0C27.9683 0 27.455 0.0566176 27.0661 0.169853C26.6771 0.283088 26.3942 0.450735 26.2173 0.672794C26.0403 0.894853 25.9519 1.17059 25.9519 1.5C25.9519 1.82941 26.0403 2.10515 26.2173 2.32721C26.3942 2.54926 26.6771 2.71691 27.0661 2.83015C27.455 2.94338 27.9683 3 28.6058 3ZM27.814 2.10662C28.0407 2.14338 28.3046 2.16176 28.6058 2.16176C28.9071 2.16176 29.1673 2.14338 29.3867 2.10662C29.606 2.06985 29.7756 2.00368 29.8955 1.90809C30.0154 1.8125 30.0754 1.67647 30.0754 1.5C30.0754 1.32353 30.0154 1.1875 29.8955 1.09191C29.7756 0.996324 29.606 0.930147 29.3867 0.893382C29.1673 0.856618 28.9071 0.838235 28.6058 0.838235C28.3046 0.838235 28.0407 0.856618 27.814 0.893382C27.5874 0.930147 27.4104 0.996324 27.2832 1.09191C27.156 1.1875 27.0924 1.32353 27.0924 1.5C27.0924 1.67647 27.156 1.8125 27.2832 1.90809C27.4104 2.00368 27.5874 2.06985 27.814 2.10662ZM34.2976 2.91176V2.11765H36.0128C36.2468 2.11765 36.42 2.12647 36.5326 2.14412C36.6452 2.16176 36.7183 2.19338 36.752 2.23897C36.7856 2.28456 36.8024 2.35147 36.8024 2.43971V2.91176H37.8991V2.30735C37.8991 2.17794 37.8618 2.07868 37.7872 2.00956C37.7127 1.94044 37.5811 1.89265 37.3924 1.86618C37.3581 1.86136 37.3212 1.85694 37.2816 1.8529L37.243 1.84936L37.3201 1.83529C37.4253 1.81412 37.5213 1.78259 37.6078 1.74071L37.671 1.70735C37.7734 1.64853 37.8538 1.56618 37.9123 1.46029C37.9708 1.35441 38 1.22059 38 1.05882C38 0.814706 37.9379 0.622059 37.8136 0.480882C37.6893 0.339706 37.5211 0.238971 37.3091 0.178676C37.0971 0.118382 36.858 0.0882353 36.5919 0.0882353H33.2009V2.91176H34.2976ZM34.2976 1.38088H36.5919C36.6796 1.38088 36.7534 1.36618 36.8134 1.33676C36.8733 1.30735 36.9033 1.25147 36.9033 1.16912C36.9033 1.09265 36.8733 1.04044 36.8134 1.0125C36.7534 0.984559 36.6796 0.970588 36.5919 0.970588H34.2976V1.38088Z" fill="white"/>
      </svg>
    `,
    className: 'vacancy__item-icon-bg-vector',
    location: 'Russia',
    webSite: 'vector.com/',
    webSiteAddress: 'https://vector.education/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 18,
    vacancyName: 'Database Engineer',
    date: '5',
    time: 'd',
    employment: 'Part Time',
    employer: 'Office Lite',
    iconHTML: `
    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="10" r="10" fill="#5175FF"/>
    <circle cx="10" cy="10" r="10" fill="#5175FF"/>
    <mask id="mask0_0:4479" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
    <circle cx="10" cy="10" r="10" fill="white"/>
    </mask>
    <g mask="url(#mask0_0:4479)">
    <circle opacity="0.323544" cx="20" cy="10" r="10" fill="#B4C4FF"/>
    </g>
    </svg>
        `,
    className: 'vacancy__item-icon-bg-office-light',
    location: 'Japan',
    webSite: 'Office Lite.com',
    webSiteAddress:
      'https://www.microsoft.com/ru-ru/p/office-pack-lite-for-document-spreadsheet-and-slide/9nj6kfvznld5#activetab=pivot:overviewtab/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 19,
    vacancyName: 'iOS Reverse Engineer',
    date: '3',
    time: 'w',
    employment: 'Full Time',
    employer: 'Pomodoro',
    iconHTML: `
    <svg width="34" height="7" viewBox="0 0 34 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2187 5.20275C21.0254 5.28092 20.8152 5.32 20.5883 5.32C20.2641 5.32 19.974 5.24125 19.7181 5.08375C19.4622 4.92625 19.2613 4.71042 19.1154 4.43625C18.9696 4.16208 18.8966 3.85 18.8966 3.5C18.8966 3.15 18.9696 2.83792 19.1154 2.56375C19.2613 2.28958 19.4622 2.07375 19.7181 1.91625C19.974 1.75875 20.2641 1.68 20.5883 1.68C20.806 1.68 21.0086 1.71675 21.1962 1.79025C21.3837 1.86375 21.5505 1.96583 21.6964 2.0965V0H22.6968V5.25H21.7519L21.7276 4.872C21.5817 5.01433 21.4121 5.12458 21.2187 5.20275ZM1.00041 4.9035V7H0V1.75H0.94483L0.969146 2.128C1.11504 1.98567 1.28525 1.87542 1.47977 1.79725C1.6743 1.71908 1.88387 1.68 2.1085 1.68C2.43502 1.68 2.72565 1.75875 2.98038 1.91625C3.23512 2.07375 3.43543 2.28958 3.58132 2.56375C3.72722 2.83792 3.80016 3.15 3.80016 3.5C3.80016 3.85 3.72722 4.16208 3.58132 4.43625C3.43543 4.71042 3.23512 4.92625 2.98038 5.08375C2.72565 5.24125 2.43502 5.32 2.1085 5.32C1.89082 5.32 1.68819 5.28325 1.50061 5.20975C1.31304 5.13625 1.1463 5.03417 1.00041 4.9035ZM1.25051 4.1755C1.41725 4.35517 1.62798 4.445 1.88271 4.445C2.13745 4.445 2.34818 4.35517 2.51492 4.1755C2.68165 3.99583 2.76502 3.77067 2.76502 3.5C2.76502 3.22933 2.68165 3.00417 2.51492 2.8245C2.34818 2.64483 2.13745 2.555 1.88271 2.555C1.62798 2.555 1.41725 2.64483 1.25051 2.8245C1.08378 3.00417 1.00041 3.22933 1.00041 3.5C1.00041 3.77067 1.08378 3.99583 1.25051 4.1755ZM6.07193 5.32C6.42855 5.32 6.74581 5.24125 7.0237 5.08375C7.30159 4.92625 7.52101 4.71042 7.68196 4.43625C7.8429 4.16208 7.92338 3.85 7.92338 3.5C7.92338 3.15 7.8429 2.83792 7.68196 2.56375C7.52101 2.28958 7.30159 2.07375 7.0237 1.91625C6.74581 1.75875 6.42855 1.68 6.07193 1.68C5.7153 1.68 5.39746 1.75875 5.11841 1.91625C4.83936 2.07375 4.61936 2.28958 4.45842 2.56375C4.29747 2.83792 4.217 3.15 4.217 3.5C4.217 3.85 4.29747 4.16208 4.45842 4.43625C4.61936 4.71042 4.83936 4.92625 5.11841 5.08375C5.39746 5.24125 5.7153 5.32 6.07193 5.32ZM5.43972 4.1755C5.60646 4.35517 5.81719 4.445 6.07192 4.445C6.32666 4.445 6.53739 4.35517 6.70413 4.1755C6.87086 3.99583 6.95423 3.77067 6.95423 3.5C6.95423 3.22933 6.87086 3.00417 6.70413 2.8245C6.53739 2.64483 6.32666 2.555 6.07192 2.555C5.81719 2.555 5.60646 2.64483 5.43972 2.8245C5.27299 3.00417 5.18962 3.22933 5.18962 3.5C5.18962 3.77067 5.27299 3.99583 5.43972 4.1755ZM9.58378 5.25V3.3915C9.58378 3.11383 9.64746 2.905 9.77483 2.765C9.90219 2.625 10.0562 2.555 10.2368 2.555C10.4151 2.555 10.5674 2.62267 10.6936 2.758C10.8198 2.89333 10.8829 3.09633 10.8829 3.367V5.25H11.8833V3.3915C11.8833 3.11383 11.947 2.905 12.0744 2.765C12.2017 2.625 12.3557 2.555 12.5364 2.555C12.7147 2.555 12.8669 2.62267 12.9932 2.758C13.1194 2.89333 13.1825 3.09633 13.1825 3.367V5.25H14.1829V3.367C14.1829 2.83733 14.0659 2.42375 13.832 2.12625C13.5981 1.82875 13.2705 1.68 12.849 1.68C12.5827 1.68 12.3511 1.7395 12.1543 1.8585C11.9574 1.9775 11.8011 2.14783 11.6853 2.3695C11.463 1.90983 11.0844 1.68 10.5494 1.68C10.1303 1.68 9.79798 1.827 9.55251 2.121L9.5282 1.75H8.58337V5.25H9.58378ZM17.5801 5.08375C17.3022 5.24125 16.9849 5.32 16.6283 5.32C16.2717 5.32 15.9539 5.24125 15.6748 5.08375C15.3958 4.92625 15.1758 4.71042 15.0148 4.43625C14.8539 4.16208 14.7734 3.85 14.7734 3.5C14.7734 3.15 14.8539 2.83792 15.0148 2.56375C15.1758 2.28958 15.3958 2.07375 15.6748 1.91625C15.9539 1.75875 16.2717 1.68 16.6283 1.68C16.9849 1.68 17.3022 1.75875 17.5801 1.91625C17.858 2.07375 18.0774 2.28958 18.2384 2.56375C18.3993 2.83792 18.4798 3.15 18.4798 3.5C18.4798 3.85 18.3993 4.16208 18.2384 4.43625C18.0774 4.71042 17.858 4.92625 17.5801 5.08375ZM16.6283 4.445C16.3736 4.445 16.1629 4.35517 15.9961 4.1755C15.8294 3.99583 15.746 3.77067 15.746 3.5C15.746 3.22933 15.8294 3.00417 15.9961 2.8245C16.1629 2.64483 16.3736 2.555 16.6283 2.555C16.8831 2.555 17.0938 2.64483 17.2605 2.8245C17.4273 3.00417 17.5106 3.22933 17.5106 3.5C17.5106 3.77067 17.4273 3.99583 17.2605 4.1755C17.0938 4.35517 16.8831 4.445 16.6283 4.445ZM20.8141 4.445C20.5593 4.445 20.3486 4.35517 20.1819 4.1755C20.0151 3.99583 19.9318 3.77067 19.9318 3.5C19.9318 3.22933 20.0151 3.00417 20.1819 2.8245C20.3486 2.64483 20.5593 2.555 20.8141 2.555C21.0688 2.555 21.2795 2.64483 21.4463 2.8245C21.613 3.00417 21.6964 3.22933 21.6964 3.5C21.6964 3.77067 21.613 3.99583 21.4463 4.1755C21.2795 4.35517 21.0688 4.445 20.8141 4.445ZM26.1635 5.08375C25.8856 5.24125 25.5683 5.32 25.2117 5.32C24.8551 5.32 24.5372 5.24125 24.2582 5.08375C23.9791 4.92625 23.7591 4.71042 23.5982 4.43625C23.4372 4.16208 23.3568 3.85 23.3568 3.5C23.3568 3.15 23.4372 2.83792 23.5982 2.56375C23.7591 2.28958 23.9791 2.07375 24.2582 1.91625C24.5372 1.75875 24.8551 1.68 25.2117 1.68C25.5683 1.68 25.8856 1.75875 26.1635 1.91625C26.4414 2.07375 26.6608 2.28958 26.8217 2.56375C26.9827 2.83792 27.0631 3.15 27.0631 3.5C27.0631 3.85 26.9827 4.16208 26.8217 4.43625C26.6608 4.71042 26.4414 4.92625 26.1635 5.08375ZM25.2117 4.445C24.957 4.445 24.7462 4.35517 24.5795 4.1755C24.4128 3.99583 24.3294 3.77067 24.3294 3.5C24.3294 3.22933 24.4128 3.00417 24.5795 2.8245C24.7462 2.64483 24.957 2.555 25.2117 2.555C25.4664 2.555 25.6772 2.64483 25.8439 2.8245C26.0106 3.00417 26.094 3.22933 26.094 3.5C26.094 3.77067 26.0106 3.99583 25.8439 4.1755C25.6772 4.35517 25.4664 4.445 25.2117 4.445ZM28.7235 3.7065V5.25H27.7231V1.75H28.5985L28.6471 2.2505C28.8995 1.87017 29.2469 1.68 29.6892 1.68C29.8397 1.68 29.9949 1.70333 30.1547 1.75L30.0157 2.6215C29.8814 2.57717 29.7494 2.555 29.6197 2.555C29.3511 2.555 29.1346 2.65475 28.9702 2.85425C28.8057 3.05375 28.7235 3.33783 28.7235 3.7065ZM32.1485 5.32C32.5052 5.32 32.8224 5.24125 33.1003 5.08375C33.3782 4.92625 33.5976 4.71042 33.7586 4.43625C33.9195 4.16208 34 3.85 34 3.5C34 3.15 33.9195 2.83792 33.7586 2.56375C33.5976 2.28958 33.3782 2.07375 33.1003 1.91625C32.8224 1.75875 32.5052 1.68 32.1485 1.68C31.7919 1.68 31.4741 1.75875 31.195 1.91625C30.916 2.07375 30.696 2.28958 30.535 2.56375C30.3741 2.83792 30.2936 3.15 30.2936 3.5C30.2936 3.85 30.3741 4.16208 30.535 4.43625C30.696 4.71042 30.916 4.92625 31.195 5.08375C31.4741 5.24125 31.7919 5.32 32.1485 5.32ZM31.5163 4.1755C31.6831 4.35517 31.8938 4.445 32.1485 4.445C32.4033 4.445 32.614 4.35517 32.7808 4.1755C32.9475 3.99583 33.0309 3.77067 33.0309 3.5C33.0309 3.22933 32.9475 3.00417 32.7808 2.8245C32.614 2.64483 32.4033 2.555 32.1485 2.555C31.8938 2.555 31.6831 2.64483 31.5163 2.8245C31.3496 3.00417 31.2662 3.22933 31.2662 3.5C31.2662 3.77067 31.3496 3.99583 31.5163 4.1755Z" fill="#D7E0FF"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-pomodoro',
    location: 'United States',
    webSite: 'pomofocus.io',
    webSiteAddress: 'https://pomofocus.io/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 20,
    vacancyName: 'Senior Unreal Engine Developer',
    date: '2',
    time: 'd',
    employment: 'Part Time',
    employer: 'Maker',
    iconHTML: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0812 10.878C20.1031 10.6073 20.1143 10.3335 20.1143 10.0571C20.1143 9.51313 20.0711 8.97921 19.9879 8.45862C21.237 9.89005 21.9953 11.7611 22 13.8099C22.0049 15.9792 21.147 18.0615 19.6154 19.5978C18.0838 21.1341 16.0041 21.9984 13.8348 22C11.777 22.0016 9.89627 21.2424 8.45863 19.9879C8.97922 20.0711 9.51313 20.1143 10.0571 20.1143C10.3332 20.1143 10.6067 20.1032 10.8772 20.0813C12.6141 20.9008 14.6522 20.9765 16.4904 20.2098C19.074 19.1321 20.7529 16.603 20.7428 13.8036C20.7381 12.7571 20.5013 11.7657 20.0812 10.878ZM20.0812 10.878C18.974 8.53808 16.5934 6.91921 13.8348 6.91429C11.0355 6.91179 8.51086 8.59748 7.44019 11.184C6.36952 13.7705 6.9641 16.7474 8.94621 18.7241C9.51806 19.2944 10.1728 19.749 10.8772 20.0813C15.7773 19.6859 19.6854 15.778 20.0812 10.878ZM8.45863 19.9879C3.66392 19.2222 0 15.0675 0 10.0571C0 4.50274 4.50273 0 10.0571 0C15.0675 0 19.2222 3.66392 19.9879 8.45862C18.4867 6.73816 16.2766 5.65278 13.814 5.65716C9.30272 5.66517 5.65142 9.3276 5.65714 13.8389C5.66025 16.2925 6.74446 18.4922 8.45863 19.9879Z" fill="#3EE9E5"/>
    </svg>
    `,
    className: 'vacancy__item-icon-bg-maker',
    location: 'United Kingdom',
    webSite: 'coinmarketcap.com',
    webSiteAddress: 'https://coinmarketcap.com/ru/currencies/maker/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 21,
    vacancyName: 'DBA Engineer',
    date: '1',
    time: 'w',
    employment: 'Full Time',
    employer: 'Coffeeroasters',
    iconHTML: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4893 3.00268C9.97493 -0.508874 4.76554 -1.01438 1.87661 1.87766C-1.01383 4.76821 -0.508337 9.97779 3.00008 13.4908C3.93606 14.4269 5.01454 15.1424 6.15301 15.6554C6.52651 13.4848 7.59748 11.3983 9.22344 9.68528C8.68496 9.49328 8.13297 9.33128 7.55698 9.17377C4.14606 8.23776 2.4511 5.39222 2.05511 2.05617C2.38262 2.45002 2.68082 2.86313 2.97814 3.27503C3.555 4.0742 4.12855 4.86879 4.90654 5.50922C6.11679 6.50576 7.44522 6.89045 8.89855 7.3113C8.95466 7.32755 9.01096 7.34385 9.06745 7.36025C9.75593 7.55975 10.3544 7.85525 10.9034 8.20026C12.3464 7.14574 13.9738 6.44373 15.6538 6.15423C15.1423 5.01571 14.4253 3.93869 13.4893 3.00268ZM7.54648 16.4894C7.76998 14.3159 8.82296 12.1903 10.5104 10.5028C14.0248 6.99124 19.2342 6.48423 22.1232 9.37778C25.0136 12.2683 24.5096 17.4779 20.9967 20.991C19.3092 22.6785 17.1838 23.7315 15.0103 23.9565C14.7208 23.985 14.4343 24 14.1538 24C12.2849 24 10.6154 23.3445 9.38544 22.1145C7.96947 20.7 7.31549 18.7019 7.54648 16.4894ZM12.6869 18.2729C13.8388 17.3939 15.0853 17.0459 16.4413 16.6754C19.8522 15.7394 21.5457 12.8938 21.9432 9.55778C21.6184 9.94944 21.3224 10.3598 21.0273 10.7688C20.4487 11.5709 19.8735 12.3681 19.0917 13.0108C17.8778 14.009 16.5463 14.3943 15.0864 14.8168L14.9308 14.8619C11.5934 15.8309 9.94343 18.6524 9.56244 21.936C9.89121 21.541 10.1924 21.1309 10.492 20.7229C11.1423 19.8374 11.7852 18.962 12.6869 18.2729Z" fill="#0E8784"/>
    </svg>
        `,
    className: 'vacancy__item-icon-bg-coffee',
    location: 'Singapore',
    webSite: 'coffeeroasters.ru',
    webSiteAddress: 'https://coffeeroasters.ru/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
  {
    id: 22,
    vacancyName: 'Senior Devops Engineer',
    date: '4',
    time: 'd',
    employment: 'Freelance',
    employer: 'Coffeeroasters',
    iconHTML: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4893 3.00268C9.97493 -0.508874 4.76554 -1.01438 1.87661 1.87766C-1.01383 4.76821 -0.508337 9.97779 3.00008 13.4908C3.93606 14.4269 5.01454 15.1424 6.15301 15.6554C6.52651 13.4848 7.59748 11.3983 9.22344 9.68528C8.68496 9.49328 8.13297 9.33128 7.55698 9.17377C4.14606 8.23776 2.4511 5.39222 2.05511 2.05617C2.38262 2.45002 2.68082 2.86313 2.97814 3.27503C3.555 4.0742 4.12855 4.86879 4.90654 5.50922C6.11679 6.50576 7.44522 6.89045 8.89855 7.3113C8.95466 7.32755 9.01096 7.34385 9.06745 7.36025C9.75593 7.55975 10.3544 7.85525 10.9034 8.20026C12.3464 7.14574 13.9738 6.44373 15.6538 6.15423C15.1423 5.01571 14.4253 3.93869 13.4893 3.00268ZM7.54648 16.4894C7.76998 14.3159 8.82296 12.1903 10.5104 10.5028C14.0248 6.99124 19.2342 6.48423 22.1232 9.37778C25.0136 12.2683 24.5096 17.4779 20.9967 20.991C19.3092 22.6785 17.1838 23.7315 15.0103 23.9565C14.7208 23.985 14.4343 24 14.1538 24C12.2849 24 10.6154 23.3445 9.38544 22.1145C7.96947 20.7 7.31549 18.7019 7.54648 16.4894ZM12.6869 18.2729C13.8388 17.3939 15.0853 17.0459 16.4413 16.6754C19.8522 15.7394 21.5457 12.8938 21.9432 9.55778C21.6184 9.94944 21.3224 10.3598 21.0273 10.7688C20.4487 11.5709 19.8735 12.3681 19.0917 13.0108C17.8778 14.009 16.5463 14.3943 15.0864 14.8168L14.9308 14.8619C11.5934 15.8309 9.94343 18.6524 9.56244 21.936C9.89121 21.541 10.1924 21.1309 10.492 20.7229C11.1423 19.8374 11.7852 18.962 12.6869 18.2729Z" fill="#0E8784"/>
    </svg>
        `,
    className: 'vacancy__item-icon-bg-coffee',
    location: 'Singapore',
    webSite: 'coffeeroasters.ru',
    webSiteAddress: 'https://coffeeroasters.ru/',
    aboutCompany:
      'We are is a decentralized money market for digital asset renting. It was created with the idea in mind to help projects achieve a more efficient tokenomics, scale theirecosystem and establish a bi-directional loyalty relationship with community. It does so,by utilizing IQ Subscriptions with a cross-mix of renting & holding mechanics.We envision that in the future, every service provider will find a place for HODLium in itsbusiness model.',
    requirementsText:
      'For our next expansion we are seeking out for the best talent to fit our mindset, alignedwith the ultimate vision. Are you a geek, an abstract thinker, problem solver and abadass engineer that is deep in the Blockchain? If so and you are ready to shape thefuture of Blockchain - join us!',
    requirements: [
      '5+ years of hands-on experience in designing, developing, testing and supporting applications of different types. Your stack includes NodeJS (TypeScript).',
      '3+ years of experience working with Blockchains (running & maintaining nodes of EVM compatible Blockchains, experience with web3 APIs, understanding of architectural concepts etc).',
      '2+ years of experience of designing, developing, testing and maintaining smart contract systems with Solidity. You have worked with (or at least heard of) truffle, hardhat, ganache CLI, geth, and remix.',
      'Familiarity with decentralized systems and parallel computing.',
      'Minimum understanding of Crypto Industry and other Blockchain Projects (DApps, DeFi Protocols etc).',
      'Tireless problem-solver, acting autonomously, participating in discussions and actively proposing solutions.',
    ],
    whatToDoText:
      'As a Lead Software Engineer, you will build high-quality web front-end components for the platform that are fast, reliable, well-tested, easy to use, and visually pleasing. You will solve complex frontend engineering tasks for the cloud-based application for the graphics-intensive product.',
    whatToDo: [
      'Developing software systems for subscriptions management or CRM solutions.',
      'Prior experience deploying complex smart contract systems to the Ethereum (or alike) MainNets.',
      'Deep understanding of the underlying Ethereum Virtual Machine, as compilation from high level language to bytecode, the EVM execution model, memory layout etc.',
      'Familiarity with common smart contract development design patterns, industry standards (ERCs and EIPs) and best practices. Understanding typical smart contract security issues, vulnerabilities (e.g. reentrancy) and potential mitigations.',
      'Ability to implement maths in Solidity.',
      'Various hands-on experience with Ethereum, Binance Smart Chain and Polygon.',
    ],
  },
]);

export default data;
