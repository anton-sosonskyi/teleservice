import { Link } from "react-router-dom";

type Props = {
  title: string;
  url: string;
  renderIcon: () => JSX.Element;
};

export const SupportTicket: React.FC<Props> = ({ url, renderIcon, title }) => {
  return (
    <Link to={`/support${url}`} className="h-[168px] p-[2px] grow basis-0">
      <div className="h-full flex flex-col justify-center items-center gap-[16px] text-center bg-white">
        {renderIcon()}

        <h3 className="text-sm font-semibold text-black-dark">{title}</h3>
      </div>
    </Link>
  );
};
