import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function SwAleart({
  title,
  text,
  icon,
  confirmButtonText,
}: {
  title: string;
  text: string;
  icon: SweetAlertIcon;
  confirmButtonText?: string;
}) {
  MySwal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
}
