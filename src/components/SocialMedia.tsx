import style from "./SocialMedia.module.scss";
const SocialMedia = () => {
  return (
    <div>
      <div className={`${style.socialMedia}`}>
        <div className="heading">
          <h1>
            <i className="fa-brands fa-instagram m-1"></i>Follow Our Journey
          </h1>
        </div>
        <div className="subHeading">
          <h6>
            From street food truck to restaurant - See our daily creation and
            behind the scene moments
          </h6>
        </div>
        <div className="socialAccount">
          <h6>
            <a href="https://www.instagram.com/abhiscurrynmore/" target="_blank">
              <i className="fa-brands fa-instagram m-1"></i>
              <span>@abhiscurrynmore</span>
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
