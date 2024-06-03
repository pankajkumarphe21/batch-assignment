import React from "react";
import Image from "next/image";

const Advantages = () => {
  return (
    <div>
      <div className="flex relative max-sm:flex-col max-sm:mx-[4vw]">
        <div className="absolute top-[40px] sm:left-[360px] md:left-[460px] lg:left-[620px] xl:left-[740px] w-72 h-64 bg-gradient-to-b blur-lg opacity-75 from-red-600 to-yellow-200 rounded-[200px] max-sm:hidden"></div>
        <div className="absolute max-sm:top-[510px] max-sm:left-[164px]  top-[190px] left-[62vw] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black "></div>
        <div className="absolute max-sm:top-[510px] max-sm:left-[179px] top-[199px] left-[63vw] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
        <div className="absolute max-sm:top-[510px] max-sm:left-[194px] top-[199px] left-[64vw] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
        <div className="flex flex-col sm:ml-4 md:ml-12 lg:ml-24 xl:ml-32 w-[30%] max-sm:w-[100%]">
          <h6 className="text-red-500">ADVANTAGES</h6>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Why Choose Uifry?
          </h1>
          <div className="flex items-center my-4">
            <Image
              src="/images/Group 35899.png"
              alt="Hi"
              height={48}
              width={48}
            />
            <p className="ml-[10px] font-bold text-lg">Clever Notifications</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            accusamus dolorum nihil excepturi? Id pariatur autem earum iste
            nulla voluptatum odio vel neque, unde beatae dolorum exercitationem
            dolore sunt odit! Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="relative">
          <Image
            className="ml-[243px] max-sm:mt-[-15px] max-sm:ml-[43px] mt-[-55px]"
            src="/images/iPhone-13-Pro-Front(3).png"
            alt="Hi"
            height={180}
            width={360}
          />
        </div>
      </div>
      <div className="flex relative">
      <div className="absolute top-[40px] sm:left-[160px] md:left-[180px] lg:left-[200px] xl:left-[220px] w-72 h-64 bg-gradient-to-b blur-lg opacity-75 max-sm:hidden from-red-600 to-yellow-200 rounded-[200px]"></div>
        <div className="absolute max-sm:top-[630px] max-sm:left-[170px] top-[230px] left-[370px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black "></div>
        <div className="absolute max-sm:top-[600px] max-sm:left-[200px] top-[200px] left-[400px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
        <div className="absolute max-sm:top-[570px] max-sm:left-[230px] top-[170px] left-[430px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
        <div className="relative">
        <Image className="ml-[243px] mt-[-55px] max-sm:mt-[355px] max-sm:ml-[53px]" src='/images/iPhone-13-Pro-Front(4).png' alt='Hi' height={180} width={360} />
        <Image className="relative max-sm:ml-[108px] ml-[298px] mt-[-442px] hover:scale-[1.01]" src='/images/Group.png' alt='Hi' height={130} width={230} />
      </div>
      <div className="flex flex-col max-sm:ml-[-380px] ml-24 max-sm:w-[90%] w-[30%]">
        <div className="flex items-center mb-4 mt-24">
          <Image
            src="/images/Group 35899(1).png"
            alt="Hi"
            height={48}
            width={48}
          />
          <p className="ml-[10px] font-bold text-lg">Fully Customizable</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusamus dolorum nihil excepturi? Id pariatur autem earum iste nulla
          voluptatum odio vel neque, unde beatae dolorum exercitationem dolore
          sunt odit! Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
    </div>
  );
};

export default Advantages;
