import { usePrefix } from "../hooks/usePrefix";
import { useConvertValue } from '../hooks/useConvertValue';
import './Demo.scss';

import { Button } from "../components/Button/Button";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { GoalsCard } from "../components/GoalsCard/GoalsCard";
import { ProgressBar } from "../components/ProgressBar/Progressbar";
import { Networth } from "../components/Networth/Networth";
import { Budget } from "../components/Budget/Budget";
import { TimeSelect } from "../components/TimeSelect/TimeSelect";
import { Chart } from "../components/Chart/Chart";
import { Broker } from "../components/Broker/Broker";
import { ShoppingCartOutlined, Payments, AccountBalanceOutlined, BarChartOutlined, WatchOutlined, CreditCardOutlined, DescriptionOutlined, ShoppingCart, Luggage, Bolt, DirectionsBus, Celebration, ShoppingBasket, Payment, MoreHoriz, AddOutlined, } from '@mui/icons-material';
import Profile from '../icons/Profile.svg';

import Tesla from '../icons/Tesla_Model_S-01.jpg'
import Villa from '../icons/Villa.svg';
import Betong from '../icons/LouisBetong.svg';
import N26 from '../icons/N26.svg';
import C24 from '../icons/C24.svg';
import KsK from '../icons/KsK.svg';
import Bison from '../icons/image-1.svg';
import Trade from '../icons/image.svg';
import Postbank from '../icons/Postbank.svg';
import Netflix from '../icons/netflix.svg';
import Disney from '../icons/disney.svg';
import Amazon from '../icons/amazon.svg';
import Aok from '../icons/aok.svg';
import Getsafe from '../icons/getsafe.svg';
import Wgv from '../icons/wgv.svg';


import { useEffect, useMemo, useState } from "react";
import { AccountCard } from "../components/AccountCard/AccountCard";


export function Demo() {

  const [currentPage, setCurrentPage] = useState(0);
  const [activeBar, setActiveBar] = useState(0);
  const [reset1, setReset1] = useState(false);
  const [reset2, setReset2] = useState(false);
  const [selectedCard, setSelectedCard] = useState<GoalProps | null>(null);

  useEffect(() => {
    console.log(currentPage)
  }, [currentPage]);

  useEffect(() => {
    if (activeBar === 1) {
      setReset1(false);
      setReset2(true);
    } else if (activeBar === 2) {
      setReset2(false);
      setReset1(true);
    } else {
      setReset1(true);
      setReset2(true);
    }
  }, [activeBar]);

  const renderScreen = () => {
    console.log(currentPage);
    switch (currentPage) {
      case 0:
        return <HomeScreen onCardClick={(card: GoalProps) => {
          setSelectedCard(card);
          setCurrentPage(7);
        }} />;
      case 1:
        return <AccountScreen />;
      case 2:
        return <ChartScreen onChartClick={() => {
          setCurrentPage(8);
        }} />;
      case 3:
        return <div>Kredite Screen</div>;
      case 4:
        return <FixScreen />;
      case 5:
        return <BudgetScreen />;
      case 6:
        return <div>Kredite Screen</div>;
      case 7:
        return selectedCard ? <GoalDetail {...selectedCard} /> : <div>Kein Ziel ausgewählt</div>;
      case 8:
        return <ChartDetails />;

      default:
        return <HomeScreen onCardClick={(card: GoalProps) => {
          setSelectedCard(card);
          setCurrentPage(7);
        }} />;
    }
  };

  const prefix = usePrefix();

  function returnHome() {
    setActiveBar(0);
    setCurrentPage(0);
  }

  return (
    <div className={`${prefix}--main`}>
      <NavigationBar
        items={[
          { icon: <DescriptionOutlined />, label: 'Fixkosten', url: '/Fixkosten', isActive: false, position: true },
          { icon: <Payments />, label: 'Budgets', url: '/Budgets', isActive: false, position: true },
          { icon: <CreditCardOutlined />, label: 'Kredite', url: '/Kredite', isActive: false, position: true },
        ]}
        reset={reset1}
        setActiveBar={setActiveBar}
        setCurrentPage={setCurrentPage}
        top={true} />

      {renderScreen()}

      {currentPage !== 0 && (
        <div className={`${prefix}--button-wrapper`} >
          <Button
            round={true}
            onClick={returnHome}
          >
            <img src={Profile} alt="Profilepicture" />
          </Button>
        </div>
      )}

      <NavigationBar items={[
        { icon: <AccountBalanceOutlined />, label: 'Konten', url: '/Konten', isActive: false, position: false },
        { icon: <BarChartOutlined />, label: 'Anlagen', url: '/Anlagen', isActive: false, position: false },
        { icon: <WatchOutlined />, label: 'Objekte', url: '/Objekte', isActive: false, position: false },
      ]}
        reset={reset2}
        setActiveBar={setActiveBar}
        setCurrentPage={setCurrentPage}
        top={false} />
    </div>
  );
}

type HomeScreenProps = {
  onCardClick: (card: GoalProps) => void;
};

function HomeScreen({ onCardClick }: HomeScreenProps) {

  const prefix = usePrefix();

  const cardData = [
    {
      title: "Tesla Model S",
      img: Tesla, //<img src={Tesla} alt="picture of redtesla car" />,
      description: "Das Tesla Model S begeistert mich mit seiner unglaublichen Beschleunigung und den beeindruckenden Reichweiten, die perfekt für lange Fahrten sind. Das minimalistische Design und die fortschrittliche Technologie, wie der große Touchscreen und das autonome Fahren, machen jede Fahrt zu einem futuristischen Erlebnis. Außerdem überzeugt mich die Nachhaltigkeit durch den rein elektrischen Antrieb, ohne dabei auf Luxus oder Leistung verzichten zu müssen. So What",
      date: "wahrsch. bis 2030",
      progress: 92990 * 0.3,
      price: 92990,
    },
    {
      title: "Villa in Madeira am Meer",
      img: Villa, //<img src={Villa} alt="Villa in Madeira am Meer" />,
      description: "Eine luxuriöse Villa auf den Madeira, umgeben von kristallklarem Wasser, mit direktem Zugang zum Ozean. Die Villa bietet moderne Eleganz, großzügige Räume, ein privates Infinity-Pool, Sonnendecks und gläserne Wände, die einen ungestörten Blick auf den Sonnenuntergang ermöglichen. Perfekt für Ruhe und Erholung in paradiesischer Umgebung.",
      date: "wahrsch. bis 2050",
      progress: 0,
      price: 1000000,
    },
    {
      title: "Louis Beton Tasche",
      img: Betong, //<img src={Betong} alt="Louis Beton Handtasche" />,
      description: "Description for Louis Beton Handtasche",
      date: "wahrsch. bis 2053",
      progress: 0,
      price: 2500,
    }
  ];

  return (
    <main className={`${prefix}--content-screens`}>
      <section className={`${prefix}--100section`}>
        <header className={`${prefix}--100header`}>
          <h2>Networth</h2>
        </header>
        <Networth backImg={Profile}
          progress={32000}
          value={1140000}
          size={300} />
        <ProgressBar
          isValue={2200}
          maxValue={4000}
          showLabel={true}
          remaining={true}
          barLabels={true}
          showPercent={false} />
      </section>
      <section className={`${prefix}--100section`}>
        <header className={`${prefix}--100header`}>
          <h2>Ziele</h2>
        </header>
        <Wrapper>
          {cardData.map((card, index) => (
            <GoalsCard
              key={index}
              title={card.title}
              img={card.img}
              description={card.description}
              date={card.date}
              progress={card.progress}
              price={card.price}
              onClick={() => onCardClick(card)}
            />
          ))}
        </Wrapper>
        <div className={`${prefix}--spacer-md`}></div>
        <Button><AddOutlined /></Button>
      </section>
    </main>
  )
}

type GoalProps = {
  title: string;
  img: string;
  description: string;
  date: string;
  progress: number;
  price: number;
}

function GoalDetail({ title, img, description, date, progress, price }: GoalProps) {

  const prefix = usePrefix();
  const convertValue = useConvertValue();

  console.log(progress, price);

  return (
    <main className={`${prefix}--content-screens`}>
      <header className={`${prefix}--100header`}>
        <h2>{title}</h2>
      </header>
      <img src={img} alt="" className={`${prefix}--goal-detail-img`} />
      <ProgressBar isValue={progress} maxValue={price} remaining={false} barLabels={false} showLabel={true} showPercent={false} showValue={false} />
      <div className={`${prefix}--goal-content`}>
        <p className={`${prefix}--goal-detail-amount`}>Betrag: {convertValue(price)}</p>
        <p className={`${prefix}--goal-detail-date`}>{date}</p>
        <p className={`${prefix}--goal-detail-desc`}>Beschreibung: </p>
        <p className={`${prefix}--goal-detail-desscription`}>{description}</p>
      </div>
    </main>
  );
}

function AccountScreen() {

  const prefix = usePrefix();
  const convertValue = useConvertValue();


  const accountData = [
    {
      title: "N26",
      img: N26, //<img src={N26} alt="logo of N26" />,
      description: "IBAN: DE35********8426",
      balance: 135,
      liquid: true
    },
    {
      title: "C24",
      img: C24, //<img src={C24} alt="logo of C24" />,
      description: "IBAN: DE25********1483",
      balance: 35,
      liquid: true
    },
    {
      title: "Kreissparkasse",
      img: KsK, //<img src={KsK} alt="logo of KsK" />,
      description: "IBAN: DE64********8524",
      balance: 4.99,
      liquid: true
    },
  ]
  const accountData2 = [
    {
      title: "Postbank",
      img: Postbank, //<img src={Postbank} alt="logo of N26" />,
      description: "IBAN: DE12********5385",
      balance: 6.112,
      liquid: false
    },
    {
      title: "C24",
      img: C24, //<img src={C24} alt="logo of C24" />,
      description: "IBAN: DE22********1482",
      balance: 4000,
      liquid: false
    },
  ]

  const liquidBalance = convertValue(accountData.reduce((total, account) => {
    if (account.liquid) {
      return total + account.balance;
    }
    return total;
  }, 0));
  const nonLiquidBalance = convertValue(accountData2.reduce((total, account) => {
    if (account.liquid === false) {
      return total + account.balance;
    }
    return total;
  }, 0));

  return (
    <main
      id="konten-panel"
      role="tabpanel"
      aria-labelledby="konten-tab"
      className={`${prefix}--content-screens`}>
      <section className={`${prefix}--100section`}>
        <header className={`${prefix}--liquid`}>
          <h2>Liquide Konten</h2>
          <span className={`${prefix}--balance-sum`}>{liquidBalance}</span>
        </header>
        <Wrapper>
          {accountData.map((card, index) => (
            <AccountCard
              key={index}
              title={card.title}
              img={card.img}
              description={card.description}
              balance={card.balance}
              liquid={card.liquid}
            />
          ))}
        </Wrapper>
      </section>
      <section tabIndex={0} className={`${prefix}--100section ${prefix}--spacer-md-bottom`}>
        <header className={`${prefix}--liquid not`}>
          <h2>Illiquide Konten</h2>
          <span className={`${prefix}--balance-sum`}>{nonLiquidBalance}</span>
        </header>
        <Wrapper>
          {accountData2.map((card, index) => (
            <AccountCard
              key={index}
              title={card.title}
              img={card.img}
              description={card.description}
              balance={card.balance}
              liquid={card.liquid}
            />
          ))}
        </Wrapper>
      </section>
      <Button><AddOutlined /></Button>
    </main>
  )
}

function FixScreen() {

  const prefix = usePrefix();

  const streamingData = [
    {
      title: "Netflix",
      img: Netflix, //<img src={Netflix} alt="logo of Netflix" />,
      description: "kündbar bis 22.03.25",
      balance: 13.99,
      total: 250
    },
    {
      title: "Disney+",
      img: Disney, //<img src={Disney} alt="logo of Disney" />,
      description: "kündbar bis 15.04.25",
      balance: 8.99,
      total: 150
    },
    {
      title: "Amazon Prime",
      img: Amazon, //<img src={Amazon} alt="logo of Amazon" />,
      description: "kündbar bis 10.05.25",
      balance: 8.99,
      total: 500
    },
  ];

  const insuranceData = [
    {
      title: "Aok",
      img: Aok, //<img src={Aok} alt="logo of Aok" />,
      description: "kündbar bis 30.06.25",
      balance: 486,
      total: 10206
    },
    {
      title: "Getsafe+",
      img: Getsafe, //<img src={Getsafe} alt="logo of Getsafe" />,
      description: "kündbar bis 18.07.25",
      balance: 10,
      total: 310
    },
    {
      title: "Wgv",
      img: Wgv, //<img src={Wgv} alt="logo of Wgv" />,
      description: "kündbar bis 05.08.25",
      balance: 20,
      total: 350
    },
  ];

  return (
    <main
      id="fixkosten-panel"
      role="tabpanel"
      aria-labelledby="fixkosten-tab"
      className={`${prefix}--content-screens`}>

      <section className={`${prefix}--100section ${prefix}--spacer-xl-bottom `}>
        <header className={`${prefix}--100header`}>
          <h2>Streaming</h2>
        </header>
        <Wrapper>
          {streamingData.map((card, index) => (
            <AccountCard
              key={index}
              title={card.title}
              img={card.img}
              description={card.description}
              balance={card.balance}
              total={card.total}
            />
          ))}
        </Wrapper>
      </section>
      <section className={`${prefix}--100section ${prefix}--spacer-md-bottom`}>
        <header className={`${prefix}--100header`}>
          <h2>Versicherung</h2>
        </header>
        <Wrapper>
          {insuranceData.map((card, index) => (
            <AccountCard
              key={index}
              title={card.title}
              img={card.img}
              description={card.description}
              balance={card.balance}
              total={card.total}
            />
          ))}
        </Wrapper>
      </section>
      <Button><AddOutlined /></Button>
    </main>
  );
}

function BudgetScreen() {

  const prefix = usePrefix();

  const budgetData = useMemo(() => [
    {
      title: "Reisen",
      icon: <Luggage />,
      size: 80,
      timeFrame: 1,
      monthVal: 500,
      weeklyProgress: 120,
      monthlyProgress: 300,
      yearlyProgress: 1200,
    },
    {
      title: "Shopping",
      icon: <ShoppingCart />,
      size: 80,
      timeFrame: 1,
      monthVal: 400,
      weeklyProgress: 100,
      monthlyProgress: 250,
      yearlyProgress: 1500,
    },
    {
      title: "Strom",
      icon: <Bolt />,
      size: 80,
      timeFrame: 1,
      monthVal: 450,
      weeklyProgress: 110,
      monthlyProgress: 280,
      yearlyProgress: 2000,
    },
    {
      title: "ÖPNV",
      icon: <DirectionsBus />,
      size: 80,
      timeFrame: 1,
      monthVal: 600,
      weeklyProgress: 150,
      monthlyProgress: 400,
      yearlyProgress: 2400,
    },
    {
      title: "Party",
      icon: <Celebration />,
      size: 80,
      timeFrame: 1,
      monthVal: 550,
      weeklyProgress: 140,
      monthlyProgress: 350,
      yearlyProgress: 2700,
    },
    {
      title: "Zeug",
      icon: <ShoppingBasket />,
      size: 80,
      timeFrame: 1,
      monthVal: 520,
      weeklyProgress: 130,
      monthlyProgress: 330,
      yearlyProgress: 2800,
    },
    {
      title: "Bargeld",
      icon: <Payment />,
      size: 80,
      timeFrame: 1,
      monthVal: 480,
      weeklyProgress: 120,
      monthlyProgress: 310,
      yearlyProgress: 2900,
    },
    {
      title: "Sonstiges",
      icon: <MoreHoriz />,
      size: 80,
      timeFrame: 1,
      monthVal: 510,
      weeklyProgress: 125,
      monthlyProgress: 320,
      yearlyProgress: 3000,
    },
    {
      title: "shopping",
      icon: <ShoppingCartOutlined />,
      size: 80,
      timeFrame: 1,
      monthVal: 600,
      weeklyProgress: 150,
      monthlyProgress: 400,
      yearlyProgress: 3500,
    },
  ], []);


  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const weeksCount = Math.round(getDaysInMonth(currentYear, currentMonth) / 7);

  const [Time, setTime] = useState(2);

  const [totalProgress, setTotalProgress] = useState(0);

  const [totalValue, setTotalValue] = useState(0);


  useEffect(() => {
    switch (Time) {
      case 1:
        setTotalProgress(budgetData.reduce((sum, budget) => sum + budget.weeklyProgress, 0));
        setTotalValue((budgetData.reduce((sum, budget) => sum + (budget.monthVal / weeksCount), 0)));
        break;
      case 2:
        setTotalProgress(budgetData.reduce((sum, budget) => sum + budget.monthlyProgress, 0));
        setTotalValue((budgetData.reduce((sum, budget) => sum + budget.monthVal, 0)));
        break;
      case 3:
        setTotalProgress(budgetData.reduce((sum, budget) => sum + budget.yearlyProgress, 0));
        setTotalValue((budgetData.reduce((sum, budget) => sum + (budget.monthVal * 12), 0)));
        break;
      default:
        setTotalProgress(0);
        break;
    }
  }, [Time, budgetData, weeksCount]);


  console.log(totalProgress);

  return (
    <main
      id="budgets-panel"
      role="tabpanel"
      aria-labelledby="budgets-tab"
      className={`${prefix}--content-screens`}>
      {/* <section className={`${prefix}--100section`}> */}
      <header className={`${prefix}--100header`}>
        <h2>Budgets</h2>
      </header>
      <ProgressBar isValue={totalProgress}
        maxValue={totalValue}
        showPercent={false}
        showLabel={true}
        remaining={true}
        barLabels={true}></ProgressBar>
      <div className={`${prefix}--spacer-lg`}></div>
      <TimeSelect extended={false} setTime={setTime}></TimeSelect>
      <section className={`${prefix}--budgets-wrapper`}>
        {budgetData.map((budget, index) => (
          <Budget
            key={index}
            title={budget.title}
            icon={budget.icon}
            size={budget.size}
            timeFrame={Time}
            monthVal={budget.monthVal}
            weeklyProgress={budget.weeklyProgress}
            monthlyProgress={budget.monthlyProgress}
            yearlyProgress={budget.yearlyProgress}
          />))}
      </section>
      {/* </section> */}
    </main>
  )
}


type ChartScreenProps = {
  onChartClick: () => void;
};


function ChartScreen({ onChartClick }: ChartScreenProps) {



  const prefix = usePrefix();

  const [TimeKrypto, setTimeKrypto] = useState(2);
  const [TimeAktien, setTimeAktien] = useState(2);

  const payedKrypto = 110;
  const isKrypto = 20;
  const payedAktien = 110;
  const isAktien = 115;

  return (

    <main id="anlagen-panel"
      role="tabpanel"
      aria-labelledby="anlagen-tab"
      className={`${prefix}--content-screens`}>
      {/* <div className={`${prefix}--spacer-md`}></div> */}

      <Broker items={[
        { src: Bison, description: 'Bison-broker' },
        { src: C24, description: 'C24-broker' },
        { src: Trade, description: 'Trade-broker' }
      ]} />
      <div className={`${prefix}--spacer-md`}></div>

      <section className={`${prefix}--100section`}>
        <header className={`${prefix}--100header ${prefix}--spacer-md-bottom`}>
          <h2>Aktien</h2>
          <div className={`${prefix}--chartWrapper`}>
            <span className={`${prefix}--chartValue`}>12.510 €</span>
            <span className={`${prefix}--chartValueLabel`} aria-label={`2.1% ${isAktien < payedAktien ? "verlust" : "gewinn"}`}>2,1%</span>
          </div>
        </header>
        <TimeSelect extended={true} setTime={setTimeAktien} color={isAktien < payedAktien} />
        <Chart data={{}} period={TimeAktien} isValue={115} payedValue={110} onclick={onChartClick} />
      </section>

      <section className={`${prefix}--100section`}>
        <header className={`${prefix}--100header ${prefix}--spacer-md-bottom`}>
          <h2>Krypto</h2>
          <div className={`${prefix}--chartWrapper`}>
            <span className={`${prefix}--chartValue`}>25.200 €</span>
            <span className={`${prefix}--chartValueLabelWarning`} aria-label={`5% ${isKrypto < payedKrypto ? "verlust" : "gewinn"}`}>5%</span>
          </div>
        </header>
        <TimeSelect extended={true} setTime={setTimeKrypto} color={isKrypto < payedKrypto} />
        <Chart data={{}} period={TimeKrypto} isValue={isKrypto} payedValue={payedKrypto} onclick={onChartClick} />
      </section>
    </main>
  )
}

function ChartDetails() {

  const prefix = usePrefix();

  const [Time, setTime] = useState(8);

  const accountData = [
    {
      title: "Amazon",
      img: Amazon,
      balance: 8000,
    },
    {
      title: "Netflix",
      img: Netflix,
      balance: 2310,
    },
    {
      title: "Disney",
      img: Disney,
      balance: 2190,
    }];

  const payedAktien = 110;
  const isAktien = 115;

  return (

    <main className={`${prefix}--content-screens`}>
      <header className={`${prefix}--100header ${prefix}--spacer-md-bottom`}>
        <h2 className={`${prefix}--chartTitle`}>Aktien</h2>
        <div className={`${prefix}--chartWrapper`}>
          <span className={`${prefix}--chartValue`}>12.510 €</span>
          <span className={`${prefix}--chartValueLabel`}>2.1%</span>
        </div>
      </header>
      <TimeSelect extended={true} setTime={setTime} color={isAktien < payedAktien} />
      <Chart data={{}} period={Time} isValue={isAktien} payedValue={payedAktien} />
      <Wrapper>
        {accountData.map((card, index) => (
          <AccountCard
            key={index}
            title={card.title}
            img={card.img}
            balance={card.balance}
          />
        ))}
      </Wrapper>

    </main>
  )
}