import type { IconType } from "react-icons";
import { Typography } from "./ui/Typography";

type ContactInfoProps = {
  icon: IconType;
  title: string;
  text: string;
};

const ContactInfo = ({ icon: Icon, title, text }: ContactInfoProps) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-card">
      <Icon className="h-8 w-8 text-primary mr-4" />
      <div>
        <Typography weight="semibold" size="md">
          {title}
        </Typography>
        <Typography variant="tertiary">{text}</Typography>
      </div>
    </div>
  );
};

export default ContactInfo;
