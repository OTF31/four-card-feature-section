import Card from "./components/Card";
import IconSupervisor from "./assets/icon-supervisor.svg";
import IconTeamBuilder from "./assets/icon-team-builder.svg";
import IconKarma from "./assets/icon-karma.svg";
import IconCalculator from "./assets/icon-calculator.svg";

const App = () => {
  return (
    <>
      <div
        role="application"
        className="min-h-screen flex items-center justify-center bg-VeryLigthGray pb-[70px]"
      >
        <div className="flex flex-col">
          <div className="font-Poppins text-center mt-[85px] px-7">
            <h1 className="font-[200] text-[1.52em]">
              Reliable, efficient delivery
            </h1>
            <h2 className="font-[600] text-VeryDarkBlue text-[1.52em]">
              Powered by Technology
            </h2>
            <p className="text-GrayishBlue mt-[16px] leading-6 text-[0.95em]">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>

          <div className="flex flex-col gap-[23px] mt-[75px]">
            <Card
              topColor="bg-Cyan"
              title="Supervisor"
              paragraph="Monitors activity to identify project roadblocks"
              image={IconSupervisor}
            />

            <Card
              topColor="bg-Red"
              title="Team Builder"
              paragraph="Scans our talent network to create the optimal team for your project"
              image={IconTeamBuilder}
            />

            <Card
              topColor="bg-Orange"
              title="Karma"
              paragraph="Regularly evaluates our talent to ensure quality"
              image={IconKarma}
            />

            <Card
              topColor="bg-Blue"
              title="Calculator"
              paragraph="Uses data from past projects to provide better delivery estimates"
              image={IconCalculator}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
