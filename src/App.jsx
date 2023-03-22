
import style from "./App.module.css"

function App() {
  
  return (
    <div className={style.app}>
      <div className={style.profile}>
        <img src="images/profilePhoto.png"/>
        <span className={style.name}>Rodney Cotton</span>
        <span className={style.from}>Helsinki, Finland</span>
      </div>
      <div className={style.info}>
        <div>
          <span>100</span>
          <span>Posts</span>
        </div>
        <div>
          <span>2,242</span>
          <span>Follower</span>
        </div>
        <div>
          <span>1,432</span>
          <span>Following</span>
        </div>
      </div>


      <div className={style.gallery}>
        <img src="images/photo1.png" className={style.photo1}/>
        <img src="images/photo2.png" className={style.photo2}/>
        <img src="images/photo3.png" className={style.photo3}/>
        <img src="images/photo4.png" className={style.photo4}/>
        <img src="images/photo5.png" className={style.photo5}/>
        <img src="images/photo6.png" className={style.photo6}/>
      </div>


      <footer className={style.footer}>created by <span>Gonzalo-Erceg</span> - <a href="https://devchallenges.io" target={"_blank"}>devChallenges.io</a></footer>
    </div>
  )
}

export default App
