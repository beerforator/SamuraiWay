import m from './Profile.module.css'
import PostSection from './profile_post_section/PostSection';

const Profile = () => {
  return (
    <main className={m.central_content}>
      <img className={m.profile_background} src="https://s0.rbk.ru/v6_top_pics/media/img/4/62/756576248272624.jpg" alt=""/>
      <div className={m.profile}>
        <img className={m.profile_avatar} src="https://avatars.mds.yandex.net/i?id=9b3771e6b9265a3572ea609cd64978a27aab9849-7092330-images-thumbs&n=13" alt=""/>
        <div className={m.profile_info}>
          <h2>Ilyha Manahoov</h2>
          <div>
            <p>City: Moscow</p>
            <p>Birthdate: 22/04/2004</p>
            <p>Favourite food: Steak</p>
            <p>Foot size: 44</p>
          </div>
        </div>
      </div>
      <PostSection />
    </main>
  );
}

export default Profile;
