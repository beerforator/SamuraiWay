import m from './Profile.module.css'
import PostSectionContainer from './profile_post_section/PostSectionContainer';

const Profile = (props) => {

  return (
    <main className={m.central_content}>
      <img className={m.profile_background} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5c36b47-cf4e-4419-bab7-563773de3778/d16jjhs-4ff7a3e8-724a-437c-8fcc-a18b13210e94.jpg" alt="" />
      <div className={m.profile}>
        <img className={m.profile_avatar} src="https://avatars.mds.yandex.net/i?id=9b3771e6b9265a3572ea609cd64978a27aab9849-7092330-images-thumbs&n=13" alt="" />
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
      <PostSectionContainer />
    </main>
  );
}

export default Profile;
