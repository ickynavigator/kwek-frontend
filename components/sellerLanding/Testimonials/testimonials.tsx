import React from "react";
import Styles from "./testimonials.module.scss";

import Image from "next/image";

const testimonials = () => {
  return (
    <div className={Styles.testimonials}>
      <div className={Styles.testimonialsAssurance}>
        <div className="tw-mx-2 md:tw-mx-10 lg:tw-mx-24 tw-text-center md:tw-text-left">
          <h3 className="tw-text-white-100 tw-font-semibold tw-text-base md:tw-text-2xl lg:tw-text-5xl">
            Don’t just take our word for it
          </h3>
          <p className="tw-text-xs md:tw-text-lg lg:tw-text-xl tw-font-normal">
            Feedback from these happy customers helps us in reaching the heights
          </p>
        </div>
      </div>

      <div className={Styles.feedback}>
        <div className={Styles.feedbackBox}>
          {/* <div className={Styles.feedbackBox_quote}>
            <Image src="/images/quote.png" height="68px" width="80px" />
          </div> */}
          <div className={Styles.feedbackBox_person}>
            <div className={`.circle-image ${Styles.feedbackBox_personImg}`}>
              <Image
                className={`circle-image ${Styles.feedbackBox_personImg}`}
                src="/images/testimonial-man.png"
                height="70px"
                width="70px"
              />
            </div>
            <div className={Styles.feedbackBox_personInfo}>
              <h4 className={Styles.feedbackBox_personInfo__head}>
                James Afuye
              </h4>
              <p className={Styles.feedbackBox_personInfo__sub}>
                Sales & Marketing
              </p>
            </div>
          </div>
          <div className={Styles.feedbackBox_message}>
            <p
              className={`tw-line-clamp-3 md:tw-line-clamp-4 lg:tw-line-clamp-5 xl:tw-line-clamp-none ${Styles.feedbackBox_messageContent}`}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum”
            </p>
          </div>

          <div className={Styles.feedbackBox_logo}>
            <div>
              <Image src="/svg/fed.svg" height="21px" width="41px" />
              <Image src="/svg/E-ex.svg" height="15px" width="11.44px" />
              <Image src="/svg/ex.svg" height="13px" width="18px" />
            </div>
            <div>
              <Image src="/svg/arrow-left-sm.svg" height="21px" width="41px" />{" "}
              <Image src="/svg/arrow-right-sm.svg" height="21px" width="41px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonials;
