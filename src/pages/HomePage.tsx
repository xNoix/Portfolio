import profile from '../assets/profileImg.jpg';

function Home() {
  return (
    <div>
      <div>
        <h2>About me</h2>
        <h1>Hi there, I´m Nicolás Cofré</h1>
        <p>
          a software engineer, my passion lies in creating innovative solutions
          that make a positive impact on my clients. I´m driven to solve complex
          problems and create high-quality software that meets the needs of
          users and businesses alike.
        </p>
        <div>
          <button type="button">Contact me</button>
          <button type="button">Download cv</button>
        </div>
      </div>
      <div>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Home;
