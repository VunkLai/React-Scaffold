const content = Array.from({ length: 100 }, () => ({
  label: "content",
}));

const Profile = () => {
  return (
    <div className="flex flex-col min-h-full p-4">
      <div>header</div>
      <div className="overflow-y-auto dev">
        {content.map((item, index) => (
          <div key={index}>
            {item.label}. {index}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
