import React, { Fragment, useContext, useEffect } from 'react';
import Banner from './banner.png';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

const Home = props => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/userdashboard');
    }
  });

  return (
    <Fragment>
      <div className='container content'>
        <div className='grid-2 mb-10' id='home'>
          <div className='my-3'>
            <h1 style={{ fontSize: '4em', color: '#476875' }}>
              Make Up To 200% Profit On Your Bitcoin Investment In 7 Days.
            </h1>
            <p style={{ fontWeight: 'bold' }}>
              Earn Guaranteed Stable Returns from Professional Bitcoin Trading
              Experts. Make Up To 200% Profit On Your Bitcoin Investment In 7
              Days.
            </p>
            <Link to='/register'>
              <input
                type='submit'
                className='btn btn-dark'
                style={{
                  backgroundColor: '#478192',
                  width: '160px',
                  height: '50px',
                  borderRadius: '10px'
                }}
                value='Sign Up'
              />
            </Link>
          </div>
          <div>
            <img src={Banner} alt='banner' />
          </div>
        </div>
        <div className='grid-3'>
          <div
            className='card'
            style={{
              borderRadius: '10px',
              backgroundColor: '#478192',
              color: '#ffffff',
              textAlign: 'center'
            }}
          >
            <h2>Users</h2>
            <i className='fas fa-users' style={{ fontSize: '65px' }} />
            <h1>100K+</h1>
          </div>
          <div
            className='card'
            style={{
              borderRadius: '10px',
              backgroundColor: '#478192',
              color: '#ffffff',
              textAlign: 'center'
            }}
          >
            <h2>Deposit</h2>
            <i className='far fa-money-bill-alt' style={{ fontSize: '65px' }} />
            <h1>$200K+</h1>
          </div>

          <div
            className='card'
            style={{
              borderRadius: '10px',
              backgroundColor: '#478192',
              color: '#ffffff',
              textAlign: 'center'
            }}
          >
            <h2>Withdraw</h2>
            <i className='fas fa-download' style={{ fontSize: '65px' }} />
            <h1>$500K+</h1>
          </div>
        </div>
        {/* Features Section */}
        <div className='my-5' id='service'>
          <h1 style={{ fontSize: '2.5em', textAlign: 'center' }}>
            Our Features
          </h1>
          <p
            style={{
              paddingLeft: '1em',
              fontSize: '1.2em',
              textAlign: 'center'
            }}
          >
            Crypto Bit is a company that owns both vast mining and trading
            centers around the world. With this we are able to leverage on our
            abilities to offer our customers high returns and constant
            investment growth.
          </p>

          <div className='grid-2' style={{ marginTop: '3em' }}>
            <div className='card' style={styleCard}>
              <h1>
                <i className='fab fa-bitcoin' /> Cryptobit
              </h1>
              <p>
                With our cutting edge technology and experienced professionals
                who have what it takes to offer real time accurate results on
                anything relating to your investment portfolio. We pride in our
                ability to use advanced systems that process and deliver
                information you can count on in making investing decisions any
                time. Our company is engaged in a full investment service
                focused on the Bitcoin trading market for more than 3 years.
              </p>
            </div>
            <div className='card' style={styleCard}>
              <h1>
                {' '}
                <i className='fa fa-lock' /> Secure
              </h1>
              <p>
                Crypto Bit uses advanced security systems that give our
                customers the confidence that their personal information is kept
                safely. We use advanced encryption techniques and secure storage
                systems to keep your personal data and financial data safe from
                unauthorized access.
              </p>
            </div>
          </div>

          <div className='grid-2'>
            <div className='card' style={styleCard}>
              <h1>
                {' '}
                <i className='fa fa-bars' /> Profitable
              </h1>
              <p>
                We take great pride in maintaining a secure, profitable
                environment where our clients can growth their investment with
                minimal fuss, low risk and optimal convenience.
              </p>
            </div>
            <div className='card' style={styleCard}>
              <h1>
                <i className='fa fa-life-ring' /> Support
              </h1>
              <p>
                We know how important it is for you to communicate to us; that’s
                why we offer 24/7 customer support to ensure that you are fully
                aware of everything relating to your crypto investment
                portfolio. We strive to be the most responsive in responding to
                clients’ queries to keep them happy. Your concerns are our #1
                priority.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <section
        className='bg-primary text-center'
        style={{ padding: '34px 40px 39px' }}
      >
        <h1 className='my-3' style={{ fontSize: '2.8em' }} id='about'>
          About Us
        </h1>
        <p style={{ fontSize: '1.2em' }}>
          Crypto Bit is a bitcoin network that improves our wealth management
          system, offering assigned currency exchanges, identity protection, and
          profit sharing by managing a network that pays partners up to 200%
          Profit for a 7 days investment. Our mission is to act as the catalyst
          for widespread Crypto currency adoption and innovation. With our
          cutting-edge technology and experiences that cut across decades, we
          manage the wealth of billionaires, high net-worth individuals and
          companies within a network of offshore banking facilities that
          provides maximum privacy for our investors/fund's owners.
        </p>
        <Link to='/register'>
          <input
            type='submit'
            className='btn btn-dark'
            style={{
              backgroundColor: '#478192',
              width: '160px',
              height: '70px',
              borderRadius: '10px'
            }}
            value='Join Now'
          />
        </Link>
      </section>

      <section
        className='text-center'
        style={{ backgroundColor: '#F0F8FF', padding: '34px 40px 39px' }}
      >
        <h1 className='my-1' style={{ fontSize: '2.8em' }}>
          How It's Work
        </h1>
        <p
          style={{
            paddingLeft: '1em',
            fontSize: '1.2em',
            justifyContent: 'center'
          }}
          className='my-1'
        >
          Crypto Bit adopt the privacy provided by the bitcoin network and add
          more layers to it by combining its decade-old financial system with
          the most-effective technology available today. It enters smart
          contracts with its clients and trustees to manage their funds for
          profit making. We scan the crypto currency market data for the most
          profitable coin to mine. Funds are then channelled through crypto
          trading and several other professional investment streams. The
          proprietary algorithm then switches in real time to mine the most
          profitable crypto coin.
        </p>
        <div className='grid-4'>
          <div className='card bg-white' style={{ borderRadius: '10px' }}>
            <i className='fa fa-credit-card' style={{ fontSize: '35px' }} />
            <h1>Step One</h1>
            <p>
              Choose from the various investment plans of your choice. When you
              have decided on your investment plan, Click on "START NOW".
            </p>
          </div>

          <div className='card bg-white' style={{ borderRadius: '10px' }}>
            <i className='fa fa-university' style={{ fontSize: '35px' }} />
            <h1>Step Two</h1>
            <p>
              Enter your Name, Phone Number, Email Address, Amount you want to
              invest and your BTC wallet address to receive earned profit, and
              then Click on "INVEST NOW".
            </p>
          </div>

          <div className='card bg-white' style={{ borderRadius: '10px' }}>
            <i className='far fa-money-bill-alt' style={{ fontSize: '35px' }} />
            <h1>Step Three</h1>
            <p>
              Deposit any amount (min $50 USD and max $500,000 USD) worth of
              bitcoin to our uniquely generated investment deposit address.
            </p>
          </div>

          <div className='card bg-white' style={{ borderRadius: '10px' }}>
            <i className='fab fa-bitcoin' style={{ fontSize: '35px' }} />
            <h1>Step Four</h1>
            <p>
              Now wait for the deposit to be confirmed, when the deposit payment
              transaction has received confirmation you will be added into
              system and your investment will start! It&#039;s that simple!
            </p>
          </div>
        </div>
      </section>
      {/* Investment Plan Section */}
      <section className='container' id='plan'>
        <h2 className='text-center my-3'>ALL INVESTMENT PLANS</h2>
        <div className='grid-3'>
          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>Basic Plan 1</h2>
            <h4 style={{ fontSize: '2.5em' }}>5%</h4>
            <span style={{ fontWeight: 'bold' }}>Daily / 5 Times </span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $50 - $900
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>

          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>Basic Plan 2</h2>
            <h4 style={{ fontSize: '2.5em' }}>10%</h4>
            <span style={{ fontWeight: 'bold' }}>Weekly / 0 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $1000 - $4000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>

          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>Basic Plan 3</h2>
            <h4 style={{ fontSize: '2.5em' }}>25%</h4>
            <span style={{ fontWeight: 'bold' }}>Monthly / 0 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $5000 - $10000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='grid-3'>
          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>PREMIUM DAILY PLAN 1</h2>
            <h4 style={{ fontSize: '2.5em' }}>10%</h4>
            <span style={{ fontWeight: 'bold' }}>Daily / 5 Times </span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br />
                $10000 - $20000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>

          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>PREMIUM WEEKLY PLAN 2</h2>
            <h4 style={{ fontSize: '2.5em' }}>15%</h4>
            <span style={{ fontWeight: 'bold' }}>Weekly / 0 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $6000 - $10000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>

          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>PREMIUM WEEKLY PLAN 3</h2>
            <h4 style={{ fontSize: '2.5em' }}>30%</h4>
            <span style={{ fontWeight: 'bold' }}>Monthly / 0 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $25000 - $100000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='grid-3'>
          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>VIP PLAN 1</h2>
            <h4 style={{ fontSize: '2.5em' }}>30%</h4>
            <span style={{ fontWeight: 'bold' }}>Hourly / 5 Times </span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br />
                $100000 - $200000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>

          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>VIP PLAN 2</h2>
            <h4 style={{ fontSize: '2.5em' }}>40%</h4>
            <span style={{ fontWeight: 'bold' }}>Weekly / 0 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $250000 - $350000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>

          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>VIP PLAN 3</h2>
            <h4 style={{ fontSize: '2.5em' }}>50%</h4>
            <span style={{ fontWeight: 'bold' }}>Monthly / 0 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $400000 - $1000000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='grid-3'>
          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>PRIVATE INVESTMENT PLAN 1</h2>
            <h4 style={{ fontSize: '2.5em' }}>65%</h4>
            <span style={{ fontWeight: 'bold' }}>Hourly / 168 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br />
                $100000 - $500000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>

          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>PRIVATE INVESTMENT PLAN 2</h2>
            <h4 style={{ fontSize: '2.5em' }}>95%</h4>
            <span style={{ fontWeight: 'bold' }}>Hourly / 168 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $600000 - $1000000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>

          <div
            className='card text-center py-2'
            style={{ borderRadius: '10px', backgroundColor: '#F0F8FF' }}
          >
            <h2>PRIVATE INVESTMENT PLAN 3</h2>
            <h4 style={{ fontSize: '2.5em' }}>125%</h4>
            <span style={{ fontWeight: 'bold' }}>Hourly / 336 Times</span>
            <hr />

            <ul className='py-3'>
              <li style={{ fontWeight: 'bold' }}>Features</li>
              <li>
                Invest Min-Max Amount: <br /> $1100000 - $50000000
              </li>
              <li>
                <span className='badge badge-success'>
                  Capital Will Return Back
                </span>
              </li>
              <li>24/7 Support</li>
            </ul>
            <Link
              to='/register'
              className='btn btn-primary'
              style={{ width: '200px', height: '35px', borderRadius: '10px' }}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className='bg-primary' style={{ padding: '34px 40px 39px' }}>
        <h1 className='text-center' id='faq'>
          Frequently Asked Questions
        </h1>
        <p className='text-center'>Cryptobit Questions and Answer</p>

        <div className='card'>
          <input className='toggle-box' id='identifier-1' type='checkbox' />
          <label htmlFor='identifier-1'>
            How Do I Check My Investment Status?
          </label>
          <div>
            Check by Logging on to your account Click Investment, All details of
            progress on your Investment will be displayed.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-2' type='checkbox' />
          <label htmlFor='identifier-2'>
            {' '}
            Once My Investment Plan Is On Can I Stop It And Withdraw My Money?
          </label>
          <div>
            No you can't once an investment plan is bought it has to complete
            the duration before funds can be available.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-3' type='checkbox' />
          <label htmlFor='identifier-3'> How Secure Is Your Platform?</label>
          <div>
            Our Platform will be secured through multiple security features and
            systems specially tailored to prevent the risk of both internal and
            cyber-attacks. For security reasons, it is not detailed further at
            this stage.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-4' type='checkbox' />
          <label htmlFor='identifier-4'>
            {' '}
            Can I Lose Some Or All My Investment Money?
          </label>
          <div>
            No. Investment made on our platform is safe there is no loss of
            Capital Invested but along the line when trade and Mining profit are
            reducing we will reduce percentage profit from affected Investment
            plans and all users will be notified before this reduction is
            implemented.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-5' type='checkbox' />
          <label htmlFor='identifier-5'>
            {' '}
            What Countries Is Restricted To Invest In CRYPTOBIT?
          </label>
          <div>
            We are serving the global market and have not set any restrictions.
            However, we have no control over regional regulations and
            restrictions.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-6' type='checkbox' />
          <label htmlFor='identifier-6'> What Is Interest Wallet?</label>
          <div>
            Interest Wallet allows for storing all profits from investment by
            user. This wallet allows transfer to external wallets by Clicking
            WITHDRAW-Withdraw Now, enter amount to withdraw you will be
            requested to provide payment details then click CONFIRM WITHDRAW.
            Funds from this wallet can be used also to buy Investment Plans.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-7' type='checkbox' />
          <label htmlFor='identifier-7'> What Is Deposit Wallet?</label>
          <div>
            Deposit Wallet enables a registered Crypto Bit Account user easily
            deposit bitcoin into the wallet. This wallet is designed to buy
            Investment plans and also make transfer to registered Crypto Bit
            User.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-8' type='checkbox' />
          <label htmlFor='identifier-8'> How Do I Make Deposit?</label>
          <div>
            To make deposit you must be registered and then Login and Click
            DEPOSIT and then Deposit Now in the scroll down menu, choose the
            Bitcoin payment option, Enter amount to deposit confirm and, A BTC
            address will be provided for you to send payment once payment has
            completed the necessary confirmation your wallet will be funded
            automatically and you will receive a notification via email or SMS.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-9' type='checkbox' />
          <label htmlFor='identifier-9'> How To Create An Account?</label>
          <div>
            Please Click the Crypto Dock link https://cryptobit.com/, Visit
            Crypto Bit "Account and Signup" button on their site’s homepage.,
            Complete the Registration Form with by entering your details like
            (Names, Username, Password, Email and Phone Number) then – Click
            Submit to complete the process.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-10' type='checkbox' />
          <label htmlFor='identifier-10'> How Does Bitcoin Works?</label>
          <div>
            From a user perspective, Bitcoin is nothing more than a mobile app
            or computer program that provides a personal Bitcoin wallet and
            allows a user to send and receive bitcoins with them. This is how
            Bitcoin works for most users.
          </div>
        </div>

        <div className='card'>
          <input className='toggle-box' id='identifier-11' type='checkbox' />
          <label htmlFor='identifier-11'> What Is Cryptocurrency?</label>
          <div>
            Cryptocurrency is a form of payment that can be exchanged online for
            goods and services. Many companies have issued their own currencies,
            often called tokens, and these can be traded specifically for the
            good or service provides.
          </div>
        </div>
      </section>

      <footer className='app-footer'>
        <p>© CRYPTO BIT 2019 - All Rights Reserved</p>
      </footer>
    </Fragment>
  );
};

const styleCard = {
  borderRadius: '10px',
  boxShadow: '0px 5px 10px 0px',
  padding: '34px 40px 39px'
};

export default Home;
