
import { Button } from "../Button";
import { CloseIcon } from "./icons/CloseIcon";

type Props = {
  onClose: () => void;
}

export const ButtonClose: React.FC<Props> = ({ onClose }) => {
  return (
    <Button type="button" onClick={onClose}>
      <CloseIcon />
    </Button>
  );
};
