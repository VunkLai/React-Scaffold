import { Card } from "@mui/material";

const content = Array.from({ length: 50 }, () => ({
  label: "content",
}));

const Profile = () => {
  return (
    <div className="flex flex-col min-h-full gap-2">
      <div className="flex-shrink-0 p-2 dev h-96">
        <Card sx={{ weight: 1, height: 1 }} variant="outlined">
          card
        </Card>
      </div>
      <div className="flex flex-col min-h-full m-2 dev">
        <h1>Header</h1>
        <div className="flex gap-4 px-4 overflow-hidden">
          <div className="px-4 overflow-y-auto">
            {content.map((_, index) => (
              <div key={index}>sidebar. {index}</div>
            ))}
          </div>
          <div className="flex-grow overflow-y-auto">
            {content.map((item, index) => (
              <div key={index}>
                {item.label}. {index}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">footer</div>
    </div>
  );
};

export default Profile;
