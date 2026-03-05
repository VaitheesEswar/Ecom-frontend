function ProfileCard(prop) {
    const name = prop.name || "John Doe";
  return (
    <div className="profile-card">
      <img src="https://placehold.co/100@3x.png" alt="Profile" className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">A passionate developer who loves coding and learning new technologies.</p>
    </div>
  );
}
export default ProfileCard