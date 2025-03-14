import "./Home.css";
const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="para">
        <ol>
          <li>
            About Me
            <p>
              This is Abdul Razzak. I have done my Bachelors in Computer Science
              and have more than 10 years of overall experiences ranging from
              support work to programming. I started my career in Intelligroup
              Asia (now overtaken by NTTDATA). I use to run a SAP based upgrade
              tool for thier clients. Then I moved to Saudi Arabia where I did
              some VBA and Microsoft Access work along with maintaing of
              fingerprint based Attendance System. In 2018, I returned back to
              India and started working in a Startup company on HTML, CSS,
              JavaScript and React.
            </p>
            <br />
            <p>
              Then in December 2020, I joined ADEK, through a consultancy. This
              was remote based work which I did by being in India. I worked as a
              Frontend Developer in ADEK until Feb 2024. Being here I did
              programming as well as support work. I gained some experience as
              Frontend Developer and enhanced my React skills. I am comfortable
              in working with TypeScript. I believe I am still a learner and
              have passion and will to learn and refine my craft as I proceed
              forward.
            </p>
          </li>

          <li>
            About this Demo App
            <p>
              This is very basic Demo App developed in React using TypeScript.
              Its functionality can be extended and there is scope of
              improvement in the present implementaion which I did in limited
              time frame.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
